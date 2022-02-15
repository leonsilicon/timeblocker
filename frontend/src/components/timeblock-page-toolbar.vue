<script setup lang="ts">
import { mdiMenu } from '@mdi/js';
import { useTimeblockStore } from '~f/store/timeblock';

const timeblockStore = useTimeblockStore();

function toggleTaskDock() {
	timeblockStore.isTaskDockOpen = !timeblockStore.isTaskDockOpen;
}
</script>

<template>
	<div class="p-4">
		<v-icon :path="mdiMenu" class="cursor-pointer" @click='toggleTaskDock'></v-icon>
	</div>
</template>
