import type { Timeblock } from '~f/classes/timeblock';

export type TimeblockStoreState = {
	activeTimeblockId: string | undefined;

	/**
	 * Whether the task dock is open
	 */
	isTaskDockOpen: boolean;

	/**
	 * Map of timeblock IDs to timeblocks
	 */
	timeblockMap: Map<string, Timeblock>;
};

export type AppStoreState = {
	/**
	 * Whether or not the user is logged in. `undefined` indicates that
	 * the user's logged in state is unknown.
	 */
	isLoggedIn: boolean | undefined;

	/**
	 * The user's account ID.
	 */
	accountId: string | undefined;
};
