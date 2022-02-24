<script setup lang="ts">
import { mdiDelete } from '@mdi/js';
import TimeblockColumn from '~f/components/timeblock-column.vue';
import { useTimeblockStore } from '~f/store';
import { client } from '~f/utils/trpc';

const timeblockStore = useTimeblockStore();
const timeblockColumns = $computed(() =>
	timeblockStore.activeTimeblock.getColumns()
);

function getTimeblockColumnStyle(timeblockColumnIndex: number) {
	return {
		'grid-column-start': timeblockColumnIndex + 2,
		'grid-column-end': timeblockColumnIndex + 3,
		'grid-row': '2 / -1',
	};
}

async function deleteTimeblockColumn(columnId: string) {
	timeblockStore.activeTimeblock.deleteColumn(columnId);

	await client.mutation('deleteTimeblockColumn', {
		columnId,
		timeblockId: timeblockStore.activeTimeblock.getId(),
	});
}
</script>

<template>
	<template
		v-for="(timeblockColumn, timeblockColumnIndex) of timeblockColumns"
		:key="timeblockColumn.getId()"
	>
		<div
			:style="{ 'grid-column-start': timeblockColumnIndex + 2 }"
			class="column center font-bold"
		>
			<div>Version {{ timeblockColumnIndex + 1 }}</div>
			<!-- Only show delete button if there is more than one column -->
			<button
				v-if="
					timeblockColumns.length > 1 &&
					timeblockColumnIndex === timeblockColumns.length - 1
				"
				class="row cursor-pointer rounded-md border-2 border-red-200 pr-[7px] pl-1 text-xs text-red-200 hover:border-red-500 hover:text-red-500"
				@click="deleteTimeblockColumn(timeblockColumn.getId())"
			>
				<v-icon size="15" :icon="mdiDelete"></v-icon>
				Delete
			</button>
		</div>
		<TimeblockColumn
			:style="getTimeblockColumnStyle(timeblockColumnIndex)"
			:timeblock-column-id="timeblockColumn.getId()"
			:date="timeblockColumn.getDate()"
		/>
	</template>
</template>
