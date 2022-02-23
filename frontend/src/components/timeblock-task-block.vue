<script setup lang="ts">
import { watch } from 'vue';
import { useMouse } from '@vueuse/core';
import { useTimeblockStore } from '~f/store/timeblock';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';
import { roundToNearest15 } from '~f/utils/round';
import { client } from '~f/utils/trpc';

let borderDraggingTimeblockTaskBlockStyle = $ref<{
	'grid-row-start'?: number;
	'grid-row-end'?: number;
}>({});

const props = defineProps<{
	timeblockColumnId: string;
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
	'grid-row-start': 1 + taskBlock.getStartMinute(),
	'grid-row-end': 1 + taskBlock.getEndMinute(),
}));

let isTopBorderDragging = $ref(false);
let topBorderInitialMouseY = $ref<number | undefined>(undefined);
let isBottomBorderDragging = $ref(false);
let bottomBorderInitialMouseY = $ref<number | undefined>(undefined);

function onDragStart(event: DragEvent) {
	if (isTopBorderDragging || isBottomBorderDragging) {
		event.preventDefault();
		return;
	}

	timeblockStore.activeDraggingTaskBlock = {
		id: props.taskBlockId,
		initialMouseY: event.pageY,
	};
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

function onDragEnd() {
	timeblockStore.activeDraggingTaskBlock = undefined;
}

const taskBlockEl = $ref<HTMLDivElement>();

const { y: mouseY } = $(useMouse());

function onTopBorderMouseDown(event: MouseEvent) {
	isTopBorderDragging = true;
	topBorderInitialMouseY = event.pageY;
}

window.addEventListener('mouseup', async () => {
	if (!isTopBorderDragging) return;
	isTopBorderDragging = false;

	const newStartMinute = getNewStartMinute();
	timeblockStore.activeTimeblock
		.getTaskBlock(props.taskBlockId)
		.setStartMinute(newStartMinute);

	await client.mutation('updateTimeblockTaskBlock', {
		timeblockColumnId: props.timeblockColumnId,
		taskBlockId: props.taskBlockId,
		startMinute: newStartMinute,
	});

	topBorderInitialMouseY = undefined;
	borderDraggingTimeblockTaskBlockStyle = {};
});

function onBottomBorderMouseDown(event: MouseEvent) {
	isBottomBorderDragging = true;
	bottomBorderInitialMouseY = event.pageY;
}

window.addEventListener('mouseup', async () => {
	if (!isBottomBorderDragging) return;

	isBottomBorderDragging = false;
	const newEndMinute = getNewEndMinute();
	timeblockStore.activeTimeblock
		.getTaskBlock(props.taskBlockId)
		.setEndMinute(newEndMinute);

	await client.mutation('updateTimeblockTaskBlock', {
		timeblockColumnId: props.timeblockColumnId,
		taskBlockId: props.taskBlockId,
		endMinute: newEndMinute,
	});

	bottomBorderInitialMouseY = undefined;
	borderDraggingTimeblockTaskBlockStyle = {};
});

function getNewStartMinute() {
	if (topBorderInitialMouseY === undefined) return taskBlock.getStartMinute();

	return Math.min(
		taskBlock.getEndMinute() - 16,
		roundToNearest15(
			taskBlock.getStartMinute() + (mouseY - topBorderInitialMouseY)
		)
	);
}

function getNewEndMinute() {
	if (bottomBorderInitialMouseY === undefined) return taskBlock.getEndMinute();

	return Math.max(
		taskBlock.getStartMinute() + 16,
		roundToNearest15(
			taskBlock.getEndMinute() + (mouseY - bottomBorderInitialMouseY)
		)
	);
}

watch(
	() => [isTopBorderDragging, isBottomBorderDragging, mouseY],
	() => {
		if (isTopBorderDragging && topBorderInitialMouseY !== undefined) {
			borderDraggingTimeblockTaskBlockStyle = {
				'grid-row-start': 1 + getNewStartMinute(),
			};
		} else if (
			isBottomBorderDragging &&
			bottomBorderInitialMouseY !== undefined
		) {
			borderDraggingTimeblockTaskBlockStyle = {
				'grid-row-end': 1 + getNewEndMinute(),
			};
		}
	}
);
</script>

<template>
	<div
		ref="taskBlockEl"
		draggable="true"
		class="relative column center rounded-md bg-red-200 cursor-grab active:cursor-grabbing"
		:style="[timeblockTaskBlockStyle, borderDraggingTimeblockTaskBlockStyle]"
		@dragstart="onDragStart"
		@dragend="onDragEnd"
	>
		<div
			class="absolute left-0 right-0 h-[4px] top-0 cursor-ns-resize"
			@mousedown.stop="onTopBorderMouseDown"
		></div>
		{{ task.getName() }}
		<div
			class="absolute left-0 right-0 h-[4px] bottom-0 cursor-ns-resize"
			@mousedown.stop="onBottomBorderMouseDown"
		></div>
	</div>
</template>
