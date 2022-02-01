import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: async () => import('~/pages/landing-page.vue'),
	},
	{
		path: ':catchAll(.*)',
		component: async () => import('~/pages/404-page.vue'),
	},
];
