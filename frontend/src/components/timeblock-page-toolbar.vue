<script setup lang="ts">
import { mdiMenu } from '@mdi/js';
import { useTimeblockStore } from '~f/store/timeblock';
import { client } from '~f/utils/trpc';

const timeblockStore = useTimeblockStore();

function toggleTaskDock() {
	timeblockStore.isTaskDockOpen = !timeblockStore.isTaskDockOpen;
}

const timeblockNameInputValue = $ref(timeblockStore.activeTimeblock.getName());
const timeblockNameInput = $ref<HTMLInputElement>();

async function updateTimeblockName() {
	await client.mutation('updateTimeblock', {
		timeblockId: timeblockStore.activeTimeblock.getId(),
		name: timeblockNameInputValue,
	});
}

function onKeyPress(event: KeyboardEvent) {
	if (event.key === 'Enter') {
		timeblockNameInput.blur();
	}
}
</script>

<template>
	<div class="row items-center justify-center">
		<div class="p-4 mr-auto flex-1">
			<v-icon
				:icon="mdiMenu"
				class="cursor-pointer"
				@click="toggleTaskDock"
			></v-icon>
		</div>
		<div class="flex-1 row justify-center">
			<input
				ref="timeblockNameInput"
				v-model="timeblockNameInputValue"
				v-autowidth
				class="input input-sm text-xl font-bold px-2 hover:border-md hover:border-gray-300 rounded-md transition-[border]"
				@keypress="onKeyPress"
				@focusout="updateTimeblockName"
			/>
		</div>
		<div class="flex-1 ml-auto"></div>
	</div>
</template>
