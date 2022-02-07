import type { Task } from '~f/classes/task';

export type TaskBlockConstructorProps = {
	id: string;
	task: Task;
	startTimestamp: number;
	endTimestamp: number;
};

export class TaskBlock {
	/**
	 * The unique ID of this task block
	 */
	private readonly id: string;

	/**
	 * The task this task block references
	 */
	private task: Task;

	/**
	 * The UNIX timestamp of the start time of this block
	 */
	private startTimestamp: number;

	/**
	 * The UNIX timestamp of the end time of this block
	 */
	private endTimestamp: number;

	constructor({
		id,
		task,
		startTimestamp,
		endTimestamp,
	}: TaskBlockConstructorProps) {
		this.id = id;
		this.task = task;
		this.startTimestamp = startTimestamp;
		this.endTimestamp = endTimestamp;
	}

	getId() {
		return this.id;
	}

	getTask() {
		return this.task;
	}

	setTask(task: Task) {
		this.task = task;
	}

	getStartTimestamp() {
		return this.startTimestamp;
	}

	setStartTimestamp(timestamp: number) {
		// Verifies that the timestamp is in UNIX seconds and not milliseconds
		if (timestamp.toString().length !== 10) {
			throw new Error(
				`Timestamp must be in UNIX seconds, received ${timestamp}`
			);
		}

		this.startTimestamp = timestamp;
	}

	getEndTimestamp() {
		return this.endTimestamp;
	}

	setEndTimestamp(timestamp: number) {
		this.endTimestamp = timestamp;
	}
}
