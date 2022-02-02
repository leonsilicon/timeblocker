import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app.vue';
import './tailwind.css';
import { router } from '~f/router/create';
import 'tw-elements';
import VIcon from 'simple-vue-icon';

const app = createApp(App);
app.use(VIcon);
app.use(createPinia());
app.use(router);
app.mount('#app');
