<script setup lang="ts">
import { nextTick } from 'vue';
import { nanoid } from 'nanoid-nice';
import { mdiDelete } from '@mdi/js';
import { displayError } from '~f/utils/error';
import { Task } from '~f/classes/task';
import TimeblockTaskBox from '~f/components/timeblock-task-box.vue';
import { useTimeblockStore } from '~f/store';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';
import { client } from '~f/utils/trpc';
import TimeblockTaskBoxEditor from '~f/components/timeblock-task-box-editor.vue';
import TimeblockPageTaskDockAddTaskButton from '~f/components/timeblock-page-task-dock-add-task-button.vue';

const timeblockStore = useTimeblockStore();

const visibleTasks = $computed(() =>
	timeblockStore.activeTimeblock
		.getOrderedTaskIds()
		.map((taskId) => timeblockStore.activeTimeblock.getTask(taskId))
		.filter((task) => !task.getIsHidden())
);

const timeblockTaskBoxEditorEl =
	$ref<InstanceType<typeof TimeblockTaskBoxEditor>>();

let newTaskName = $ref('');
let newTaskDescription = $ref('');
let selectedTaskType = $ref('');
let isNewTaskEditorVisible = $ref(false);

async function onNewTaskSelect(taskType: string) {
	selectedTaskType = taskType;
	await nextTick();
	timeblockTaskBoxEditorEl.focusNameInput();
}

async function addTask() {
	if (newTaskName.trim() !== '') {
		const taskId = nanoid();
		const newTask = new Task({
			id: taskId,
			name: newTaskName,
			description: newTaskDescription,
			isHidden: false,
		});

		timeblockStore.activeTimeblock.addTask(newTask);

		try {
			await client.mutation('addTimeblockTask', {
				id: taskId,
				name: newTaskName,
				description: newTaskDescription,
			});
		} catch (error: unknown) {
			displayError(error);
		}
	}

	// Reset the new task textbox
	newTaskName = '';
	newTaskDescription = '';
	isNewTaskEditorVisible = false;
}

/**
 * Adds the task to the store only if the task name isn't empty
 */
let isDeleteOverlayVisible = $ref(false);

function onDragOver() {
	if (timeblockStore.activeDraggingTaskBlock === undefined) return;
	isDeleteOverlayVisible = true;
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
		class="column relative w-[250px] shrink-0 items-center"
		@drop="onDrop"
		@dragover.prevent="onDragOver"
		@dragleave="onDragLeave"
	>
		<!-- Delete overlay -->
		<div
			v-if="isDeleteOverlayVisible"
			class="column center pointer-events-none absolute inset-0 rounded-md bg-[rgba(255,0,0,0.5)]"
		>
			<v-icon :size="50" :icon="mdiDelete"></v-icon>
			<div class="text-black">Delete Task Block</div>
		</div>

		<div class="mb-2 text-3xl font-bold">Tasks</div>
		<TimeblockPageTaskDockAddTaskButton @select="onNewTaskSelect" />

		<TimeblockTaskBoxEditor
			v-if="isNewTaskEditorVisible"
			ref="timeblockTaskBoxEditorEl"
			v-model:name="newTaskName"
			v-model:description="newTaskDescription"
			:task-type="selectedTaskType"
			@blur="addTask"
		/>

		<TimeblockTaskBox
			v-for="task of visibleTasks"
			:id="task.getId()"
			:key="task.getId()"
		/>
	</div>
</template>
