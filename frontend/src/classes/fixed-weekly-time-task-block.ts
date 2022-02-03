import type { FixedTimeTaskBlockConstructorProps } from './fixed-time-task-block';
import { FixedTimeTaskBlock } from './fixed-time-task-block';

export type FixedWeeklyTimeTaskBlockConstructorProps =
	FixedTimeTaskBlockConstructorProps & {
		dayOfWeek: number;
	};

export class FixedWeeklyTimeTaskBlock extends FixedTimeTaskBlock {
	dayOfWeek: number;

	constructor(props: FixedWeeklyTimeTaskBlockConstructorProps) {
		super(props);
		this.setDayOfWeek(props.dayOfWeek);
	}

	setDayOfWeek(dayOfWeek: number) {
		if (dayOfWeek < 0 || dayOfWeek > 6) {
			throw new Error('Day of week must be between 0 and 6 inclusive.');
		}

		this.dayOfWeek = dayOfWeek;
	}

	getDayOfWeek() {
		return this.dayOfWeek;
	}
}
