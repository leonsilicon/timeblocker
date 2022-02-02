<script setup lang="ts">
import { ref } from 'vue';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import { VueRecaptcha } from 'vue-recaptcha';
import { mdiAlert } from '@mdi/js';
import { logError } from '~f/utils/log';
import type { VueHcaptcha as HcaptchaType } from '~f/types/captcha';

const hcaptchaSitekey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;
const recaptchaSitekey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const emit = defineEmits<{
	(event: 'verify', token: string): void;
	(event: 'update:useRecaptcha', useRecaptcha: boolean): void;
}>();

const props = defineProps<{
	useRecaptcha: boolean;
}>();

const hcaptchaEl = ref<HcaptchaType>();
const recaptchaEl = ref<VueRecaptcha>();
const isRecaptchaReady = ref(false);
const isRecaptchaError = ref(false);
const isHCaptchaReady = ref(false);
const isHCaptchaError = ref(false);

function onHCaptchaVerify(token: string) {
	emit('verify', token);
}

function onHCaptchaError(error: unknown) {
	isHCaptchaError.value = true;
	logError(error);
}

function onHcaptchaRendered() {
	isHCaptchaReady.value = true;
}

function onReCaptchaVerify(token: string) {
	emit('verify', token);
}

function onReCaptchaError(error: unknown) {
	isRecaptchaError.value = true;
	logError(error);
}

function onReCaptchaRender() {
	isRecaptchaReady.value = true;
}

function switchCaptcha() {
	emit('update:useRecaptcha', !props.useRecaptcha);
}
</script>

<template>
	<div class="column items-center">
		<div class="text-sm mb-1">
			<span>
				{{ props.useRecaptcha ? 'ReCaptcha' : 'HCaptcha' }} not working?
			</span>
			<button
				class="cursor-pointer underline text-secondary"
				@click="switchCaptcha"
			>
				Use {{ props.useRecaptcha ? 'HCaptcha' : 'ReCaptcha' }}
			</button>
		</div>
		<span
			v-if="
				(props.useRecaptcha && !isRecaptchaReady) ||
				(!props.useRecaptcha && !isHCaptchaReady)
			"
			class="m-4 w-8 h-8 border-4 rounded-full spinner-border animate-spin"
		></span>
		<div v-show="props.useRecaptcha">
			<vue-recaptcha
				ref="recaptchaEl"
				:sitekey="recaptchaSitekey"
				@verify="onReCaptchaVerify"
				@error="onReCaptchaError"
				@render="onReCaptchaRender"
			/>
			<div v-if="props.useRecaptcha && isRecaptchaError" class="text-red-500">
				<v-icon :path="mdiAlert" />
				<span>ReCaptcha failed to load.</span>
			</div>
		</div>

		<vue-hcaptcha
			v-show="!props.useRecaptcha"
			ref="hcaptchaEl"
			:sitekey="hcaptchaSitekey"
			@verify="onHCaptchaVerify"
			@error="onHCaptchaError"
			@rendered="onHcaptchaRendered"
		/>
	</div>
</template>
