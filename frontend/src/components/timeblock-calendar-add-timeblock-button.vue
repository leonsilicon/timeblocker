<script setup lang="ts">
import { mdiPlusBox, mdiCircleEditOutline } from '@mdi/js';
import { useRouter } from 'vue-router';
import fastDeepEqual from 'fast-deep-equal';
import { useTimeblockStore } from '~f/store/timeblock';
import { TimeblockDate } from '~f/types/date';
import { client } from '~f/utils/trpc';

const props = defineProps<{
	date: TimeblockDate;
}>();

const timeblockStore = useTimeblockStore();

const doesTimeblockExist = $computed(() =>
	timeblockStore.timeblockListings.find((listing) =>
		fastDeepEqual(listing.timeblockDate, props.date)
	)
);

const router = useRouter();
async function createNewTimeblock(date: TimeblockDate) {
	const { timeblockId } = await client.mutation('createTimeblock', {
		name: `My Timeblock ${timeblockStore.timeblockListings.length + 1}`,
		date,
	});
	await router.push(`/timeblock/${timeblockId}`);
}
</script>

<template>
	<div class="h-full row">
		<v-icon v-if="doesTimeblockExist" :icon="mdiCircleEditOutline" />
		<v-icon class="text-green-500" :icon="mdiPlusBox" />
		{{ date.day }}
	</div>
</template>
