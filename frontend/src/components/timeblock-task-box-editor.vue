<script setup lang="ts">
defineProps<{
	name: string;
	description: string;
}>();

const emit = defineEmits(['update:name', 'update:description', 'blur']);

const taskNameInputEl = $ref<HTMLInputElement>();
const taskDescriptionInputEl = $ref<HTMLInputElement>();

async function onTaskNameFocusOut(event: FocusEvent) {
	if (event.relatedTarget !== taskDescriptionInputEl) {
		emit('blur');
	}
}

async function onTaskDescriptionFocusOut(event: FocusEvent) {
	if (event.relatedTarget !== taskNameInputEl) {
		emit('blur');
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

function focusNameInput() {
	taskNameInputEl.focus();
}

function focusDescriptionInput() {
	taskDescriptionInputEl.focus();
}

defineExpose({
	focusNameInput,
	focusDescriptionInput,
});
</script>

<template>
	<div class="m-2 self-stretch rounded-lg bg-red-100 py-2 text-center">
		<input
			ref="taskNameInputEl"
			:value="name"
			placeholder="Task Name"
			type="text"
			class="w-full bg-red-100 px-4 outline-none"
			@input="emit('update:name', ($event.target as HTMLInputElement).value)"
			@focusout="onTaskNameFocusOut"
			@keydown="onTaskNameKeydown"
		/>
		<input
			ref="taskDescriptionInputEl"
			:value="description"
			placeholder="Task Description"
			type="text"
			class="w-full bg-red-100 px-4 text-sm text-gray-500 outline-none"
			@input="emit('update:description', ($event.target as HTMLInputElement).value)"
			@focusout="onTaskDescriptionFocusOut"
			@keydown="onTaskDescriptionKeydown"
		/>
	</div>
</template>
