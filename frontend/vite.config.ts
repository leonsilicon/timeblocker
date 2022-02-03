import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'desm';

export default defineConfig({
	resolve: {
		alias: {
			'~f': join(import.meta.url, './src'),
			'~s': join(import.meta.url, '../shared')
		},
	},
	plugins: [vue({
		reactivityTransform: true
	})],
});
