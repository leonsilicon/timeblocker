import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import App from './app.vue';
import 'quasar/src/css/index.sass';
import './tailwind.css';
import 'tw-elements';

import { mountComponent } from '~f/utils/component';

dayjs.extend(localizedFormat);

mountComponent(App, null, '#app');
