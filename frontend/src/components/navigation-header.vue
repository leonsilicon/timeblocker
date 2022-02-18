<script setup lang="ts">
import { useAppStore } from '~f/store/app';

const appStore = useAppStore();
</script>

<template>
	<div class="row bg-white p-4 items-center">
		<router-link
			to="/"
			class="font-bold text-xl hover:text-primary transition-all"
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
