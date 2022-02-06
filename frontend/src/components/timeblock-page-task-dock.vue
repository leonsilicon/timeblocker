<script setup lang="ts">
import { Dialog, DialogOverlay, DialogTitle } from '@headlessui/vue';
import { useTimeblockStore } from '~f/store';
import TimeblockTask from '~f/components/timeblock-task.vue';

const timeblockStore = useTimeblockStore();
const tasks = $computed(() => timeblockStore.tasks.values());

const isAddTaskDialogOpen = $ref(false);
const newTaskName = $ref('');
const newTaskDescription = $ref('');

function addTask() {
	timeblockStore.addTask({
		name: newTaskName,
		description: newTaskDescription,
	});
}
</script>

<template>
	<div
		v-show="timeblockStore.isTaskDockOpen"
		class="items-center column shrink-0 w-[250px]"
	>
		<div class="font-bold text-3xl mb-4">Tasks</div>
		<div
			class="btn btn-primary min-h-2 h-2"
			@click="isAddTaskDialogOpen = true"
		>
			Add Task
		</div>
		<Dialog class='absolute h-full' :open="isAddTaskDialogOpen" @close="isAddTaskDialogOpen = false">
			<DialogOverlay class="inset-0 h-screen relative" />

			<DialogTitle>My Dialog</DialogTitle>

			<button>My button</button>
		</Dialog>
		<TimeblockTask
			v-for="task of tasks"
			:id="task.getId()"
			:key="task.getId()"
		/>
	</div>
</template>
