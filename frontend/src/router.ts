import type { RouteRecordRaw } from 'vue-router';

import { createRouter, createWebHistory } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: async () => import('~f/layouts/content-layout.vue'),
		children: [
			{
				path: '/',
				component: async () => import('~f/pages/landing-page.vue'),
			},
			{
				path: '/login',
				alias: '/register',
				component: async () => import('~f/pages/entry-page.vue'),
			},
			{
				path: '/:catchAll(.*)',
				component: async () => import('~f/pages/404-page.vue'),
			},
		],
	},
	{
		path: '/timeblock',
		component: async () => import('~f/pages/timeblock-page.vue'),
	}
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
