<script setup lang="ts">
import { onMounted } from 'vue';
import { loadScript } from 'vue-plugin-load-script';

const emit = defineEmits<{
	(event: 'verify', token: string): void;
	(event: 'error', error: unknown): void;
	(event: 'expired'): void;
	(event: 'render'): void;
}>();

let hcaptcha: any;
let isScriptLoaded = (window as any).hcaptcha !== undefined;

onMounted(() => {
	// eslint-disable-next-line no-negated-condition
	if (!isScriptLoaded) {
		void loadScript(
			'https://hcaptcha.com/1/api.js?onload=onHcaptchaLoaded&render=explicit&recaptchacompat=off'
		);
		isScriptLoaded = true;
	} else {
		onHcaptchaLoaded();
	}
});

const hcaptchaEl = $ref();
function onHcaptchaLoaded() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	hcaptcha = (window as any).hcaptcha;

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	hcaptcha.render(hcaptchaEl, {
		sitekey: import.meta.env.VITE_HCAPTCHA_SITE_KEY,
		callback: (token: string) => {
			emit('verify', token);
		},
		'expired-callback': () => {
			emit('expired');
		},
		'error-callback': (error: unknown) => {
			emit('error', error);
		},
	});

	emit('render');
}

const hcaptchaSiteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

(window as any).onHcaptchaLoaded = onHcaptchaLoaded;
</script>

<template>
	<div :class="hcaptchaSiteKey"></div>
</template>
