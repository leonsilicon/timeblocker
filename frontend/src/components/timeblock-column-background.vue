<script setup lang="ts">
import TimeblockColumnBackgroundSlot from '~f/components/timeblock-column-background-slot.vue';

defineProps<{
	columnVersionNumber: number;
}>();

const timeblockColumnStyle = $computed(() => ({
	display: 'grid',
	'grid-template-rows': 'repeat(1440, 1px)', // 1440 minutes in a day
	'grid-template-columns': `1fr`,
}));

const hoursInDayMinutes = Array.from({ length: 24 }).map((_, i) => i * 60);
</script>

<template>
	<div :style="timeblockColumnStyle" class="border-b border-gray-200 relative">
		<TimeblockColumnBackgroundSlot
			v-for="hourInDayMinutes of hoursInDayMinutes"
			:key="hourInDayMinutes"
			:column-version-number="columnVersionNumber"
			:start-day-minute="hourInDayMinutes"
			:end-day-minute="hourInDayMinutes + 60"
		/>
	</div>
</template>
