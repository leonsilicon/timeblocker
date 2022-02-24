<script setup lang="ts">
import { mdiMenu, mdiChevronLeft } from '@mdi/js';
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
	<div class="row mb-2 items-center justify-center">
		<div class="row mr-auto flex-1 gap-2 p-4">
			<router-link to="/timeblocks">
				<v-icon :icon="mdiChevronLeft" class="cursor-pointer"></v-icon>
			</router-link>
			<v-icon
				:icon="mdiMenu"
				class="cursor-pointer"
				@click="toggleTaskDock"
			></v-icon>
		</div>
		<div class="row flex-1 justify-center">
			<input
				ref="timeblockNameInput"
				v-model="timeblockNameInputValue"
				v-autowidth
				class="input input-sm hover:border-md rounded-md px-2 text-xl font-bold transition-[border] hover:border-gray-300"
				@keypress="onKeyPress"
				@focusout="updateTimeblockName"
			/>
		</div>
		<div class="ml-auto flex-1"></div>
	</div>
</template>
