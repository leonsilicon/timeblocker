<script setup lang="ts">
import { getColorFromTaskType } from '~f/utils/color';

const props = defineProps<{
	name: string;
	description: string;
	taskType: string;
}>();

const emit = defineEmits(['update:name', 'update:description', 'blur']);

const backgroundColor = $computed(() => getColorFromTaskType(props.taskType));

const taskNameInputEl = $ref<HTMLInputElement>();
const taskDescriptionInputEl = $ref<HTMLInputElement>();
let isFocused = $ref(false);

async function onTaskNameFocusOut(event: FocusEvent) {
	if (isFocused && event.relatedTarget !== taskDescriptionInputEl) {
		emit('blur');
		isFocused = false;
	}
}

async function onTaskDescriptionFocusOut(event: FocusEvent) {
	if (isFocused && event.relatedTarget !== taskNameInputEl) {
		emit('blur');
		isFocused = false;
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
	<div class="task-box-editor m-2 self-stretch rounded-lg py-2 text-center">
		<input
			ref="taskNameInputEl"
			:value="name"
			placeholder="Task Name"
			type="text"
			class="w-full px-4 outline-none"
			@input="emit('update:name', ($event.target as HTMLInputElement).value)"
			@focusout="onTaskNameFocusOut"
			@keydown="onTaskNameKeydown"
			@focus='isFocused = true'
		/>
		<input
			ref="taskDescriptionInputEl"
			:value="description"
			placeholder="Task Description"
			type="text"
			class="w-full px-4 text-sm text-gray-500 outline-none"
			@input="emit('update:description', ($event.target as HTMLInputElement).value)"
			@focusout="onTaskDescriptionFocusOut"
			@keydown="onTaskDescriptionKeydown"
			@focus='isFocused = true'
		/>
	</div>
</template>

<style scoped>
.task-box-editor,
.task-box-editor > input {
	background-color: v-bind(backgroundColor);
}
</style>
