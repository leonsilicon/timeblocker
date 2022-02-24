<script setup lang="ts">
const props = defineProps<{
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
		class="-z-1 h-full w-full border-x border-t border-gray-200"
	></div>
</template>
