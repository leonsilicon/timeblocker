<script setup lang="ts">
import { mdiPlus } from '@mdi/js';
import { useRouter } from 'vue-router';
import { client } from '~f/utils/trpc';
import CircleSpinner from '~f/components/circle-spinner.vue';
import TimeblockListing from '~f/components/timeblock-listing.vue';

let timeblocks = $ref<Array<{ id: string; name: string }> | null>(null);
// Retrieve the timeblock tasks from the server
(async () => {
	const serverTimeblocks = await client.query('listTimeblocks', {
		limit: 10,
		skip: 0,
	});
	timeblocks = serverTimeblocks;
})();

const router = useRouter();
async function createNewTimeblock() {
	const { timeblockId } = await client.mutation('createTimeblock', {
		name: 'My Timeblock',
	});
	await router.push(`/timeblock/${timeblockId}`);
}
</script>

<template>
	<div class="column center p-8">
		<div class="text-6xl font-bold mb-2">Timeblocks</div>
		<div v-if="timeblocks === null" class="row center p-4">
			<circle-spinner class="mr-2" /> Loading...
		</div>
		<div v-else class="self-stretch column">
			<div
				class="btn btn-primary btn-sm self-center mb-4"
				@click="createNewTimeblock"
			>
				<v-icon :icon="mdiPlus" />
				Create New Timeblock
			</div>
			<timeblock-listing
				v-for="timeblock in timeblocks"
				:id="timeblock.id"
				:key="timeblock.id"
				:name="timeblock.name"
			/>
		</div>
	</div>
</template>
