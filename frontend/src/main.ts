import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VIcon from 'simple-vue-icon';
import App from './app.vue';
import './tailwind.css';
import { router } from '~f/router/create';
import 'tw-elements';
import LoadScript from 'vue-plugin-load-script';

const app = createApp(App);
app.use(VIcon);
app.use(LoadScript);
app.use(createPinia());
app.use(router);
app.mount('#app');
