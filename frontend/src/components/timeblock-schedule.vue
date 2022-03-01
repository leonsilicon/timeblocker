<script setup lang="ts">
import { mdiPlusCircleOutline } from '@mdi/js';
import { nanoid } from 'nanoid-nice';
import TimeblockColumns from '~f/components/timeblock-columns.vue';
import { useTimeblockStore } from '~f/store/timeblock';
import { client } from '~f/utils/trpc';

/**
 * @param hour Hour from 0-25 (25 = 12AM of the next day)
 */
function getHourString(hour: number) {
	let amPm: 'AM' | 'PM';
	if (hour < 12) amPm = 'AM';
	else if (hour < 24) amPm = 'PM';
	else amPm = 'AM';

	return `${hour % 12 === 0 ? 12 : hour % 12} ${amPm}`;
}

function getTimeStyle({ hour, minute }: { hour: number; minute: number }) {
	return {
		'grid-row-start': 2 + (hour * 60 + minute),
		'grid-row-end': 1 + ((hour + 1) * 60 + minute),
	};
}

const timeblockStore = useTimeblockStore();
const timeblockScheduleStyle = $computed(() => ({
	display: 'grid',
	'grid-template-rows': '60px repeat(1440, 1px)', // 1440 minutes in a day
	'grid-template-columns': `60px repeat(${
		timeblockStore.activeTimeblock.getColumns().length
	}, 1fr) auto`,
}));

async function addNewColumn() {
	const mostRecentColumn = timeblockStore.activeTimeblock.getColumns().at(-1)!;
	const mostRecentColumnTaskBlocks = mostRecentColumn.getTaskBlocks();
	const newTaskBlocks = mostRecentColumnTaskBlocks.map((taskBlock) => ({
		taskId: taskBlock.getTask().getId(),
		taskBlockId: nanoid(),
		startMinute: taskBlock.getStartMinute(),
		endMinute: taskBlock.getEndMinute(),
		type: taskBlock.getType(),
	}));

	await client.mutation('createTimeblockTaskBlocks', {
		timeblockColumnId: mostRecentColumn.getId(),
		taskBlocks: newTaskBlocks,
	});

	const timeblockColumnId = nanoid();
	await client.mutation('addTimeblockColumn', {
		columnId: timeblockColumnId,
		timeblockId: timeblockStore.activeTimeblock.getId(),
		taskBlockIds: newTaskBlocks.map(({ taskBlockId }) => taskBlockId),
	});

	timeblockStore.activeTimeblock.addColumn(timeblockColumnId);
}
</script>

<template>
	<div :style="timeblockScheduleStyle" class="w-full overflow-y-scroll">
		<div
			v-for="hour in 25"
			:key="hour - 1"
			class="mt-[-12px] mr-2 text-right text-gray-500"
			:style="getTimeStyle({ hour: hour - 1, minute: 0 })"
		>
			{{ getHourString(hour - 1) }}
		</div>
		<TimeblockColumns />
		<div
			style="grid-row: 1 / span 1; grid-column: -1 / span 1"
			class="self-center px-2"
		>
			<div class="cursor-pointer text-gray-500 hover:text-black">
				<v-icon :icon="mdiPlusCircleOutline" @click="addNewColumn" />
			</div>
		</div>
	</div>
</template>
