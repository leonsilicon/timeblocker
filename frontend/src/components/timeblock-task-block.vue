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

const timeblockTaskBlockStyle = $computed(() => ({
	'grid-column': '1 / span 1',
	'grid-row-start':
		1 + (taskBlock.getStartTimestamp() - todayStartTimestamp) / 60,
	'grid-row-end': 1 + (taskBlock.getEndTimestamp() - todayStartTimestamp) / 60,
}));

</script>

<template>
	<div
		@drop.prevent="onDrop"
		@dragover.prevent
		class="column center rounded-md bg-red-200"
		:style="timeblockTaskBlockStyle"
	>
		{{ task.getName() }}
	</div>
</template>
