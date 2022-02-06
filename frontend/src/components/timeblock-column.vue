<script setup lang="ts">
import dayjs from 'dayjs';
import { TaskBlock } from '~f/classes/task-block';
import { useTimeblockStore } from '~f/store/define';
import { TimeblockDate } from '~f/types/date';
import { calculateTaskBlocksRatios } from '~f/utils/task-block';
import TimeblockTaskBlock from '~f/components/timeblock-task-block.vue';

const props = defineProps<{
	version: number;
	date: TimeblockDate;
}>();

const timeblockStore = useTimeblockStore();

const taskBlocks = $computed(() => {
	const taskBlocks: TaskBlock[] = [];
	for (const taskBlock of timeblockStore.taskBlocksMap.values()) {
		const startTimestamp = taskBlock.getStartTimestamp();
		const endTimestamp = taskBlock.getEndTimestamp();

		const date = dayjs()
			.set('year', props.date.year)
			.set('month', props.date.month)
			.set('day', props.date.day);

		if (startTimestamp >= date.unix() && endTimestamp <= date.unix()) {
			taskBlocks.push(taskBlock);
		}
	}

	return taskBlocks;
});

const taskBlockHeightRatios = $computed(() =>
	calculateTaskBlocksRatios({
		date: props.date,
		taskBlocks,
	})
);
</script>

<template>
	<div class="column">
		<TimeblockTaskBlock
			v-for="(taskBlock, i) of taskBlocks"
			:id="taskBlock.getTask().getId()"
			:key="taskBlock.getTask().getId()"
			:height-ratio="taskBlockHeightRatios[i]!"
		/>
	</div>
</template>
