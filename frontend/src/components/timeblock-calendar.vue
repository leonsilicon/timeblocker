<script setup lang="ts">
import dayjs from 'dayjs';
import { TimeblockColumn as TimeblockColumnClass } from '~f/classes/timeblock-column';
import TimeblockColumn from '~f/components/timeblock-column.vue';
import { useTimeblockStore } from '~f/store/define';
import { dayjsToTimeblockDate } from '~f/utils/date';

const todayTimeblockDate = dayjsToTimeblockDate(dayjs());

/**
 * @param hour Hour from 0-25 (25 = 12AM of the next day)
 */
function getHourString(hour: number) {
	console.log(hour);
	let amPm: 'AM' | 'PM';
	if (hour < 12) amPm = 'AM';
	else if (hour < 24) amPm = 'PM';
	else amPm = 'AM';

	return `${hour % 12 === 0 ? 12 : hour % 12} ${amPm}`;
}

const timeblockStore = useTimeblockStore();
const timeblockColumns = $computed(() =>
	timeblockStore.activeTimeblock.getColumns()
);

function getTimeblockColumnStyle(timeblockColumn: TimeblockColumnClass) {
	return {
		'grid-column-start': timeblockColumn.getVersionNumber() + 2,
		'grid-column-end': timeblockColumn.getVersionNumber() + 3,
		'grid-row': '1 / -1',
	};
}

function getTimeStyle({ hour, minute }: { hour: number; minute: number }) {
	return {
		'grid-row-start': 1 + (hour * 60 + minute),
		'grid-row-end': 1 + ((hour + 1) * 60 + minute),
	};
}

const timeblockCalendarStyle = $computed(() => ({
	display: 'grid',
	'grid-template-rows': 'repeat(1440, 1px)', // 1440 minutes in a day
	'grid-template-columns': `repeat(${timeblockColumns.length + 1}, auto)`,
}));
</script>

<template>
	<div :style="timeblockCalendarStyle">
		<div
			v-for="hour in 25"
			:key="hour - 1"
			:style="getTimeStyle({ hour: hour - 1, minute: 0 })"
		>
			{{ getHourString(hour - 1) }}
		</div>
		<TimeblockColumn
			v-for="timeblockColumn of timeblockColumns"
			:key="timeblockColumn.getVersionNumber()"
			:style="getTimeblockColumnStyle(timeblockColumn)"
			:version-number="timeblockColumn.getVersionNumber()"
			:date="timeblockColumn.getDate()"
		/>
	</div>
</template>
