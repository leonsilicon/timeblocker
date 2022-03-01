<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import TimeblockSchedule from '~f/components/timeblock-schedule.vue';
import TimeblockPageToolbar from '~f/components/timeblock-page-toolbar.vue';
import TimeblockPageTaskDock from '~f/components/timeblock-page-task-dock.vue';
import { useTimeblockStore } from '~f/store/timeblock';
import { Timeblock } from '~f/classes/timeblock';
import { Task } from '~f/classes/task';
import { client } from '~f/utils/trpc';
import CircleSpinner from '~f/components/circle-spinner.vue';
import { FixedWeeklyTimeTask } from '~f/classes/fixed-weekly-time-task';
import { FixedTimeTask } from '~f/classes/fixed-time-task';
import { TimeblockDate } from '~f/types/date';

const route = useRoute();
const routeParams = $computed(() => route.params as { id: string });
const timeblockId = $computed(() => routeParams.id);

const timeblockStore = useTimeblockStore();
watch(
	() => routeParams.id,
	() => {
		timeblockStore.activeTimeblockId = routeParams.id;
	}
);

let isLoading = $ref(true);
(async () => {
	const [timeblockResult, timeblockTasksResult, timeblockColumns] =
		await Promise.all([
			client.query('getTimeblock', {
				timeblockId: routeParams.id,
			}),
			client.query('getTimeblockTasks', {
				limit: 10,
				skip: 0,
			}),
			client.query('getTimeblockColumns', {
				timeblockId: routeParams.id,
			}),
		]);

	// Avoid creating duplicate timeblocks
	if (!timeblockStore.hasTimeblock(timeblockId)) {
		const timeblock = new Timeblock({
			id: timeblockId,
			date: timeblockResult.date as TimeblockDate,
		});

		for (const task of timeblockTasksResult) {
			let taskToAdd: Task;
			switch (task.type) {
				case 'normal': {
					taskToAdd = new Task({
						id: task.id,
						name: task.name,
						description: task.description ?? '',
						isHidden: task.isHidden,
					});

					break;
				}

				case 'fixed-time': {
					taskToAdd = new FixedTimeTask({
						id: task.id,
						name: task.name,
						description: task.description ?? '',
						isHidden: task.isHidden,
						startMinute: task.startMinute ?? undefined,
						endMinute: task.endMinute ?? undefined,
					});

					break;
				}

				case 'fixed-weekly-time': {
					taskToAdd = new FixedWeeklyTimeTask({
						id: task.id,
						name: task.name,
						description: task.description ?? '',
						isHidden: task.isHidden,
						startMinute: task.startMinute ?? undefined,
						endMinute: task.endMinute ?? undefined,
						dayOfWeek: task.dayOfWeek ?? undefined,
					});

					break;
				}

				default:
					throw new Error(`Unrecognized task type ${task.type}`);
			}

			timeblock.addTask(taskToAdd);
		}

		timeblockStore.addTimeblock(timeblock);
		for (const timeblockColumn of timeblockColumns) {
			timeblock.addColumn(timeblockColumn.id);
		}
	}

	timeblockStore.activeTimeblockId = timeblockId;

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
			<TimeblockSchedule />
		</div>
	</div>
</template>
