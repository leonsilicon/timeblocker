<script setup lang="ts">
import { client } from '~f/utils/trpc';
import CircleSpinner from '~f/components/circle-spinner.vue';
import TimeblockListing from '~f/components/timeblock-listing.vue';

let timeblocks = $ref<Array<{ id: string; name: string }> | null>(null);
// Retrieve the timeblock tasks from the server
(async () => {
	timeblocks = await client.query('listTimeblocks', {
		limit: 10,
		skip: 0,
	});
})();
</script>

<template>
	<div class="column center p-8">
		<div class="text-6xl font-bold">Timeblocks</div>
		<div v-if="timeblocks === null" class="row center p-4">
			<circle-spinner class="mr-2" /> Loading...
		</div>
		<div v-else>
			<timeblock-listing
				v-for="timeblock in timeblocks"
				:id="timeblock.id"
				:key="timeblock.id"
				:name="timeblock.name"
			/>
		</div>
	</div>
</template>
