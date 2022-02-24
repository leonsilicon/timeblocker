<script setup lang="ts">
import { nanoid } from 'nanoid-nice';
import { Task } from '~f/classes/task';
import { useTimeblockStore } from '~f/store/timeblock';
import { displayError } from '~f/utils/error';
import { client } from '~f/utils/trpc';

const timeblockStore = useTimeblockStore();
const newTaskName = $ref('');
const newTaskDescription = $ref('');
const taskNameInputEl = $ref<HTMLInputElement>();
const taskDescriptionInputEl = $ref<HTMLInputElement>();

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

defineExpose({
	focusNameInput,
	focusDescriptionInput,
});
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
