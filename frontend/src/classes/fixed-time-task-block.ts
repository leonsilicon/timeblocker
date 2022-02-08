import type { TaskBlockConstructorProps } from './task-block';
import { TaskBlock } from './task-block';

export type FixedTimeTaskBlockConstructorProps = TaskBlockConstructorProps & {
	startTime: string;
	endTime: string;
};

/**
 * A task block that represents a task that always starts and ends at the same time.
 */
export class FixedTimeTaskBlock extends TaskBlock {
	private startTime: string;

	private endTime: string;

	constructor(props: FixedTimeTaskBlockConstructorProps) {
		super(props);
		this.setStartTime(props.startTime);
		this.setEndTime(props.endTime);
	}

	getStartTime() {
		return this.startTime;
	}

	getEndTime() {
		return this.endTime;
	}

	setStartTime(startTime: string) {
		this.startTime = startTime;
	}

	setEndTime(endTime: string) {
		this.endTime = endTime;
	}
}
