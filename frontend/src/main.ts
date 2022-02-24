import App from './app.vue';
import 'quasar/src/css/index.sass';
import './tailwind.css';
import 'tw-elements';
import { mountComponent } from '~f/utils/component';

mountComponent(App, null, '#app');
