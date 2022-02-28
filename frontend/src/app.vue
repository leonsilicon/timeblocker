<script setup lang="ts">
import { useAppStore } from '~f/store/app';
import { LocalStorageKey } from '~f/types/local-storage';
import { client } from '~f/utils/trpc';

const appStore = useAppStore();

(async () => {
	if (appStore.isLoggedIn) {
		const isValidToken = await client.query('checkToken');
		if (!isValidToken) {
			window.localStorage.removeItem(LocalStorageKey.sessionToken);
			appStore.isLoggedIn = false;
		}
	} else {
		// Pings heroku so the Dyno wakes up earlier
		await client.query('ping');
	}
})();

const sessionToken = window.localStorage.getItem(LocalStorageKey.sessionToken);

if (sessionToken === null) {
	appStore.isLoggedIn = false;
} else {
	appStore.isLoggedIn = true;
}
</script>

<template>
	<div class="h-full w-full" data-theme="emerald">
		<router-view />
	</div>
</template>

<style>
html,
body,
#app {
	height: 100%;
	font-family: var(--bs-font-sans-serif);
	font-size: var(--bs-body-font-size);
}
</style>
