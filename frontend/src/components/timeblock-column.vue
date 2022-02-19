<script setup lang="ts">
import { reactive } from 'vue';
import { nanoid } from 'nanoid';
import { useTimeblockStore } from '~f/store/timeblock';
import { TimeblockDate } from '~f/types/date';
import { calculateTaskBlocksRatios } from '~f/utils/task-block';
import TimeblockTaskBlock from '~f/components/timeblock-task-block.vue';
import TimeblockColumnBackground from '~f/components/timeblock-column-background.vue';
import { TaskBlock } from '~f/classes/task-block';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';
import { displayError } from '~f/utils/error';
import { client } from '~f/utils/trpc';

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

	for (const {
		taskId,
		startMinute,
		endMinute,
		timeblockColumnId,
		id,
	} of timeblockTaskBlocks) {
		const taskBlock = new TaskBlock({
			id,
			startMinute,
			endMinute,
			timeblockColumnId,
			task: timeblock.getTask(taskId),
			timeblock,
		});
		timeblock.addTaskBlock(taskBlock);
		timeblock.getColumn(timeblockColumnId)?.addTaskBlock(id);
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
});

const timeblockColumnEl = $ref<HTMLDivElement>();
function onDragOver(event: DragEvent) {
	const y = event.clientY - timeblockColumnEl.getBoundingClientRect().top;
	isTaskBlockShadowActive = true;
	const nearest15 = Math.round(y / 15) * 15;
	taskBlockShadowStyle['grid-row-start'] = nearest15 + 1;
	taskBlockShadowStyle['grid-row-end'] = nearest15 + 1 + 60;
}

async function onDrop(event: DragEvent) {
	isTaskBlockShadowActive = false;
	const dropDataString = event.dataTransfer?.getData('text');
	if (dropDataString !== undefined) {
		const dropData = JSON.parse(dropDataString) as TaskBoxDropData;
		if (dropData.type === TaskBoxDropType.taskBoxDrop) {
			const { payload } = dropData;

			const y = event.clientY - timeblockColumnEl.getBoundingClientRect().top;
			const nearest15 = Math.round(y / 15) * 15;

			const { activeTimeblock } = timeblockStore;
			const startMinute = nearest15;
			const endMinute = nearest15 + 60;

			if ('taskId' in payload) {
				const task = activeTimeblock.getTask(payload.taskId);
				if (task === undefined) {
					displayError('Task not found.');
					return;
				}

				const taskBlock = new TaskBlock({
					id: nanoid(),
					timeblock: activeTimeblock,
					task,
					startMinute,
					endMinute,
					timeblockColumnId: props.timeblockColumnId,
				});

				activeTimeblock.addTaskBlock(taskBlock);
				activeTimeblock
					.getColumn(props.timeblockColumnId)
					?.addTaskBlock(taskBlock.getId());

				await client.mutation('addTimeblockTaskBlock', {
					taskBlockId: taskBlock.getId(),
					taskId: payload.taskId,
					timeblockColumnId: props.timeblockColumnId,
					startMinute,
					endMinute,
				});
			} else if ('sourceTaskBlockId' in payload) {
				const taskBlock = activeTimeblock.getTaskBlock(
					payload.sourceTaskBlockId
				);

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
				}
			}
		}
	}
}
</script>

<template>
	<div
		ref="timeblockColumnEl"
		:style="timeblockColumnStyle"
		class="border-b border-gray-200 -z-1"
		@drop="onDrop"
		@dragover.prevent="onDragOver"
	>
		<div
			v-if="isTaskBlockShadowActive"
			:style="taskBlockShadowStyle"
			class="bg-red-100 rounded-md"
		></div>
		<TimeblockColumnBackground style="grid-row: 1 / -1; grid-column: 1 / -1" />
		<TimeblockTaskBlock
			v-for="(taskBlock, i) of taskBlocks"
			:key="taskBlock.getId()"
			:task-block-id="taskBlock.getId()"
			:height-ratio="taskBlockHeightRatios[i]!"
		/>
	</div>
</template>
