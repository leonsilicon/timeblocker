<script setup lang="ts">
import { useAppStore } from '~f/store/app';

const appStore = useAppStore();
</script>

<template>
	<div class="items-center p-4 bg-white row">
		<router-link
			to="/"
			class="text-xl font-bold transition-all hover:text-primary"
		>
			timeblocker.io
		</router-link>
		<div class="ml-auto">
			<template v-if="appStore.isLoggedIn === true">
				<router-link to="/timeblocks" class="btn btn-primary btn-sm">
					Open Timeblock
				</router-link>
			</template>
			<template v-else>
				<router-link to="/login" class="mr-2 btn btn-primary btn-sm">
					Login
				</router-link>
				<router-link to="/register" class="btn btn-secondary btn-sm">
					Register
				</router-link>
			</template>
		</div>
	</div>
</template>
