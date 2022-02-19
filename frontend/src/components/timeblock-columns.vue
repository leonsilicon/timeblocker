<script setup lang="ts">
import TimeblockColumn from '~f/components/timeblock-column.vue';
import { useTimeblockStore } from '~f/store';

const timeblockStore = useTimeblockStore();
const timeblockColumns = $computed(() =>
	timeblockStore.activeTimeblock.getColumns()
);

function getTimeblockColumnStyle(timeblockColumnIndex: number) {
	return {
		'grid-column-start': timeblockColumnIndex + 2,
		'grid-column-end': timeblockColumnIndex + 3,
		'grid-row': '1 / -1',
	};
}
</script>

<template>
	<TimeblockColumn
		v-for="(timeblockColumn, timeblockColumnIndex) of timeblockColumns"
		:key="timeblockColumn.getId()"
		:style="getTimeblockColumnStyle(timeblockColumnIndex)"
		:timeblock-column-id="timeblockColumn.getId()"
		:date="timeblockColumn.getDate()"
	/>
</template>
