<script setup lang="ts">
import { ref } from 'vue';
import { mdiAlert } from '@mdi/js';
import { logError } from '~f/utils/log';
import HcaptchaWidget from '~f/components/hcaptcha-widget.vue';
import RecaptchaWidget from '~f/components/recaptcha-widget.vue';
import { ComponentType } from '~f/types/component';
import CircleSpinner from '~f/components/circle-spinner.vue';

const emit = defineEmits<{
	// Emitted when the user successfully completes the captcha.
	(event: 'verify', token: string): void;
	// Emitted when the user switches the captchas to use.
	(event: 'update:useRecaptcha', useRecaptcha: boolean): void;
}>();

const props = defineProps<{
	// Whether or not to use Google reCaptcha or hCaptcha
	useRecaptcha: boolean;
}>();

const hcaptchaEl = ref<ComponentType<typeof HcaptchaWidget>>();
const recaptchaEl = ref<ComponentType<typeof RecaptchaWidget>>();
let isRecaptchaReady = $ref(false);
let isRecaptchaError = $ref(false);
let isHCaptchaReady = $ref(false);

function onHCaptchaVerify(token: string) {
	emit('verify', token);
}

function onHCaptchaError(error: unknown) {
	logError(error);
}

function onHcaptchaRendered() {
	isHCaptchaReady = true;
}

function onReCaptchaVerify(token: string) {
	emit('verify', token);
}

function onReCaptchaError(error: unknown) {
	isRecaptchaError = true;
	logError(error);
}

function onReCaptchaRender() {
	isRecaptchaReady = true;
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
		<circle-spinner
			v-if="
				(props.useRecaptcha && !isRecaptchaReady) ||
				(!props.useRecaptcha && !isHCaptchaReady)
			"
		/>
		<div v-if="props.useRecaptcha">
			<recaptcha-widget
				ref="recaptchaEl"
				@verify="onReCaptchaVerify"
				@error="onReCaptchaError"
				@render="onReCaptchaRender"
			/>
			<div
				v-if="props.useRecaptcha && isRecaptchaError"
				class="text-red-500 row justify-center"
			>
				<v-icon :path="mdiAlert" class="mr-1" />
				<span>ReCaptcha failed to load.</span>
			</div>
		</div>
		<div v-else>
			<hcaptcha-widget
				ref="hcaptchaEl"
				@verify="onHCaptchaVerify"
				@error="onHCaptchaError"
				@render="onHcaptchaRendered"
			/>
		</div>
	</div>
</template>
