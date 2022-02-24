<script setup lang="ts">
import { mdiPlusBox, mdiCircleEditOutline } from '@mdi/js';
import { useRouter } from 'vue-router';
import deepEqual from 'fast-deep-equal';
import { useTimeblockStore } from '~f/store/timeblock';
import { TimeblockDate } from '~f/types/date';
import { client } from '~f/utils/trpc';

const props = defineProps<{
	date: TimeblockDate;
}>();

const timeblockStore = useTimeblockStore();

const doesTimeblockExist = $computed(() =>
	timeblockStore.timeblockListings.find((listing) =>
		deepEqual(listing.timeblockDate, props.date)
	)
);

async function navigateToTimeblock() {
	const timeblockListing = timeblockStore.timeblockListings.find((listing) =>
		deepEqual(listing.timeblockDate, props.date)
	);
	if (timeblockListing === undefined) {
		throw new Error(
			`Timeblock with date ${JSON.stringify(timeblockListing)} not found.`
		);
	}

	await router.push(`/timeblock/${timeblockListing.timeblockId}`);
}

const router = useRouter();
async function createNewTimeblock() {
	const { timeblockId } = await client.mutation('createTimeblock', {
		name: `My Timeblock ${timeblockStore.timeblockListings.length + 1}`,
		date: props.date,
	});
	await router.push(`/timeblock/${timeblockId}`);
}
</script>

<template>
	<div class="row justify-between p-1">
		<v-icon
			v-if="doesTimeblockExist"
			:icon="mdiCircleEditOutline"
			class="cursor-pointer text-orange-400 hover:text-orange-600"
			size="30"
			@click="navigateToTimeblock"
		/>
		<v-icon
			v-else
			class="cursor-pointer text-green-400 hover:text-green-600"
			size="30"
			:icon="mdiPlusBox"
			@click="createNewTimeblock"
		/>
		{{ date.day }}
	</div>
</template>
