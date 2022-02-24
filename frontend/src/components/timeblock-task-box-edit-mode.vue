<script setup lang="ts">
import { Task } from '~f/classes/task';
import { nanoid } from 'nanoid-nice';
import { nextTick } from 'vue';
import { displayError } from '~f/utils/error';

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
				timeblockId: timeblockStore.activeTimeblock.getId(),
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
	isNewTaskTemplateVisible = false;
}

async function onAddTaskClick() {
	isNewTaskTemplateVisible = true;
	// Wait until the input appears in the DOM
	await nextTick();
	taskNameInputEl.focus();
}

async function onTaskNameFocusOut(event: FocusEvent) {
	if (event.relatedTarget !== taskDescriptionInputEl) {
		await addTask();
	}
}

async function onTaskDescriptionFocusOut(event: FocusEvent) {
	if (event.relatedTarget !== taskNameInputEl) {
		await addTask();
	}
}

function onTaskNameKeydown(event: KeyboardEvent) {
	if (event.key === 'Enter') {
		taskDescriptionInputEl.focus();
	}
}

function onTaskDescriptionKeydown(event: KeyboardEvent) {
	if (event.key === 'Enter') {
		// This blur will automatically trigger the `onFocusOut` callback
		taskDescriptionInputEl.blur();
	}
}
</script>
<template>
	<div class="py-2 rounded-lg text-center self-stretch m-2 bg-red-100">
		<input
			ref="taskNameInputEl"
			v-model="newTaskName"
			placeholder="Task Name"
			type="text"
			class="bg-red-100 outline-none w-full px-4"
			@focusout="onTaskNameFocusOut"
			@keydown="onTaskNameKeydown"
		/>
		<input
			ref="taskDescriptionInputEl"
			v-model="newTaskDescription"
			placeholder="Task Description"
			type="text"
			class="bg-red-100 outline-none w-full px-4 text-sm"
			@focusout="onTaskDescriptionFocusOut"
			@keydown="onTaskDescriptionKeydown"
		/>
	</div>
</template>
