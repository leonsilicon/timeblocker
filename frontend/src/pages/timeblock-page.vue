<script setup lang="ts">
import TimeblockCalendar from '~f/components/timeblock-calendar.vue';
import TimeblockPageToolbar from '~f/components/timeblock-page-toolbar.vue';
import TimeblockPageTaskDock from '~f/components/timeblock-page-task-dock.vue';
import { useTimeblockStore } from '~f/store/define';
import { Dialog, DialogOverlay, DialogTitle } from '@headlessui/vue';

const timeblockStore = useTimeblockStore();

const dummyTasks: Array<{ name: string; description: string }> = [
	{
		name: 'monke',
		description: 'monke',
	},
];

for (const task of dummyTasks) {
	timeblockStore.addTask({
		name: task.name,
		description: task.description,
	});
}
</script>

<template>
	<div class="column">
		<TimeblockPageToolbar />
		<div class="row">
			<TimeblockPageTaskDock />
			<TimeblockCalendar />
		</div>
	</div>
</template>
