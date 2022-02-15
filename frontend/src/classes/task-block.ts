import type { Task } from '~f/classes/task';
import type { Timeblock } from '~f/classes/timeblock';

export type TaskBlockConstructorProps = {
	id: string;
	task: Task;
	startTimestamp: number;
	endTimestamp: number;
	timeblock: Timeblock;
	columnVersionNumber: number;
};

/**
 * A chunk of time on the timeblock that is associated with a particular task.
 */
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

	/**
	 * The timeblock column this task block belongs to.
	 */
	private columnVersionNumber: number | undefined;

	/**
	 * Creates a new task block.
	 * @param props The properties to set on the task block.
	 * @param props.id The ID of the task block.
	 * @param props.task The task associated with the task block.
	 * @param props.startTimestamp The start timestamp of the task block.
	 * @param props.endTimestamp The end timestamp of the task block.
	 * @param props.timeblock The timeblock the task block belongs to.
	 * @param props.columnVersionNumber The timeblock column the task block belongs to.
	 */
	constructor({
		id,
		task,
		startTimestamp,
		endTimestamp,
		timeblock,
		columnVersionNumber,
	}: TaskBlockConstructorProps) {
		this.id = id;
		this.timeblock = timeblock;
		this.task = task;
		this.setStartTimestamp(startTimestamp);
		this.setEndTimestamp(endTimestamp);
		this.setColumnVersionNumber(columnVersionNumber);
	}

	/**
	 * Gets the ID of the task block.
	 * @returns The ID of the task block.
	 */
	getId() {
		return this.id;
	}

	/**
	 * Gets the task associated with the task block.
	 * @returns The task associated with the task block.
	 */
	getTask() {
		return this.task;
	}

	/**
	 * Sets the task associated with the task block.
	 * @param task The new task to be associated with the task block.
	 */
	setTask(task: Task) {
		this.task = task;
	}

	/**
	 * Gets the start timestamp of the task block.
	 * @returns The start timestamp of the task block.
	 */
	getStartTimestamp() {
		return this.startTimestamp;
	}

	/**
	 * Sets the start timestamp of the task block and verifies that the timestamp
	 * is a valid UNIX timestamp.
	 * @param timestamp The new start timestamp of the task block.
	 */
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

	/**
	 * Gets the end timestamp of the task block.
	 * @returns The end timestamp of the task block.
	 */
	getEndTimestamp() {
		return this.endTimestamp;
	}

	/**
	 * Sets the end timestamp of the task block and verifies that the timestamp
	 * is a valid UNIX timestamp.
	 * @param timestamp The new end timestamp of the task block.
	 */
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

	public getColumnVersionNumber() {
		return this.columnVersionNumber;
	}

	public setColumnVersionNumber(columnVersionNumber: number | undefined) {
		this.columnVersionNumber = columnVersionNumber;
	}
}
