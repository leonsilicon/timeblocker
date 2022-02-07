<script setup lang="ts">
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import TimeblockCalendar from '~f/components/timeblock-calendar.vue';
import TimeblockPageToolbar from '~f/components/timeblock-page-toolbar.vue';
import TimeblockPageTaskDock from '~f/components/timeblock-page-task-dock.vue';
import { useTimeblockStore } from '~f/store/define';
import { Timeblock } from '~f/classes/timeblock';
import { Task } from '~f/classes/task';
import { dayjsToTimeblockDate } from '~f/utils/date';

const today = dayjs();

const timeblockStore = useTimeblockStore();
const timeblock = new Timeblock({
	id: 'my-timeblock',
	date: {
		day: today.day(),
		month: today.month(),
		year: today.year(),
	},
});

timeblockStore.addTimeblock(timeblock);
timeblockStore.activeTimeblockId = timeblock.getId();

const dummyTasks: Array<{ name: string; description: string }> = [
	{
		name: 'Finish ICS IA',
		description: 'Finish writing documentation',
	},
];

timeblock.addColumn(dayjsToTimeblockDate(today));

for (const task of dummyTasks) {
	timeblock.addTask(
		new Task({
			id: nanoid(),
			name: task.name,
			description: task.description,
		})
	);
}
</script>

<template>
	<div class="column">
		<TimeblockPageToolbar />
		<div class="row px-4">
			<TimeblockPageTaskDock />
			<TimeblockCalendar />
		</div>
	</div>
</template>
