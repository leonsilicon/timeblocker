<script setup lang="ts">
import { watch } from 'vue';
import { useMouse } from '@vueuse/core';
import { useTimeblockStore } from '~f/store/timeblock';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';

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

function onTopBorderMouseUp() {
	if (topBorderInitialMouseY !== undefined) {
		isTopBorderDragging = false;
		timeblockStore.activeTimeblock
			.getTaskBlock(props.taskBlockId)
			.setStartMinute(
				1 + taskBlock.getStartMinute() + (mouseY - topBorderInitialMouseY)
			);
	}

	topBorderInitialMouseY = undefined;
}

function onBottomBorderMouseDown(event: MouseEvent) {
	isBottomBorderDragging = true;
	bottomBorderInitialMouseY = event.pageY;
}

function onBottomBorderMouseUp() {
	if (bottomBorderInitialMouseY !== undefined) {
		isBottomBorderDragging = false;
		timeblockStore.activeTimeblock
			.getTaskBlock(props.taskBlockId)
			.setEndMinute(
				1 + taskBlock.getEndMinute() + (mouseY - bottomBorderInitialMouseY)
			);
	}
}

let borderDraggingTimeblockTaskBlockStyle = $ref<{
	gridRowStart?: number;
	gridRowEnd?: number;
}>({});

watch(
	() => [isTopBorderDragging, isBottomBorderDragging, mouseY],
	() => {
		if (isTopBorderDragging && topBorderInitialMouseY !== undefined) {
			borderDraggingTimeblockTaskBlockStyle = {
				gridRowStart:
					1 + taskBlock.getStartMinute() + (mouseY - topBorderInitialMouseY),
			};
		} else if (
			isBottomBorderDragging &&
			bottomBorderInitialMouseY !== undefined
		) {
			borderDraggingTimeblockTaskBlockStyle = {
				gridRowEnd:
					1 + taskBlock.getEndMinute() + (mouseY - bottomBorderInitialMouseY),
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
			class="absolute left-0 right-0 h-2 top-0 cursor-n-resize"
			@mousedown.stop="onTopBorderMouseDown"
			@mouseup="onTopBorderMouseUp"
		></div>
		{{ task.getName() }}
		<div
			class="absolute left-0 right-0 h-2 bottom-0 cursor-s-resize"
			@mousedown.stop="onBottomBorderMouseDown"
			@mouseup="onBottomBorderMouseUp"
		></div>
	</div>
</template>
