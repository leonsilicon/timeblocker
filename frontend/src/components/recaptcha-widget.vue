<script setup lang="ts">
import { onMounted } from 'vue';
import { loadScript } from 'vue-plugin-load-script';

const emit = defineEmits<{
	(event: 'verify', token: string): void;
	(event: 'expired'): void;
	// eslint-disable-next-line @typescript-eslint/unified-signatures
	(event: 'render'): void;
	(event: 'error', e: unknown): void;
}>();

let isScriptLoaded = (window as any).grecaptcha !== undefined;
onMounted(() => {
	// eslint-disable-next-line no-negated-condition
	if (!isScriptLoaded) {
		void loadScript(
			'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit'
		);

		isScriptLoaded = true;
	} else {
		onRecaptchaLoaded();
	}
});

let grecaptcha: any;

const recaptchaEl = $ref();
function onRecaptchaLoaded() {
	if (grecaptcha === undefined) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		grecaptcha = (window as any).grecaptcha;
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	grecaptcha.render(recaptchaEl, {
		callback: (token: string) => {
			emit('verify', token);
		},
		'expired-callback': () => {
			emit('expired');
		},
		'error-callback': (e: unknown) => {
			emit('error', e);
		},
	});

	emit('render');
}

(window as any).onRecaptchaLoaded = onRecaptchaLoaded;

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
</script>

<template>
	<div ref="recaptchaEl" :data-sitekey="recaptchaSiteKey"></div>
</template>
