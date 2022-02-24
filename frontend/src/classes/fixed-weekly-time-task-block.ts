import type { FixedTimeTaskBlockConstructorProps } from './fixed-time-task-block';
import { FixedTimeTaskBlock } from './fixed-time-task-block';
import type { FixedWeeklyTimeTask } from '~f/classes/fixed-weekly-time-task';

export type FixedWeeklyTimeTaskBlockConstructorProps =
	FixedTimeTaskBlockConstructorProps & {
		task: FixedWeeklyTimeTask;
	};

/**
 * A task block that represents a task that always starts and ends at the same time and
 * occurs at the same time every week.
 */
export class FixedWeeklyTimeTaskBlock extends FixedTimeTaskBlock {
	public override task: FixedWeeklyTimeTask;

	/**
	 * Creates a new fixed weekly time task block.
	 * @param props The properties to set on the fixed weekly time task block.
	 */
	constructor(props: FixedWeeklyTimeTaskBlockConstructorProps) {
		super(props);
		this.task = props.task;
	}

	public override getTask() {
		return this.task;
	}

	public override setTask(task: FixedWeeklyTimeTask) {
		this.task = task;
	}
}
