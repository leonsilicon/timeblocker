import type { TaskConstructorProps } from '~f/classes/task';
import { Task } from '~f/classes/task';

export type FixedTimeTaskConstructorProps = TaskConstructorProps & {
	startMinute: number | undefined;
	endMinute: number | undefined;
};

/**
 * A task that represents a task that always starts and ends at the same time.
 */
export class FixedTimeTask extends Task {
	static color = 'orange';
	/**
	 * The start minute of the task.
	 */
	private startMinute: number | undefined;

	/**
	 * The end minute of the task.
	 */
	private endMinute: number | undefined;

	/**
	 * Creates a new fixed time task.
	 * @param props The properties to set on the task.
	 * @param startMinute The day minute the task always starts on.
	 * @param endMinute The day minute the task always ends on.
	 */
	constructor(props: FixedTimeTaskConstructorProps) {
		super(props);
		this.setColor(FixedTimeTask.color);
		this.type = 'fixed-time';
		this.setStartMinute(props.startMinute);
		this.setEndMinute(props.endMinute);
	}

	/**
	 * Gets the minute the task always starts on.
	 * @returns The minute the task always starts on.
	 */
	getStartMinute() {
		return this.startMinute;
	}

	/**
	 * Sets the minute the task always starts on.
	 * @param startMinute The new minute the task always starts on.
	 */
	setStartMinute(startMinute: number | undefined) {
		this.startMinute = startMinute;
	}

	/**
	 * Gets the minute the task always ends on.
	 * @returns The minute the task always ends on.
	 */
	getEndMinute() {
		return this.endMinute;
	}

	/**
	 * Sets the time the task always ends on.
	 * @param endMinute The new minute the task always ends on.
	 */
	setEndMinute(endMinute: number | undefined) {
		this.endMinute = endMinute;
	}
}
