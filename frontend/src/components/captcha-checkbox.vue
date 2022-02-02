<script setup lang="ts">
import { ref } from 'vue';
import { mdiAlert } from '@mdi/js';
import { logError } from '~f/utils/log';
import HcaptchaWidget from '~f/components/hcaptcha-widget.vue';
import RecaptchaWidget from '~f/components/recaptcha-widget.vue';
import { ComponentType } from '~f/types/component';

const emit = defineEmits<{
	(event: 'verify', token: string): void;
	(event: 'update:useRecaptcha', useRecaptcha: boolean): void;
}>();

const props = defineProps<{
	useRecaptcha: boolean;
}>();

const hcaptchaEl = ref<ComponentType<typeof HcaptchaWidget>>();
const recaptchaEl = ref<ComponentType<typeof RecaptchaWidget>>();
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

		<hcaptcha-widget
			v-if="!props.useRecaptcha"
			ref="hcaptchaEl"
			@verify="onHCaptchaVerify"
			@error="onHCaptchaError"
			@render="onHcaptchaRendered"
		/>
	</div>
</template>
