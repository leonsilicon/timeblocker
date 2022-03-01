import type { Task } from '~f/classes/task';
import type { Timeblock } from '~f/classes/timeblock';

export type TaskBlockConstructorProps = {
	id: string;
	task: Task;
	startMinute: number;
	endMinute: number;
	timeblock: Timeblock;
	timeblockColumnId: string | undefined;
};

/**
 * A chunk of time on the timeblock that is associated with a particular task.
 */
export class TaskBlock {
	/**
	 * The type of task block.
	 */
	protected type: string;

	/**
	 * The task this task block references
	 */
	protected task: Task;

	/**
	 * The unique ID of this task block
	 */
	private readonly id: string;

	/**
	 * The UNIX minute of the start time of this block
	 */
	private startMinute: number;

	/**
	 * The UNIX minute of the end time of this block
	 */
	private endMinute: number;

	/**
	 * The timeblock this task block belongs to.
	 */
	private readonly timeblock: Timeblock;

	/**
	 * The timeblock column this task block belongs to.
	 */
	private timeblockColumnId: string | undefined;

	/**
	 * Creates a new task block.
	 * @param props The properties to set on the task block.
	 * @param props.id The ID of the task block.
	 * @param props.task The task associated with the task block.
	 * @param props.startMinute The start minute of the task block.
	 * @param props.endMinute The end minute of the task block.
	 * @param props.timeblock The timeblock the task block belongs to.
	 * @param props.timeblockColumnId The timeblock column the task block belongs to.
	 */
	constructor({
		id,
		task,
		startMinute,
		endMinute,
		timeblock,
		timeblockColumnId,
	}: TaskBlockConstructorProps) {
		this.id = id;
		this.timeblock = timeblock;
		this.task = task;
		this.type = 'normal';
		this.setStartMinute(startMinute);
		this.setEndMinute(endMinute);
		this.setTimeblockColumnId(timeblockColumnId);
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
	 * Gets the start minute of the task block.
	 * @returns The start minute of the task block.
	 */
	getStartMinute() {
		return this.startMinute;
	}

	/**
	 * Sets the start minute of the task block and verifies that the minute
	 * is a valid UNIX minute.
	 * @param minute The new start minute of the task block.
	 */
	setStartMinute(minute: number) {
		if (minute === undefined) {
			throw new Error('startMinute cannot be undefined.');
		}

		if (minute < 0 || minute > 1440) {
			throw new Error(`Minute must be between 0 and 1440, received ${minute}`);
		}

		this.startMinute = minute;
	}

	/**
	 * Gets the end minute of the task block.
	 * @returns The end minute of the task block.
	 */
	getEndMinute() {
		return this.endMinute;
	}

	/**
	 * Sets the end minute of the task block and verifies that the minute
	 * is a valid UNIX minute.
	 * @param minute The new end minute of the task block.
	 */
	setEndMinute(minute: number) {
		if (minute === undefined) {
			throw new Error('endMinute cannot be undefined.');
		}

		if (minute < 0 || minute > 1440) {
			throw new Error(`Minute must be between 0 and 1440, received ${minute}`);
		}

		this.endMinute = minute;
	}

	public getTimeblockColumnId() {
		return this.timeblockColumnId;
	}

	public setTimeblockColumnId(timeblockColumnId: string | undefined) {
		this.timeblockColumnId = timeblockColumnId;
	}

	public getType() {
		return this.type;
	}
}
