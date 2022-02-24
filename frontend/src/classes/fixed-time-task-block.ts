import type { TaskConstructorProps } from '~f/classes/task';
import { Task } from '~f/classes/task';

export type FixedTimeTaskConstructorProps = TaskConstructorProps & {
	startTime: string;
	endTime: string;
};

/**
 * A task that represents a task that always starts and ends at the same time.
 */
export class FixedTimeTask extends Task {
	/**
	 * The start time of the task block.
	 */
	private startTime: string;

	/**
	 * The end time of the task block.
	 */
	private endTime: string;

	/**
	 * Creates a new fixed time task block.
	 * @param props The properties to set on the task block.
	 * @param startTime The time the task block always starts on
	 * @param endTime The time the task block always ends on
	 */
	constructor(props: FixedTimeTaskConstructorProps) {
		super(props);
		this.setStartTime(props.startTime);
		this.setEndTime(props.endTime);
	}

	/**
	 * Gets the time the task always starts on.
	 * @returns The time the task always starts on.
	 */
	getStartTime() {
		return this.startTime;
	}

	/**
	 * Sets the time the task always starts on.
	 * @param startTime The new time the task always starts on.
	 */
	setStartTime(startTime: string) {
		this.startTime = startTime;
	}

	/**
	 * Gets the time the task always ends on.
	 * @returns The time the task always ends on.
	 */
	getEndTime() {
		return this.endTime;
	}

	/**
	 * Sets the time the task always ends on.
	 * @param endTime The new time the task always ends on.
	 */
	setEndTime(endTime: string) {
		this.endTime = endTime;
	}
}
