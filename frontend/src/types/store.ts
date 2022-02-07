import type { Task } from '~f/classes/task.js';
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
