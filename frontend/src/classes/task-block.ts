import type { Task } from '~f/classes/task';

export type TaskBlockConstructorProps = {
	task: Task;
};

export class TaskBlock {
	private task: Task;

	/**
	 * The UNIX timestamp of the start time of this block
	 */
	private startTimestamp: number;

	/**
	 * The UNIX timestamp of the end time of this block
	 */
	private endTimestamp: number;

	constructor({ task }: TaskBlockConstructorProps) {
		this.task = task;
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
