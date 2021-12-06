import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
	routes,
	history: createWebHistory(),
});
