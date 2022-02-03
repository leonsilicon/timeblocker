import type { Task } from '~f/classes/task';
import type { TaskBlock } from '~f/classes/task-block';

export type TimeblockStoreState = {
	/**
	 * Map of task IDs to Tasks
	 */
	tasks: Map<string, Task>;

	/**
	 * Array of task blocks
	 */
	taskBlocks: TaskBlock[];
};
