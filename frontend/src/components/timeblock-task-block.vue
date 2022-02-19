<script setup lang="ts">
import { useTimeblockStore } from '~f/store/timeblock';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';
import { getTodayDayjs } from '~f/utils/date';

const props = defineProps<{
	taskBlockId: string;
	heightRatio: number;
}>();
const timeblockStore = useTimeblockStore();
const taskBlock = $computed(() =>
	timeblockStore.activeTimeblock.getTaskBlock(props.taskBlockId)
);
const task = $computed(() => taskBlock.getTask());

const timeblockTaskBlockStyle = $computed(() => ({
	'grid-column': '1 / span 1',
	'grid-row-start': 1 + taskBlock.getStartMinute() / 60,
	'grid-row-end': 1 + taskBlock.getEndMinute() / 60,
}));

function onDragStart(event: DragEvent) {
	event.dataTransfer?.setData(
		'text',
		JSON.stringify<TaskBoxDropData>({
			type: TaskBoxDropType.taskBoxDrop,
			payload: {
				sourceTaskBlockId: props.taskBlockId,
			},
		})
	);
}
</script>

<template>
	<div
		draggable="true"
		class="column center rounded-md bg-red-200 cursor-grab active:cursor-grabbing"
		:style="timeblockTaskBlockStyle"
		@dragstart="onDragStart"
	>
		{{ task.getName() }}
	</div>
</template>
