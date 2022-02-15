import { defineStore } from 'pinia';
import type { Timeblock } from '~f/classes/timeblock';
import type { TimeblockStoreState } from '~f/types/store';

function createTimeblockStoreState(): TimeblockStoreState {
	return {
		activeTimeblockId: undefined,
		timeblockMap: new Map(),
		isTaskDockOpen: true,
	};
}

/**
 * Timeblock store contains all actions that interact with the server
 */
export const useTimeblockStore = defineStore('timeblock', {
	state: () => createTimeblockStoreState(),
	actions: {
		addTimeblock(timeblock: Timeblock) {
			this.timeblockMap.set(timeblock.getId(), timeblock);
		},
	},
	getters: {
		activeTimeblock(store) {
			return store.timeblockMap.get(store.activeTimeblockId!)!;
		},
	},
});
