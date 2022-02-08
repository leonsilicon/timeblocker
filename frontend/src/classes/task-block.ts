import type { Task } from '~f/classes/task';
import type { Timeblock } from '~f/classes/timeblock';

export type TaskBlockConstructorProps = {
	id: string;
	task: Task;
	startTimestamp: number;
	endTimestamp: number;
	timeblock: Timeblock;
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

	/**
	 * The timeblock this task block belongs to.
	 */
	private readonly timeblock: Timeblock;

	constructor({
		id,
		task,
		startTimestamp,
		endTimestamp,
		timeblock,
	}: TaskBlockConstructorProps) {
		this.id = id;
		this.timeblock = timeblock;
		this.task = task;
		this.setStartTimestamp(startTimestamp);
		this.setEndTimestamp(endTimestamp);
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
		if (timestamp === undefined) {
			throw new Error('startTimestamp cannot be undefined.');
		}

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
		if (timestamp === undefined) {
			throw new Error('endTimestamp cannot be undefined.');
		}

		// Verifies that the timestamp is in UNIX seconds and not milliseconds
		if (timestamp.toString().length !== 10) {
			throw new Error(
				`Timestamp must be in UNIX seconds, received ${timestamp}`
			);
		}

		this.endTimestamp = timestamp;
	}
}
