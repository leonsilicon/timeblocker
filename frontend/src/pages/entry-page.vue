<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { client } from '~f/utils/trpc';
import CaptchaCheckbox from '~f/components/captcha-checkbox.vue';

const route = useRoute();

const isLogin = computed(() => route.path === '/login');
const isRegister = computed(() => !isLogin.value);
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const useRecaptcha = ref(true);
const captchaResponse = ref('');

async function login() {
	const { sessionToken } = await client.mutation('login', {
		email: email.value,
		password: password.value,
	});
}

async function register() {
	await client.mutation('createRegistrationRequest', {
		email: email.value,
		password: password.value,
		captcha: {
			captchaResponse: captchaResponse.value,
			isRecaptcha: useRecaptcha.value,
		},
	});
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

		<button class="btn btn-primary mt-2 px-8">
			{{ isLogin ? 'Login' : 'Register' }}
		</button>
		<router-link
			class="link hover:text-secondary transition-all"
			:to="{ force: true, path: isLogin ? '/register' : '/login' }"
		>
			{{ isLogin ? "Don't have an account?" : 'Already have an account?' }}
		</router-link>
	</div>
</template>
