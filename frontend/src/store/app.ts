import { defineStore } from 'pinia';
import type { AppStoreState } from '~f/types/store';

function createAppStoreState(): AppStoreState {
	return {
		isLoggedIn: undefined,
		accountId: undefined,
	};
}

export const useAppStore = defineStore('app', {
	state: () => createAppStoreState(),
});
