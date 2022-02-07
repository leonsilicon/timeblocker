<script setup lang="ts">
import TimeblockColumn from '~f/components/timeblock-column.vue';
import { TimeblockColumn as TimeblockColumnClass } from '~f/classes/timeblock-column';
import { useTimeblockStore } from '~f/store';

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
</script>

<template>
	<TimeblockColumn
		v-for="timeblockColumn of timeblockColumns"
		:key="timeblockColumn.getVersionNumber()"
		:style="getTimeblockColumnStyle(timeblockColumn)"
		:version-number="timeblockColumn.getVersionNumber()"
		:date="timeblockColumn.getDate()"
	/>
</template>
