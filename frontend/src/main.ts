import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VIcon from 'simple-vue-icon';
import LoadScript from 'vue-plugin-load-script';
import { Quasar, Notify } from 'quasar';
import App from './app.vue';
import './tailwind.css';
import { router } from '~f/router';
import 'tw-elements';

const app = createApp(App);
app.use(VIcon);
app.use(Quasar, {
	plugins: {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		Notify,
	},
});
app.use(LoadScript as any);
app.use(createPinia());
app.use(router);
app.mount('#app');
