<script setup lang="ts">
const props = defineProps<{
	columnVersionNumber: number;
	startDayMinute: number;
	endDayMinute: number;
}>();

const slotStyle = $computed(() => ({
	'grid-row-start': 1 + props.startDayMinute,
	'grid-row-end': 1 + props.endDayMinute,
	'grid-column': '1 / span 1',
}));
</script>

<template>
	<div
		:style="slotStyle"
		class="w-full h-full border-t border-x border-gray-200 -z-1"
	></div>
</template>
