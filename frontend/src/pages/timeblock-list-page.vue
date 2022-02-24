<script setup lang="ts">
import { mdiPlus } from '@mdi/js';
import { useRouter } from 'vue-router';
import { Calendar } from '@fullcalendar/core';
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
		headerToolbar: false,
		initialView: 'dayGridMonth',
	});

	calendar.render();
});
</script>

<template>
	<div class="p-8 column center">
		<div class="mb-2 text-6xl font-bold">Timeblocks</div>
		<div v-if="areTimeblockListingsLoading === true" class="p-4 row center">
			<CircleSpinner class="mr-2" /> Loading...
		</div>
		<div v-else class="self-stretch column">
			<div
				class="self-center mb-4 btn btn-primary btn-sm"
				@click="createNewTimeblock"
			>
				<v-icon :icon="mdiPlus" />
				Create New Timeblock
			</div>
			<div class="gap-4 self-stretch column">
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
