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
		<template v-if="appStore.isLoggedIn">
			<router-link
				to="/login"
				class="ml-auto btn btn-primary btn-sm mr-2"
			>
				Login
			</router-link>
			<router-link
				to="/register"
				class="btn btn-secondary btn-sm"
			>
				Register
			</router-link>
		</template>
	</div>
</template>
