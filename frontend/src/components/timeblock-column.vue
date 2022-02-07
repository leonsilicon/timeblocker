<script setup lang="ts">
import { useTimeblockStore } from '~f/store/define';
import { TimeblockDate } from '~f/types/date';
import { calculateTaskBlocksRatios } from '~f/utils/task-block';
import TimeblockTaskBlock from '~f/components/timeblock-task-block.vue';
import TimeblockColumnSlot from '~f/components/timeblock-column-slot.vue';

const props = defineProps<{
	versionNumber: number;
	date: TimeblockDate;
}>();

const timeblockStore = useTimeblockStore();

const taskBlocks = $computed(
	() =>
		timeblockStore.activeTimeblock
			.getColumn(props.versionNumber)
			?.getTaskBlocks() ?? []
);

const taskBlockHeightRatios = $computed(() =>
	calculateTaskBlocksRatios({
		date: props.date,
		taskBlocks,
	})
);

const hoursInDayMinutes = Array.from({ length: 25 }).map((_, i) => i * 60);
const timeblockColumnStyle = $computed(() => ({
	display: 'grid',
	'grid-template-rows': 'repeat(1440, 1px)', // 1440 minutes in a day
	'grid-template-columns': `auto`,
}));
</script>

<template>
	<div :style="timeblockColumnStyle">
		<TimeblockColumnSlot
			v-for="hourInDayMinutes of hoursInDayMinutes"
			:key="hourInDayMinutes"
			:start-day-minute="hourInDayMinutes"
			:end-day-minute="hourInDayMinutes + 60"
		/>
		<TimeblockTaskBlock
			v-for="(taskBlock, i) of taskBlocks"
			:id="taskBlock.getTask().getId()"
			:key="taskBlock.getTask().getId()"
			:height-ratio="taskBlockHeightRatios[i]!"
		/>
	</div>
</template>
