import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app.vue';
import './tailwind.css';
import { router } from '~/router/create';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
