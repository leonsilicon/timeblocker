<script setup lang="ts">
import { Calendar } from '@fullcalendar/core';
import { onMounted } from 'vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import dayjs from 'dayjs';
import { client } from '~f/utils/trpc';
import CircleSpinner from '~f/components/circle-spinner.vue';
import { useTimeblockStore } from '~f/store/timeblock';
import TimeblockCalenderDateCell from '~f/components/timeblock-calendar-date-cell.vue';
import { mountComponent } from '~f/utils/component';
import { dayjsToTimeblockDate } from '~f/utils/date';

const timeblockStore = useTimeblockStore();
let areTimeblockListingsLoading = $ref(true);

// Retrieve the timeblock tasks from the server
(async () => {
	const timeblockListings = await client.query('listTimeblocks');
	areTimeblockListingsLoading = false;
	for (const { id, name, date } of timeblockListings) {
		if (
			!timeblockStore.timeblockListings.some(
				(listing) => listing.timeblockId === id
			)
		) {
			timeblockStore.addTimeblockListing({
				timeblockId: id,
				timeblockName: name,
				timeblockDate: date,
			});
		}
	}
})();

const calendarEl = $ref<HTMLDivElement>();

onMounted(() => {
	const calendar = new Calendar(calendarEl as HTMLDivElement, {
		headerToolbar: false,
		plugins: [dayGridPlugin],
		dayCellContent(ctx) {
			const div = document.createElement('div');
			div.classList.add('grow');
			mountComponent(
				TimeblockCalenderDateCell,
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
		<div class="mb-4 text-6xl font-bold">Timeblocks</div>
		<div v-if="areTimeblockListingsLoading === true" class="row center p-4">
			<CircleSpinner class="mr-2" /> Loading...
		</div>
		<div ref="calendarEl" class="w-full max-w-6xl"></div>
	</div>
</template>
