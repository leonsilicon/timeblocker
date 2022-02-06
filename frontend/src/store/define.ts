import { defineStore } from 'pinia';
import { Task } from '~f/classes/task';
import type { TimeblockStoreState } from '~f/types/store';
import { client } from '~f/utils/trpc.js';

function createTimeblockStoreState(): TimeblockStoreState {
	return {
		orderedTaskIds: [],
		tasksMap: new Map(),
		taskBlocksMap: new Map(),
		isTaskDockOpen: true,
	};
}

export const useTimeblockStore = defineStore('timeblock', {
	state: () => createTimeblockStoreState(),
	actions: {
		async addTask({ name, description }: { name: string; description: string }) {
			const task = new Task({ name, description });
			this.tasksMap.set(task.getId(), task);

			client.mutation('')
		},
	},
});
