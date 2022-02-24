<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAppStore } from '~f/store/app';
import { LocalStorageKey } from '~f/types/local-storage';
import { client } from '~f/utils/trpc';

const appStore = useAppStore();

const router = useRouter();

async function logout() {
	localStorage.removeItem(LocalStorageKey.sessionToken);
	await client.mutation('logout');
	await router.push({ path: '/login', force: true });
}
</script>

<template>
	<div class="row items-center bg-white p-4">
		<router-link
			to="/"
			class="hover:text-primary text-xl font-bold transition-all"
		>
			timeblocker.io
		</router-link>
		<div class="ml-auto">
			<template v-if="appStore.isLoggedIn === true">
				<router-link to="/timeblocks" class="btn btn-primary btn-sm mr-2">
					Open Timeblock
				</router-link>
				<button class="btn btn-sm btn-accent" @click="logout">Logout</button>
			</template>
			<template v-else>
				<router-link to="/login" class="btn btn-primary btn-sm mr-2">
					Login
				</router-link>
				<router-link to="/register" class="btn btn-secondary btn-sm">
					Register
				</router-link>
			</template>
		</div>
	</div>
</template>
