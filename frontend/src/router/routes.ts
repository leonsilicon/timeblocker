
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('~/pages/timeblocker.vue')
	},
	{
		path: '/login',
		component: () => import('~/pages/login.vue'),
	},
	{
		path: '/register',
		component: () => import('~/pages/component.vue'),
	},
;