<script setup lang="ts">
import { useRoute } from 'vue-router';
import { client } from '~f/utils/trpc';
import CaptchaCheckbox from '~f/components/captcha-checkbox.vue';
import CircleSpinner from '~f/components/circle-spinner.vue';
import { AuthenticationMethod } from '~s/types/auth';

const route = useRoute();

const isLogin = $computed(() => route.path === '/login');
const isRegister = $computed(() => !isLogin);
const email = $ref('');
const password = $ref('');
const confirmPassword = $ref('');

const useRecaptcha = $ref(true);
const captchaResponse = $ref('');

let isRequestLoading = $ref(false);
async function login() {
	try {
		isRequestLoading = true;
		await client.mutation('login', {
			email,
			password,
			authenticationMethod: AuthenticationMethod.header,
		});
	} finally {
		isRequestLoading = false;
	}
}

async function register() {
	try {
		isRequestLoading = true;
		await client.mutation('createRegistrationRequest', {
			email,
			password,
			captcha: {
				captchaResponse,
				isRecaptcha: useRecaptcha,
			},
		});
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

			<!-- Registering needs the user to fill out a Captcha -->
			<captcha-checkbox
				v-model:use-recaptcha="useRecaptcha"
				class="mt-4"
				@verify="captchaResponse = $event"
			/>
		</div>

		<button
			class="btn btn-primary mt-2 px-8"
			@click="isLogin ? login() : register()"
		>
			<circle-spinner v-if="isRequestLoading" />
			<div v-else>{{ isLogin ? 'Login' : 'Register' }}</div>
		</button>
		<router-link
			class="link hover:text-secondary transition-all"
			:to="{ force: true, path: isLogin ? '/register' : '/login' }"
		>
			{{ isLogin ? "Don't have an account?" : 'Already have an account?' }}
		</router-link>
	</div>
</template>
