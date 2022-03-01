import type { Task } from '~f/classes/task';
import type { TaskBlock } from '~f/classes/task-block';
import { TimeblockColumn } from '~f/classes/timeblock-column';
import type { TimeblockDate } from '~f/types/date';

export type TimeblockConstructorProps = {
	id: string;
	date: TimeblockDate;
};

/**
 * A timeblock for a specific date
 */
export class Timeblock {
	/**
	 * The ID of the timeblock
	 */
	private readonly id: string;

	/**
	 * The date this timeblock is for.
	 */
	private date: TimeblockDate;

	/**
	 * Multiple columns in case the tasks change.
	 */
	private readonly columns: TimeblockColumn[];

	private readonly taskMap: Map<string, Task>;

	private readonly taskBlockMap: Map<string, TaskBlock>;

	private readonly orderedTaskIds: string[];

	/**
	 * A map from task blocks to their column number. This information is stored
	 * in the Timeblock class so that there is one source of truth for determine
	 * which column a task block belongs to (in contrast to storing a variable in
	 * both the taskBlock class containing the version number and a list of taskBlocks
	 * in the column class, and always having to update both of those).
	 */
	private readonly taskBlockToColumnNumberMap: Map<string, number>;

	constructor({ id, date }: TimeblockConstructorProps) {
		this.id = id;
		this.date = date;
		this.taskMap = new Map();
		this.taskBlockMap = new Map();
		this.orderedTaskIds = [];
		this.columns = [];
	}

	public getId() {
		return this.id;
	}

	public addTask(task: Task, index = 0) {
		this.taskMap.set(task.getId(), task);
		this.orderedTaskIds.splice(index, 0, task.getId());
	}

	public removeTask(taskId: string) {
		this.taskMap.delete(taskId);
	}

	public getTask(taskId: string) {
		const task = this.taskMap.get(taskId);
		if (task === undefined) {
			throw new Error(`Task with ID ${taskId} not found.`);
		}

		return task;
	}

	public getTaskBlock(taskBlockId: string) {
		const taskBlock = this.taskBlockMap.get(taskBlockId);
		if (taskBlock === undefined) {
			throw new Error(`Task block with ID ${taskBlockId} not found.`);
		}

		return taskBlock;
	}

	public addTaskBlock(taskBlock: TaskBlock) {
		this.taskBlockMap.set(taskBlock.getId(), taskBlock);
	}

	public getOrderedTaskIds() {
		return this.orderedTaskIds;
	}

	public addColumn(timeblockColumnId: string) {
		this.columns.push(
			new TimeblockColumn({
				timeblock: this,
				id: timeblockColumnId,
			})
		);
	}

	public getColumn(id: string) {
		return this.columns.find((c) => c.getId() === id);
	}

	public deleteColumn(id: string) {
		const columnIndex = this.columns.findIndex((c) => c.getId() === id);
		if (columnIndex === -1) {
			throw new Error('Column not found.');
		}

		this.columns.splice(columnIndex, 1);
	}

	public getDate() {
		return this.date;
	}

	public setDate(date: TimeblockDate) {
		this.date = date;
	}

	public getColumns() {
		return this.columns;
	}
}
