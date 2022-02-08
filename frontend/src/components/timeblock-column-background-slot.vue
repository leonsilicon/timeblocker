<script setup lang="ts">
import { nanoid } from 'nanoid';
import { TaskBlock } from '~f/classes/task-block';
import { useTimeblockStore } from '~f/store/define';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';
import { getTodayDayjs, timeblockDateToDayjs } from '~f/utils/date';
import { logError } from '~f/utils/log';

const props = defineProps<{
	columnVersionNumber: number;
	startDayMinute: number;
	endDayMinute: number;
}>();

const slotStyle = $computed(() => ({
	'grid-row-start': 1 + props.startDayMinute,
	'grid-row-end': 1 + props.endDayMinute,
	'grid-column': '1 / span 1',
}));

const timeblockStore = useTimeblockStore();

function onDrop(event: DragEvent) {
	const dropDataString = event.dataTransfer?.getData('text');
	if (dropDataString !== undefined) {
		const dropData = JSON.parse(dropDataString) as TaskBoxDropData;
		if (dropData.type === TaskBoxDropType.taskBoxDrop) {
			const { taskId } = dropData.payload;
			const { activeTimeblock } = timeblockStore;
			const task = activeTimeblock.getTask(taskId);
			if (task === undefined) {
				logError('Task not found.');
				return;
			}

			const activeDate = timeblockDateToDayjs(activeTimeblock.getDate());

			const startTimestamp = activeDate
				.add(props.startDayMinute, 'minutes')
				.unix();
			const endTimestamp = activeDate.add(props.endDayMinute, 'minutes').unix();

			const taskBlock = new TaskBlock({
				id: nanoid(),
				task,
				startTimestamp,
				endTimestamp,
			});

			timeblockStore.activeTimeblock
				.getColumn(props.columnVersionNumber)!
				.addTaskBlock(taskBlock);
		}
	}
}
</script>

<template>
	<div
		:style="slotStyle"
		class="w-full h-full border-t border-x border-gray-200 absolute"
		@drop.prevent="onDrop"
		@dragover.prevent
	></div>
</template>
