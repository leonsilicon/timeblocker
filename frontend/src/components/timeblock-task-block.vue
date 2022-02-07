<script setup lang="ts">
import { useTimeblockStore } from '~f/store/define';
import { getTodayDayjs } from '~f/utils/date';

const props = defineProps<{
	columnVersionNumber: number;
	taskBlockId: string;
	heightRatio: number;
}>();
const timeblockStore = useTimeblockStore();
const taskBlock = $computed(
	() =>
		timeblockStore.activeTimeblock
			.getColumn(props.columnVersionNumber)!
			.getTaskBlock(props.taskBlockId)!
);
const task = $computed(() => taskBlock.getTask());

const todayStartTimestamp = getTodayDayjs().unix();

const timeblockTaskBlockStyle = $computed(() => {
	console.log(taskBlock.getStartTimestamp() - todayStartTimestamp);
	return {
		'grid-column': '1 / span 1',
		'grid-row-start':
			1 + (taskBlock.getStartTimestamp() - todayStartTimestamp) / 60,
		'grid-row-end':
			1 + (taskBlock.getEndTimestamp() - todayStartTimestamp) / 60,
	};
});
</script>

<template>
	<div class="column center" :style="timeblockTaskBlockStyle">
		{{ task.getName() }}
	</div>
</template>
