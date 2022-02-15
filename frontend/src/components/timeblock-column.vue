<script setup lang="ts">
import { useTimeblockStore } from '~f/store/timeblock';
import { TimeblockDate } from '~f/types/date';
import { calculateTaskBlocksRatios } from '~f/utils/task-block';
import TimeblockTaskBlock from '~f/components/timeblock-task-block.vue';
import TimeblockColumnBackground from '~f/components/timeblock-column-background.vue';

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

const timeblockColumnStyle = $computed(() => ({
	display: 'grid',
	'grid-template-rows': 'repeat(1440, 1px)', // 1440 minutes in a day
	'grid-template-columns': `1fr`,
}));
</script>

<template>
	<div :style="timeblockColumnStyle" class="border-b border-gray-200 -z-1">
		<TimeblockColumnBackground
			style="grid-row: 1 / -1; grid-column: 1 / -1"
			:column-version-number="versionNumber"
		/>
		<TimeblockTaskBlock
			v-for="(taskBlock, i) of taskBlocks"
			:key="taskBlock.getId()"
			:task-block-id="taskBlock.getId()"
			:column-version-number="versionNumber"
			:height-ratio="taskBlockHeightRatios[i]!"
		/>
	</div>
</template>
