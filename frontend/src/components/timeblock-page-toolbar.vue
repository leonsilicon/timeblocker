<script setup lang="ts">
import { mdiMenu, mdiChevronLeft } from '@mdi/js';
import { useTimeblockStore } from '~f/store/timeblock';
import { timeblockDateToDayjs } from '~f/utils/date';

const timeblockStore = useTimeblockStore();

const timeblockDate = $computed(() =>
	timeblockDateToDayjs(timeblockStore.activeTimeblock.getDate()).format('LL')
);

function toggleTaskDock() {
	timeblockStore.isTaskDockOpen = !timeblockStore.isTaskDockOpen;
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
			<div class="rounded-md px-2 text-xl font-bold">
				{{ timeblockDate }}
			</div>
		</div>
		<div class="ml-auto flex-1"></div>
	</div>
</template>
