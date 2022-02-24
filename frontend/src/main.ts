/* eslint-disable @typescript-eslint/naming-convention */

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VIcon from 'simple-vue-icon';
import { Quasar, Notify, Dialog } from 'quasar';
import { plugin as VueInputAutowidth } from 'vue-input-autowidth';
import App from './app.vue';
import 'quasar/src/css/index.sass';
import './tailwind.css';
import { router } from '~f/router';
import 'tw-elements';
import { displayError } from '~f/utils/error';

const app = createApp(App);
app.use(VIcon);
app.use(VueInputAutowidth);
app.use(Quasar, {
	plugins: {
		Notify,
		Dialog,
	},
});
app.use(createPinia());
app.use(router);
app.mount('#app');

app.config.errorHandler = (error) => {
	displayError(error);
	console.error(error);
};
