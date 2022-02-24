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
	<div class="justify-center items-center mb-2 row">
		<div class="flex-1 gap-2 p-4 mr-auto row">
			<router-link to="/timeblocks">
				<v-icon :icon="mdiChevronLeft" class="cursor-pointer"></v-icon>
			</router-link>
			<v-icon
				:icon="mdiMenu"
				class="cursor-pointer"
				@click="toggleTaskDock"
			></v-icon>
		</div>
		<div class="flex-1 justify-center row">
			<input
				ref="timeblockNameInput"
				v-model="timeblockNameInputValue"
				v-autowidth
				class="px-2 text-xl font-bold rounded-md hover:border-gray-300 transition-[border] input input-sm hover:border-md"
				@keypress="onKeyPress"
				@focusout="updateTimeblockName"
			/>
		</div>
		<div class="flex-1 ml-auto"></div>
	</div>
</template>
