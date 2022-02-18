import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'desm';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
	resolve: {
		alias: {
			'~f': join(import.meta.url, './src'),
			'~s': join(import.meta.url, '../shared'),
		},
	},
	/**
	 * Complains when the import order isn't exact
	 */
	optimizeDeps: {
		exclude: [
			'@fullcalendar/core',
			'@fullcalendar/daygrid',
			'@fullcalendar/timegrid',
		],
	},
	plugins: [
		vue({
			template: { transformAssetUrls },
			reactivityTransform: true,
		}),
		quasar(),
	],
});
