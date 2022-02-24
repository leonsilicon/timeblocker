<script setup lang="ts">
import { mdiDelete } from '@mdi/js';
import { nextTick } from 'vue';
import TimeblockTaskBox from '~f/components/timeblock-task-box.vue';
import { useTimeblockStore } from '~f/store';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';
import { client } from '~f/utils/trpc';
import TimeblockTaskBoxEditor from '~f/components/timeblock-task-box-editor.vue';

const timeblockStore = useTimeblockStore();

const tasks = $computed(() =>
	timeblockStore.activeTimeblock
		.getOrderedTaskIds()
		.map((taskId) => timeblockStore.activeTimeblock.getTask(taskId)!)
);

let isNewTaskTemplateVisible = $ref(false);
const timeblockTaskBoxEditor =
	$ref<InstanceType<typeof TimeblockTaskBoxEditor>>(false);

async function onAddTaskClick() {
	isNewTaskTemplateVisible = true;
	// Wait until the input appears in the DOM
	await nextTick();
	timeblockTaskBoxEditor.focusNameInput();
}

/**
 * Adds the task to the store only if the task name isn't empty
 */
let isDeleteOverlayVisible = $ref(false);

function onDragOver(event: DragEvent) {
	const data = event.dataTransfer?.getData('text') ?? '';
	if (data === '') return;

	const dropData = JSON.parse(data) as TaskBoxDropData;
	if (dropData.type === TaskBoxDropType.taskBoxDrop) {
		const { payload } = dropData;

		if ('sourceTaskBlockId' in payload) {
			isDeleteOverlayVisible = true;
		}
	}
}

function onDragLeave() {
	isDeleteOverlayVisible = false;
}

async function onDrop(event: DragEvent) {
	isDeleteOverlayVisible = false;

	const data = event.dataTransfer?.getData('text') ?? '';
	if (data === '') return;

	const dropData = JSON.parse(data) as TaskBoxDropData;
	if (dropData.type === TaskBoxDropType.taskBoxDrop) {
		const { payload } = dropData;

		if ('sourceTaskBlockId' in payload) {
			const taskBlock = timeblockStore.activeTimeblock.getTaskBlock(
				payload.sourceTaskBlockId
			);
			const columnId = taskBlock.getTimeblockColumnId()!;

			timeblockStore.activeTimeblock
				.getColumn(columnId)
				?.removeTaskBlock(payload.sourceTaskBlockId);

			await client.mutation('deleteTimeblockTaskBlock', {
				taskBlockId: payload.sourceTaskBlockId,
				timeblockColumnId: columnId,
			});
		}
	}
}
</script>

<template>
	<div
		v-show="timeblockStore.isTaskDockOpen"
		class="relative items-center column shrink-0 w-[250px]"
		@drop="onDrop"
		@dragover.prevent="onDragOver"
		@dragleave="onDragLeave"
	>
		<!-- Delete overlay -->
		<div
			v-if="isDeleteOverlayVisible"
			class="rounded-md column center absolute inset-0 bg-[rgba(255,0,0,0.5)] pointer-events-none"
		>
			<v-icon :size="50" :icon="mdiDelete"></v-icon>
			<div class="text-black">Delete Task Block</div>
		</div>

		<div class="font-bold text-3xl mb-2">Tasks</div>
		<div class="btn btn-primary btn-sm min-h-2 h-2" @click="onAddTaskClick">
			Add Task
		</div>

		<TimeblockTaskBoxEditor v-if="isNewTaskTemplateVisible" />

		<TimeblockTaskBox
			v-for="task of tasks"
			:id="task.getId()"
			:key="task.getId()"
		/>
	</div>
</template>
