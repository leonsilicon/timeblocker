/* eslint-disable @typescript-eslint/naming-convention */

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VIcon from 'simple-vue-icon';
import LoadScript from 'vue-plugin-load-script';
import { Quasar, Notify, Dialog } from 'quasar';
import { plugin as VueInputAutowidth } from 'vue-input-autowidth';
import App from './app.vue';
import 'quasar/src/css/index.sass';
import './tailwind.css';
import { router } from '~f/router';
import 'tw-elements';

const app = createApp(App);
app.use(VIcon);
app.use(VueInputAutowidth);
app.use(Quasar, {
	plugins: {
		Notify,
		Dialog,
	},
});
app.use(LoadScript as any);
app.use(createPinia());
app.use(router);
app.mount('#app');
