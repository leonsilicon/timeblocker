import { defineStore } from 'pinia';
import type { TimeblockStoreState } from '~f/types/store';

export const useTimeblockStore = defineStore('timeblock', {
	state: (): TimeblockStoreState => ({
		tasks: new Map(),
		taskBlocks: [],
	}),
});
