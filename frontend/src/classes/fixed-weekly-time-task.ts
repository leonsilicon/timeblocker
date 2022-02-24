import type { FixedTimeTaskConstructorProps } from './fixed-time-task';
import { FixedTimeTask } from './fixed-time-task';

export type FixedWeeklyTimeTaskConstructorProps =
	FixedTimeTaskConstructorProps & {
		dayOfWeek: number;
	};

/**
 * A task block that represents a task that always starts and ends at the same time and
 * occurs at the same time every week.
 */
export class FixedWeeklyTimeTask extends FixedTimeTask {
	dayOfWeek: number;

	/**
	 * Creates a new fixed weekly time task block.
	 * @param props The properties to set on the fixed weekly time task block.
	 */
	constructor(props: FixedWeeklyTimeTaskConstructorProps) {
		super(props);
		this.type = 'fixed-weekly-time';
		this.setDayOfWeek(props.dayOfWeek);
	}

	/**
	 * Sets the day of the week the task repeats on.
	 * @param dayOfWeek The new day of the week the task repeats on.
	 */
	setDayOfWeek(dayOfWeek: number) {
		if (dayOfWeek < 0 || dayOfWeek > 6) {
			throw new Error('Day of week must be between 0 and 6 inclusive.');
		}

		this.dayOfWeek = dayOfWeek;
	}

	/**
	 * Gets the day of the week the task repeats on.
	 * @returns The day of the week the task repeats on.
	 */
	getDayOfWeek() {
		return this.dayOfWeek;
	}
}
