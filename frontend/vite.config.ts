import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'desm';

export default defineConfig({
	resolve: {
		alias: {
			'~f': join(import.meta.url, './src'),
		},
	},
	plugins: [vue()],
});
