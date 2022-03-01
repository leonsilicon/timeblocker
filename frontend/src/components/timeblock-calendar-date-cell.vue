<script setup lang="ts">
import { mdiPlusBox, mdiCircleEditOutline, mdiTrashCan } from '@mdi/js';
import { useRouter } from 'vue-router';
import deepEqual from 'fast-deep-equal';
import { Dialog } from 'quasar';
import { useTimeblockStore } from '~f/store/timeblock';
import { TimeblockDate } from '~f/types/date';
import { client } from '~f/utils/trpc';
import { timeblockDateToDayjs } from '~f/utils/date';

const props = defineProps<{
	date: TimeblockDate;
}>();

const timeblockStore = useTimeblockStore();

const timeblockListing = $computed(() =>
	timeblockStore.timeblockListings.find((listing) =>
		deepEqual(listing.timeblockDate, props.date)
	)
);

const doesTimeblockExist = $computed(() => timeblockListing !== undefined);

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
		date: props.date,
	});
	await router.push(`/timeblock/${timeblockId}`);
}

async function onDeleteButtonPress() {
	Dialog.create({
		message: `Are you sure you want to delete your timeblock on ${timeblockDateToDayjs(
			props.date
		).format('LL')}? This action is not reversible!`,
		cancel: true,
		focus: 'cancel',
		ok: {
			label: 'Delete',
			color: 'transparent',
			flat: true,
			textColor: 'red',
		},
	}).onOk(async () => {
		await deleteTimeblock();
	});
}

async function deleteTimeblock() {
	if (timeblockListing === undefined) return;
	await client.mutation('deleteTimeblock', {
		timeblockId: timeblockListing.timeblockId,
	});
	timeblockStore.deleteTimeblock(timeblockListing.timeblockId);
}
</script>

<template>
	<div class="row justify-between p-1">
		<div v-if="doesTimeblockExist" class="row items-center">
			<v-icon
				v-if="doesTimeblockExist"
				:icon="mdiCircleEditOutline"
				class="cursor-pointer text-orange-400 hover:text-orange-600"
				size="30"
				@click="navigateToTimeblock"
			/>
			<v-icon
				:icon="mdiTrashCan"
				class="mr-2 cursor-pointer text-red-500 hover:text-red-700"
				size="20"
				@click="onDeleteButtonPress"
			/>
		</div>
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
