import { defineStore } from 'pinia';

export const useTimeblockStore = defineStore('timeblock', {
	state: () => ({
		tasks: {}
	}),
});
