<script setup lang="ts">
import TimeblockColumns from '~f/components/timeblock-columns.vue';
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

function getTimeStyle({ hour, minute }: { hour: number; minute: number }) {
	return {
		'grid-row-start': 1 + (hour * 60 + minute),
		'grid-row-end': 1 + ((hour + 1) * 60 + minute),
	};
}

const timeblockCalendarStyle = $computed(() => ({
	display: 'grid',
	'grid-template-rows': 'repeat(1440, 1px)', // 1440 minutes in a day
	'grid-template-columns': `60px auto`,
}));
</script>

<template>
	<div :style="timeblockCalendarStyle" class="w-full">
		<div
			v-for="hour in 25"
			:key="hour - 1"
			class="text-gray-500 text-right mr-2 -mt-[12px]"
			:style="getTimeStyle({ hour: hour - 1, minute: 0 })"
		>
			{{ getHourString(hour - 1) }}
		</div>
		<TimeblockColumns />
	</div>
</template>
