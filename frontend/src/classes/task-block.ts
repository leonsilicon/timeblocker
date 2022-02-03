import type { Task } from '~f/classes/task';

export type TaskBlockConstructorProps = {
	task: Task;
};

export class TaskBlock {
	private readonly task: Task;

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

	getStartTimestamp() {
		return this.startTimestamp;
	}

	setStartTimestamp(timestamp: number) {
		this.startTimestamp = timestamp;
	}

	getEndTimestamp() {
		return this.endTimestamp;
	}

	setEndTimestamp(timestamp: number) {
		this.endTimestamp = timestamp;
	}
}
