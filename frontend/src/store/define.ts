import { defineStore } from 'pinia';
import { Task } from '~f/classes/task';
import type { TimeblockStoreState } from '~f/types/store';

export const useTimeblockStore = defineStore('timeblock', {
	state: (): TimeblockStoreState => ({
		tasks: new Map(),
		taskBlocks: [],
		isTaskDockOpen: false,
	}),
	actions: {
		addTask({ name, description }: { name: string; description: string }) {
			const task = new Task({ name, description });
			this.tasks.set(task.getId(), task);
		},
	},
});
