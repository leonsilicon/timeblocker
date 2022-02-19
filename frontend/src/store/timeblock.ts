import { defineStore } from 'pinia';
import type { Timeblock } from '~f/classes/timeblock';
import type { TimeblockStoreState } from '~f/types/store';

function createTimeblockStoreState(): TimeblockStoreState {
	return {
		activeTimeblockId: undefined,
		timeblockListings: [],
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
		addTimeblockListing({
			timeblockId,
			timeblockName,
		}: {
			timeblockId: string;
			timeblockName: string;
		}) {
			this.timeblockListings.push({
				timeblockId,
				timeblockName,
			});
		},
		addTimeblock(timeblock: Timeblock) {
			this.timeblockMap.set(timeblock.getId(), timeblock);
		},
		deleteTimeblock(timeblockId: string) {
			this.timeblockMap.delete(timeblockId);
			this.timeblockListings.splice(
				this.timeblockListings.findIndex(
					(timeblock) => timeblock.timeblockId === timeblockId
				),
				1
			);
		},
	},
	getters: {
		activeTimeblock(store) {
			return store.timeblockMap.get(store.activeTimeblockId!)!;
		},
	},
});
