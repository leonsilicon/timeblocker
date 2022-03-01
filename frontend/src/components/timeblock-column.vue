<script setup lang="ts">
import { reactive } from 'vue';
import { nanoid } from 'nanoid-nice';
import { useTimeblockStore } from '~f/store/timeblock';
import { TimeblockDate } from '~f/types/date';
import { calculateTaskBlocksRatios } from '~f/utils/task-block';
import TimeblockTaskBlock from '~f/components/timeblock-task-block.vue';
import TimeblockColumnBackground from '~f/components/timeblock-column-background.vue';
import { TaskBlock } from '~f/classes/task-block';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';
import { displayError } from '~f/utils/error';
import { client } from '~f/utils/trpc';
import { roundToNearest15 } from '~f/utils/round';
import { FixedWeeklyTimeTaskBlock } from '~f/classes/fixed-weekly-time-task-block';
import { FixedTimeTaskBlock } from '~f/classes/fixed-time-task-block';
import { FixedTimeTask } from '~f/classes/fixed-time-task';
import { FixedWeeklyTimeTask } from '~f/classes/fixed-weekly-time-task';
import dayjs from 'dayjs';

const props = defineProps<{
	timeblockColumnId: string;
	date: TimeblockDate;
}>();

const timeblockStore = useTimeblockStore();

(async () => {
	const timeblockTaskBlocks = await client.query('getTimeblockTaskBlocks', {
		timeblockColumnId: props.timeblockColumnId,
	});

	const timeblock = timeblockStore.activeTimeblock;

	for (const block of timeblockTaskBlocks) {
		let taskBlock: TaskBlock;
		const taskType = timeblock.getTask(block.taskId).getType();

		switch (taskType) {
			case 'normal': {
				taskBlock = new TaskBlock({
					id: block.id,
					startMinute: block.startMinute,
					endMinute: block.endMinute,
					timeblockColumnId: block.timeblockColumnId,
					task: timeblock.getTask(block.taskId),
					timeblock,
				});
				break;
			}

			case 'fixed-time': {
				taskBlock = new FixedTimeTaskBlock({
					id: block.id,
					startMinute: block.startMinute,
					endMinute: block.endMinute,
					timeblockColumnId: block.timeblockColumnId,
					task: timeblock.getTask(block.taskId) as FixedTimeTask,
					timeblock,
				});
				break;
			}

			case 'fixed-weekly-time': {
				taskBlock = new FixedWeeklyTimeTaskBlock({
					id: block.id,
					startMinute: block.startMinute,
					endMinute: block.endMinute,
					timeblockColumnId: block.timeblockColumnId,
					task: timeblock.getTask(block.taskId) as FixedWeeklyTimeTask,
					timeblock,
				});
				break;
			}

			default:
				throw new Error(`Unrecognized task type ${taskType}`);
		}

		timeblock.addTaskBlock(taskBlock);
		timeblock.getColumn(block.timeblockColumnId)?.addTaskBlock(block.id);
	}
})();

const taskBlocks = $computed(
	() =>
		timeblockStore.activeTimeblock
			.getColumn(props.timeblockColumnId)
			?.getTaskBlocks() ?? []
);

const taskBlockHeightRatios = $computed(() =>
	calculateTaskBlocksRatios({
		taskBlocks,
	})
);

const timeblockColumnStyle = $computed(() => ({
	display: 'grid',
	'grid-template-rows': 'repeat(1440, 1px)', // 1440 minutes in a day
	'grid-template-columns': `1fr`,
}));

let isTaskBlockShadowActive = $ref(false);
const taskBlockShadowStyle = reactive({
	'grid-column': '1 / span 1',
	'grid-row-start': 1,
	'grid-row-end': 61,
	'background-color': 'white',
});

const timeblockColumnEl = $ref<HTMLDivElement>();
function onDragOver(event: DragEvent) {
	const { activeDraggingTaskBlock } = timeblockStore;

	isTaskBlockShadowActive = true;

	if (activeDraggingTaskBlock === undefined) {
		const y = event.pageY - timeblockColumnEl.getBoundingClientRect().y;
		const nearest15 = roundToNearest15(y);
		taskBlockShadowStyle['grid-row-start'] = nearest15 + 1;
		taskBlockShadowStyle['grid-row-end'] = nearest15 + 1 + 60;
	} else {
		const taskBlock = timeblockStore.activeTimeblock.getTaskBlock(
			activeDraggingTaskBlock.id
		);
		const y =
			taskBlock.getStartMinute() +
			(event.pageY - activeDraggingTaskBlock.initialMouseY);
		const nearest15 = roundToNearest15(y);
		taskBlockShadowStyle['grid-row-start'] = nearest15 + 1;
		taskBlockShadowStyle['grid-row-end'] =
			nearest15 + 1 + (taskBlock.getEndMinute() - taskBlock.getStartMinute());
		taskBlockShadowStyle['background-color'] = timeblockStore.activeTimeblock
			.getTaskBlock(activeDraggingTaskBlock.id)
			.getTask()
			.getColor();
	}
}

function onDragLeave() {
	isTaskBlockShadowActive = false;
}

async function onDrop(event: DragEvent) {
	isTaskBlockShadowActive = false;
	const dropDataString = event.dataTransfer?.getData('text') ?? '';

	const { activeDraggingTaskBlock } = timeblockStore;
	if (dropDataString === '') return;

	const dropData = JSON.parse(dropDataString) as TaskBoxDropData;
	if (dropData.type === TaskBoxDropType.taskBoxDrop) {
		const { payload } = dropData;

		const { activeTimeblock } = timeblockStore;

		if ('taskId' in payload) {
			const y = event.clientY - timeblockColumnEl.getBoundingClientRect().top;
			const startMinute = Math.round(y / 15) * 15;
			const endMinute = startMinute + 60; // Tasks are by default 1 hour long
			const task = activeTimeblock.getTask(payload.taskId);
			if (task === undefined) {
				displayError('Task not found.');
				return;
			}

			let taskBlock: TaskBlock;

			switch (task.getType()) {
				case 'normal': {
					taskBlock = new TaskBlock({
						id: nanoid(),
						timeblock: activeTimeblock,
						task,
						startMinute,
						endMinute,
						timeblockColumnId: props.timeblockColumnId,
					});

					break;
				}

				case 'fixed-time': {
					taskBlock = new FixedTimeTaskBlock({
						id: nanoid(),
						timeblock: activeTimeblock,
						task: task as FixedTimeTask,
						startMinute,
						endMinute,
						timeblockColumnId: props.timeblockColumnId,
					});

					break;
				}

				case 'fixed-weekly-time': {
					taskBlock = new FixedWeeklyTimeTaskBlock({
						id: nanoid(),
						timeblock: activeTimeblock,
						task: task as FixedWeeklyTimeTask,
						startMinute,
						endMinute,
						timeblockColumnId: props.timeblockColumnId,
					});

					(task as FixedWeeklyTimeTask).setDayOfWeek(dayjs().day());

					break;
				}

				default:
					throw new Error(`Unrecognized task type ${task.getType()}`);
			}

			activeTimeblock.addTaskBlock(taskBlock);
			activeTimeblock
				.getColumn(props.timeblockColumnId)
				?.addTaskBlock(taskBlock.getId());

			await client.mutation('createTimeblockTaskBlocks', {
				timeblockColumnId: props.timeblockColumnId,
				taskBlocks: [
					{
						taskBlockId: taskBlock.getId(),
						taskId: payload.taskId,
						startMinute,
						endMinute,
						dayOfWeek:
							task instanceof FixedWeeklyTimeTask
								? task.getDayOfWeek()
								: undefined,
					},
				],
			});
		} else if ('sourceTaskBlockId' in payload) {
			if (activeDraggingTaskBlock === undefined) return;

			const taskBlock = activeTimeblock.getTaskBlock(payload.sourceTaskBlockId);

			const y =
				taskBlock.getStartMinute() +
				(event.pageY - activeDraggingTaskBlock.initialMouseY);
			const startMinute = Math.round(y / 15) * 15;
			const endMinute =
				startMinute + (taskBlock.getEndMinute() - taskBlock.getStartMinute());

			if (taskBlock === undefined) {
				displayError(`Task block is undefined.`);
			} else {
				taskBlock.setStartMinute(startMinute);
				taskBlock.setEndMinute(endMinute);
				const sourceTimeblockColumnId = taskBlock.getTimeblockColumnId()!;
				activeTimeblock
					.getColumn(sourceTimeblockColumnId)
					?.removeTaskBlock(taskBlock.getId());
				activeTimeblock
					.getColumn(props.timeblockColumnId)
					?.addTaskBlock(taskBlock.getId());

				await client.mutation('updateTimeblockTaskBlock', {
					timeblockColumnId: props.timeblockColumnId,
					taskBlockId: taskBlock.getId(),
					startMinute,
					endMinute,
				});
			}
		}
	}
}
</script>

<template>
	<div
		ref="timeblockColumnEl"
		:style="timeblockColumnStyle"
		class="-z-1 border-b border-gray-200"
		@drop="onDrop"
		@dragover.prevent="onDragOver"
		@dragleave.prevent="onDragLeave"
	>
		<div
			v-if="isTaskBlockShadowActive"
			:style="taskBlockShadowStyle"
			class="rounded-md"
		></div>
		<TimeblockColumnBackground style="grid-row: 1 / -1; grid-column: 1 / -1" />
		<TimeblockTaskBlock
			v-for="(taskBlock, i) of taskBlocks"
			:key="taskBlock.getId()"
			:task-block-id="taskBlock.getId()"
			:height-ratio="taskBlockHeightRatios[i]!"
			:timeblock-column-id="timeblockColumnId"
		/>
	</div>
</template>
