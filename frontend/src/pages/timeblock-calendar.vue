<script setup lang="ts">
import { mdiPlus } from '@mdi/js';
import { Calendar } from '@fullcalendar/core';
import { onMounted } from 'vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import dayjs from 'dayjs';
import { client } from '~f/utils/trpc';
import CircleSpinner from '~f/components/circle-spinner.vue';
import TimeblockListing from '~f/components/timeblock-listing.vue';
import { useTimeblockStore } from '~f/store/timeblock';
import TimeblockCalendarAddTimeblockButton from '~f/components/timeblock-calendar-add-timeblock-button.vue';
import { mountComponent } from '~f/utils/component';
import { dayjsToTimeblockDate } from '~f/utils/date';

const timeblockStore = useTimeblockStore();
let areTimeblockListingsLoading = $ref(true);

// Retrieve the timeblock tasks from the server
(async () => {
	const timeblockListings = await client.query('listTimeblocks', {
		limit: 10,
		skip: 0,
	});
	areTimeblockListingsLoading = false;
	for (const { id, name } of timeblockListings) {
		if (
			!timeblockStore.timeblockListings.some(
				(listing) => listing.timeblockId === id
			)
		) {
			timeblockStore.addTimeblockListing({
				timeblockId: id,
				timeblockName: name,
			});
		}
	}
})();

const calendarEl = $ref<HTMLDivElement>();

onMounted(() => {
	const calendar = new Calendar(calendarEl, {
		headerToolbar: false,
		plugins: [dayGridPlugin],
		dayCellContent(ctx) {
			const div = document.createElement('div');
			mountComponent(
				TimeblockCalendarAddTimeblockButton,
				{
					date: dayjsToTimeblockDate(dayjs(ctx.date)),
				},
				div
			);

			return {
				domNodes: [div],
			};
		},
		initialView: 'dayGridMonth',
	});

	calendar.render();
});
</script>

<template>
	<div class="column center p-8">
		<div class="mb-2 text-6xl font-bold">Timeblocks</div>
		<div v-if="areTimeblockListingsLoading === true" class="row center p-4">
			<CircleSpinner class="mr-2" /> Loading...
		</div>
		<div v-else class="column self-stretch">
			<div
				class="btn btn-primary btn-sm mb-4 self-center"
				@click="createNewTimeblock"
			>
				<v-icon :icon="mdiPlus" />
				Create New Timeblock
			</div>
			<div class="column gap-4 self-stretch">
				<TimeblockListing
					v-for="{
						timeblockId,
						timeblockName,
					} in timeblockStore.timeblockListings"
					:id="timeblockId"
					:key="timeblockId"
					:name="timeblockName"
				/>
			</div>
		</div>
		<div ref="calendarEl" class="w-full max-w-6xl"></div>
	</div>
</template>
