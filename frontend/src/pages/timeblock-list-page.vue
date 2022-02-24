<script setup lang="ts">
import { mdiPlus } from '@mdi/js';
import { useRouter } from 'vue-router';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { onMounted } from 'vue';
import { client } from '~f/utils/trpc';
import CircleSpinner from '~f/components/circle-spinner.vue';
import TimeblockListing from '~f/components/timeblock-listing.vue';
import { useTimeblockStore } from '~f/store/timeblock';

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

const router = useRouter();
async function createNewTimeblock() {
	const { timeblockId } = await client.mutation('createTimeblock', {
		name: `My Timeblock ${timeblockStore.timeblockListings.length + 1}`,
	});
	await router.push(`/timeblock/${timeblockId}`);
}

const calendarEl = $ref<HTMLDivElement>();

onMounted(() => {
	const calendar = new Calendar(calendarEl, {
		plugins: [dayGridPlugin],
		headerToolbar: false,
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
		<div ref="calendarEl"></div>
	</div>
</template>
