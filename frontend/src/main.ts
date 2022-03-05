/* eslint-disable @typescript-eslint/naming-convention */

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'quasar/src/css/index.sass';
import './tailwind.css';
import 'tw-elements';

import { createApp } from 'vue';
import onetime from 'onetime';
import VIcon from 'simple-vue-icon';
import { Quasar, Notify, Dialog } from 'quasar';
import { plugin as VueInputAutowidth } from 'vue-input-autowidth';
import { createPinia } from 'pinia';
import App from './app.vue';
import { router } from '~f/router';
import { displayError, getErrorCode } from '~f/utils/error';
import { useAppStore } from '~f/store/app';
import { LocalStorageKey } from '~f/types/local-storage';

dayjs.extend(localizedFormat);

const getPinia = onetime(() => createPinia());
let isWindowErrorHandlerSet = false;

const app = createApp(App);

app.use(Quasar as any, {
	plugins: {
		Notify,
		Dialog,
	},
});

function errorHandler(error: unknown) {
	if (getErrorCode(error) === 'tokenNotFound') {
		window.localStorage.removeItem(LocalStorageKey.sessionToken);
		const appStore = useAppStore();
		appStore.isLoggedIn = false;
	}

	if (import.meta.env.DEV) {
		displayError(error);
	}

	console.error(error);
}

app.config.errorHandler = errorHandler;
if (!isWindowErrorHandlerSet) {
	window.addEventListener('error', (event: ErrorEvent) => {
		errorHandler(event.error);
	});
	window.addEventListener(
		'unhandledrejection',
		(event: PromiseRejectionEvent) => {
			errorHandler(new Error(event.reason));
		}
	);
	isWindowErrorHandlerSet = true;
}

app.use(getPinia());
app.use(VIcon);
app.use(VueInputAutowidth as any);

app.use(router);
app.mount('#app');
