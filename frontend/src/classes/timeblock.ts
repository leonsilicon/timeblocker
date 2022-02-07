import type { Task } from '~f/classes/task';
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

	private readonly tasksMap: Map<string, Task>;

	private readonly orderedTaskIds: string[];

	constructor({ id, date }: TimeblockConstructorProps) {
		this.id = id;
		this.date = date;
		this.tasksMap = new Map();
		this.orderedTaskIds = [];
		this.columns = [];
	}

	public getId() {
		return this.id;
	}

	public addTask(task: Task, index = 0) {
		this.tasksMap.set(task.getId(), task);
		this.orderedTaskIds.splice(index, 0, task.getId());
	}

	public removeTask(taskId: string) {
		this.tasksMap.delete(taskId);
	}

	public getTask(taskId: string) {
		return this.tasksMap.get(taskId);
	}

	public getOrderedTaskIds() {
		return this.orderedTaskIds;
	}

	public addColumn(date: TimeblockDate) {
		this.columns.push(
			new TimeblockColumn({
				timeblock: this,
				date,
				versionNumber: this.columns.length,
			})
		);
	}

	public getColumn(index: number) {
		return this.columns[index];
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
