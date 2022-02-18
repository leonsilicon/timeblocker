<script setup lang="ts">
import { mdiMenu } from '@mdi/js';
import { useTimeblockStore } from '~f/store/timeblock';
import { client } from '~f/utils/trpc';

const timeblockStore = useTimeblockStore();

function toggleTaskDock() {
	timeblockStore.isTaskDockOpen = !timeblockStore.isTaskDockOpen;
}

const isTimeblockNameInputActive = $ref(false);
const timeblockNameInputValue = $ref('');

async function updateTimeblockName() {
	await client.mutation('updateTimeblock', {
		name: timeblockNameInputValue,
	});
}
</script>

<template>
	<div class="row items-center">
		<div class="p-4 mr-auto">
			<v-icon
				:icon="mdiMenu"
				class="cursor-pointer"
				@click="toggleTaskDock"
			></v-icon>
		</div>
		<input
			v-if="isTimeblockNameInputActive"
			v-model="timeblockNameInputValue"
			class="input input-sm"
		/>
		<div
			class="font-bold text-xl hover:border-2 transition-all cursor-text rounded-md px-2"
			@click="isTimeblockNameInputActive = true"
		>
			{{ timeblockStore.activeTimeblock.getName() }}
		</div>
		<div class="ml-auto"></div>
	</div>
</template>
