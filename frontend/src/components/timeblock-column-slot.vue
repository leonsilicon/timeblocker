<script setup lang="ts">
const props = defineProps<{
	startDayMinute: number;
	endDayMinute: number;
}>();

const slotStyle = $computed(() => ({
	'grid-row-start': 1 + props.startDayMinute,
	'grid-row-end': 1 + props.endDayMinute,
}));
</script>

<template>
	<div :style="slotStyle" class="border-gray-200">monke</div>
</template>
