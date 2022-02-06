import type { Task } from '~f/classes/task';
import type { TaskBlock } from '~f/classes/task-block';

export type TimeblockStoreState = {
	/**
	 * The order of tasks (by IDs) that are displayed in the dock
	 */
	orderedTaskIds: string[];

	/**
	 * Map of task IDs to Tasks
	 */
	tasksMap: Map<string, Task>;

	/**
	 * Array of task blocks
	 */
	taskBlocksMap: Map<string, TaskBlock>;

	/**
	 * Whether the task dock is open
	 */
	isTaskDockOpen: boolean;
};
