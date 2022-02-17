<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { client } from '~f/utils/trpc';
import CircleSpinner from '~f/components/circle-spinner.vue';
import { LocalStorageKey } from '~f/types/local-storage';

const route = useRoute();
const router = useRouter();

const isLogin = $computed(() => route.path === '/login');
const isRegister = $computed(() => !isLogin);
const email = $ref('');
const password = $ref('');
const confirmPassword = $ref('');
let entryError = $ref('');

let isRequestLoading = $ref(false);
async function login() {
	try {
		entryError = '';
		isRequestLoading = true;
		const { sessionToken } = await client.mutation('login', {
			email,
			password,
		});
		window.localStorage.setItem(LocalStorageKey.sessionToken, sessionToken);
		await router.push('/timeblocks');
	} catch (error: unknown) {
		entryError = (error as Error).message;
	} finally {
		isRequestLoading = false;
	}
}

async function register() {
	try {
		if (password !== confirmPassword) {
			throw new Error('Passwords are not equal.');
		}

		entryError = '';
		isRequestLoading = true;
		await client.mutation('createRegistrationRequest', {
			email,
			password,
		});
		await router.push('/timeblocks');
	} catch (error: unknown) {
		entryError = (error as Error).message;
	} finally {
		isRequestLoading = false;
	}
}
</script>

<template>
	<div
		class="my-auto self-center column items-center gap-3 py-8 px-20 border-2 rounded-md border-gray-300"
	>
		<h1 class="font-bold text-6xl">{{ isLogin ? 'Login' : 'Register' }}</h1>

		<div>
			<label class="label p-1">
				<span class="label-text font-bold">Email</span>
			</label>
			<input
				v-model="email"
				class="input input-bordered w-[20rem]"
				type="text"
			/>
		</div>

		<div>
			<label class="label p-1">
				<span class="label-text font-bold">Password</span>
			</label>
			<input
				v-model="password"
				class="input input-bordered w-[20rem]"
				type="password"
			/>
		</div>

		<div v-if="isRegister">
			<label class="label p-1">
				<span class="label-text font-bold">Confirm Password</span>
			</label>
			<input
				v-model="confirmPassword"
				class="input input-bordered w-[20rem]"
				type="password"
			/>
		</div>

		<button
			class="btn btn-primary mt-2 px-8"
			@click="isLogin ? login() : register()"
		>
			<circle-spinner v-if="isRequestLoading" />
			<div v-else>{{ isLogin ? 'Login' : 'Register' }}</div>
		</button>

		<div v-if="entryError !== ''" class="text-red-400">
			{{ entryError }}
		</div>

		<router-link
			class="link hover:text-secondary transition-all"
			:to="{ force: true, path: isLogin ? '/register' : '/login' }"
		>
			{{ isLogin ? "Don't have an account?" : 'Already have an account?' }}
		</router-link>
	</div>
</template>
