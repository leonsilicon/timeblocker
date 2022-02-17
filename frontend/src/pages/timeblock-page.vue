<script setup lang="ts">
import dayjs from 'dayjs';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import TimeblockCalendar from '~f/components/timeblock-calendar.vue';
import TimeblockPageToolbar from '~f/components/timeblock-page-toolbar.vue';
import TimeblockPageTaskDock from '~f/components/timeblock-page-task-dock.vue';
import { useTimeblockStore } from '~f/store/timeblock';
import { Timeblock } from '~f/classes/timeblock';
import { Task } from '~f/classes/task';
import { client } from '~f/utils/trpc';
import CircleSpinner from '~f/components/circle-spinner.vue.js';

const route = useRoute();
const routeParams = $computed(() => route.params as { id: string });
const timeblockStore = useTimeblockStore();
watch(
	() => routeParams.id,
	() => {
		timeblockStore.activeTimeblockId = routeParams.id;
	}
);

let isLoading = $ref(true);
(async () => {
	const result = await client.query('listTimeblockTasks', {
		limit: 10,
		skip: 0,
	});

	const today = dayjs();
	const timeblock = new Timeblock({
		id: routeParams.id,
		date: {
			day: today.date(),
			month: today.month(),
			year: today.year(),
		},
	});

	for (const task of result) {
		timeblock.addTask(
			new Task({
				id: task.id,
				name: task.name,
				description: task.description,
			})
		);
	}

	timeblockStore.addTimeblock(timeblock);
	timeblockStore.activeTimeblockId = timeblock.getId();
	timeblock.addColumn();

	isLoading = false;
})();
</script>

<template>
	<div v-if="isLoading">
		<CircleSpinner />
	</div>
	<div v-else class="column">
		<TimeblockPageToolbar />
		<div class="row px-4">
			<TimeblockPageTaskDock />
			<TimeblockCalendar />
		</div>
	</div>
</template>
