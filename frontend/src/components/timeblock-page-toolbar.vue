<script setup lang="ts">
import { mdiMenu, mdiChevronLeft } from '@mdi/js';
import { router } from '~f/router';
import { useAppStore } from '~f/store/app';
import { useTimeblockStore } from '~f/store/timeblock';
import { LocalStorageKey } from '~f/types/local-storage';
import { timeblockDateToDayjs } from '~f/utils/date';
import { client } from '~f/utils/trpc';

const timeblockStore = useTimeblockStore();
const appStore = useAppStore();

const timeblockDate = $computed(() =>
	timeblockDateToDayjs(timeblockStore.activeTimeblock.getDate()).format('LL')
);

function toggleTaskDock() {
	timeblockStore.isTaskDockOpen = !timeblockStore.isTaskDockOpen;
}

async function logout() {
	const sessionToken = localStorage.getItem(LocalStorageKey.sessionToken);
	try {
		if (sessionToken !== null) {
			await client.mutation('logout', {
				sessionToken,
			});
		}
	} finally {
		localStorage.removeItem(LocalStorageKey.sessionToken);
		appStore.isLoggedIn = false;
		await router.push({ path: '/login', force: true });
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
			<div class="rounded-md px-2 text-xl font-bold">
				{{ timeblockDate }}
			</div>
		</div>
		<div class="row ml-auto flex-1 justify-end">
			<button class="btn btn-sm btn-accent mr-4" @click="logout">Logout</button>
		</div>
	</div>
</template>
