import type { FixedTimeTask } from '~f/classes/fixed-time-task';
import type { TaskBlockConstructorProps } from '~f/classes/task-block';
import { TaskBlock } from '~f/classes/task-block';

export type FixedTimeTaskBlockConstructorProps = Omit<TaskBlockConstructorProps, 'task'> & {
	task: FixedTimeTask;
};

/**
 * A task block that represents a task that always starts and ends at the same time.
 */
export class FixedTimeTaskBlock extends TaskBlock {
	protected task: FixedTimeTask;

	constructor(props: FixedTimeTaskBlockConstructorProps) {
		super(props);
		this.task = props.task;
	}

	public override getTask() {
		return this.task;
	}

	public override setTask(task: FixedTimeTask) {
		this.task = task;
	}

	/**
	 * Gets the time the task always starts on.
	 * @returns The time the task always starts on.
	 */
	public override getStartMinute() {
		return this.getTask().getStartMinute()!;
	}

	/**
	 * Sets the time the task always starts on.
	 * @param startMinute The new time the task always starts on.
	 */
	public override setStartMinute(startMinute: number) {
		this.getTask().setStartMinute(startMinute);
	}

	/**
	 * Gets the minute the task always ends on.
	 * @returns The minute the task always ends on.
	 */
	public override getEndMinute() {
		return this.getTask().getEndMinute()!;
	}

	/**
	 * Sets the time the task always ends on.
	 * @param endTime The new time the task always ends on.
	 */
	setEndMinute(endMinute: number) {
		this.getTask().setEndMinute(endMinute);
	}
}
