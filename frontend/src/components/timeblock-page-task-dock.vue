<script setup lang="ts">
import { nextTick } from 'vue';
import TimeblockTask from '~f/components/timeblock-task.vue';
import { useTimeblockStore } from '~f/store';

const timeblockStore = useTimeblockStore();
const tasks = $computed(() => [...timeblockStore.tasksMap.values()]);

let isNewTaskTemplateVisible = $ref(false);
let newTaskName = $ref('');
let newTaskDescription = $ref('');
const taskNameInputEl = $ref<HTMLInputElement>();
const taskDescriptionInputEl = $ref<HTMLInputElement>();
let focusedTextbox = $ref<'name' | 'description' | undefined>();

/**
 * Adds the task to the store only if the task name isn't empty
 */
function addTask() {
	if (newTaskName.trim() !== '') {
		timeblockStore.addTask({
			name: newTaskName,
			description: newTaskDescription,
		});
	}

	// Reset the new task textbox
	newTaskName = '';
	newTaskDescription = '';
	isNewTaskTemplateVisible = false;
}

function onTaskNameFocusOut() {
	if (focusedTextbox !== undefined) return;
	addTask();
}

function onTaskDescriptionFocusOut() {
	if (focusedTextbox !== undefined) return;
	addTask();
}

function onTaskNameKeydown(event: KeyboardEvent) {
	if (event.key === 'Enter') {
		focusedTextbox = 'name';
		taskDescriptionInputEl.focus();
	}
}

function onTaskDescriptionKeydown(event: KeyboardEvent) {
	if (event.key === 'Enter') {
		focusedTextbox = undefined;
		// This blur will automatically trigger the `onFocusOut` callback
		taskDescriptionInputEl.blur();
	}
}

async function onAddTaskClick() {
	isNewTaskTemplateVisible = true;
	// Wait until the input appears in the DOM
	await nextTick();
	taskNameInputEl.focus();
}
</script>

<template>
	<div
		v-show="timeblockStore.isTaskDockOpen"
		class="items-center column shrink-0 w-[250px]"
	>
		<div class="font-bold text-3xl mb-2">Tasks</div>
		<div class="btn btn-primary btn-sm min-h-2 h-2" @click="onAddTaskClick">
			Add Task
		</div>

		<div v-show="isNewTaskTemplateVisible">
			<div class="py-2 rounded-lg text-center self-stretch m-2 bg-red-100">
				<input
					ref="taskNameInputEl"
					v-model="newTaskName"
					placeholder="Task Name"
					type="text"
					class="bg-red-100 outline-none w-full px-4"
					@focus="focusedTextbox = 'name'"
					@focusout="onTaskNameFocusOut"
					@keydown="onTaskNameKeydown"
				/>
				<input
					ref="taskDescriptionInputEl"
					v-model="newTaskDescription"
					placeholder="Task Description"
					type="text"
					class="bg-red-100 outline-none w-full px-4 text-sm"
					@focus="focusedTextbox = 'description'"
					@focusout="onTaskDescriptionFocusOut"
					@keydown="onTaskDescriptionKeydown"
				/>
			</div>
		</div>

		<TimeblockTask
			v-for="task of tasks"
			:id="task.getId()"
			:key="task.getId()"
		/>
	</div>
</template>