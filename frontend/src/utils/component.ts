/* eslint-disable @typescript-eslint/naming-convention */

import type { Component } from 'vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import onetime from 'onetime';
import VIcon from 'simple-vue-icon';
import { Quasar, Notify, Dialog } from 'quasar';
import { plugin as VueInputAutowidth } from 'vue-input-autowidth';
import { router } from '~f/router';
import { displayError, getErrorCode } from '~f/utils/error';
import { useAppStore } from '~f/store/app.js';
import { LocalStorageKey } from '~f/types/local-storage.js';

const getPinia = onetime(() => createPinia());

export function mountComponent(
	component: Component,
	props: Record<string, unknown> | null,
	selectorOrElement: string | HTMLElement
) {
	const app = createApp(component, props);
	app.use(getPinia());
	app.use(VIcon);
	app.use(VueInputAutowidth);
	app.use(Quasar, {
		plugins: {
			Notify,
			Dialog,
		},
	});
	app.use(router);
	app.mount(selectorOrElement);

	app.config.errorHandler = (error) => {
		console.log('oasethu', error)
		if (getErrorCode(error) === 'tokenNotFound') {
			window.localStorage.removeItem(LocalStorageKey.sessionToken);
			const appStore = useAppStore();
			appStore.isLoggedIn = false;
		}

		if (import.meta.env.DEV) {
			displayError(error);
		}

		console.error(error);
	};
}
