import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import App from './app.vue';
import 'quasar/src/css/index.sass';
import './tailwind.css';
import 'tw-elements';

import { mountComponent } from '~f/utils/component';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.tz.setDefault("America/Toronto")

mountComponent(App, null, '#app');
