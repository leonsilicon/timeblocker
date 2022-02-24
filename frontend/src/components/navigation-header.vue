<script setup lang="ts">
import { useAppStore } from '~f/store/app';

const appStore = useAppStore();
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
				<router-link to="/timeblocks" class="btn btn-primary btn-sm">
					Open Timeblock
				</router-link>
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
