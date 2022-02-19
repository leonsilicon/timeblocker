<script setup lang="ts">
import { useAppStore } from '~f/store/app';
import { LocalStorageKey } from '~f/types/local-storage';

const appStore = useAppStore();

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
