<script setup lang="ts">
import { useAppStore } from '~f/store/app';
import { LocalStorageKey } from '~f/types/local-storage';

const appStore = useAppStore();

const csrfToken = window.localStorage.getItem(LocalStorageKey.csrfToken);
const sessionToken = window.localStorage.getItem(LocalStorageKey.sessionToken);

if (csrfToken === undefined && sessionToken === undefined) {
	appStore.isLoggedIn = false;
} else {
	appStore.isLoggedIn = true;
}
</script>

<template>
	<router-view />
</template>

<style>
html,
body,
#app {
	height: 100%;
}
</style>
