import dayjs from 'dayjs';
import type { TaskBlock } from '~f/classes/task-block';
import type { Timeblock } from '~f/classes/timeblock';
import type { TimeblockDate } from '~f/types/date';

export type TimeblockColumnConstructorProps = {
	timeblock: Timeblock;
	versionNumber: number;
	date: TimeblockDate;
};

/**
 * A timeblock column is a column of your tasks
 */
export class TimeblockColumn {
	/**
	 * The timeblock that this column belongs to
	 */
	private timeblock: Timeblock;

	private versionNumber: number;

	/**
	 * The IDs of tasks that are contained in this column.
	 */
	private readonly taskBlockMap: Map<string, TaskBlock>;

	/**
	 * The date this column represents
	 */
	private readonly date: TimeblockDate;

	constructor({
		timeblock,
		versionNumber,
		date,
	}: TimeblockColumnConstructorProps) {
		this.timeblock = timeblock;
		this.date = date;
		this.versionNumber = versionNumber;
		this.taskBlockMap = new Map();
	}

	public getDate() {
		return this.date;
	}

	public setVersionNumber(versionNumber: number) {
		this.versionNumber = versionNumber;
	}

	public getVersionNumber() {
		return this.versionNumber;
	}

	public setTimeblock(timeblock: Timeblock) {
		this.timeblock = timeblock;
	}

	public getTimeblock() {
		return this.timeblock;
	}

	public addTaskBlock(taskBlock: TaskBlock) {
		// Validate that the task block overlaps with the date
		const taskBlockStartTimestamp = taskBlock.getStartTimestamp();
		const taskBlockEndTimestamp = taskBlock.getEndTimestamp();

		const columnStartDate = dayjs()
			.set('year', this.date.year)
			.set('month', this.date.month)
			.set('day', this.date.day);

		const columnEndDate = columnStartDate.add(1, 'day');

		if (
			columnStartDate.unix() > taskBlockEndTimestamp ||
			columnEndDate.unix() <= taskBlockStartTimestamp
		) {
			throw new Error('Task does not fall into range of column.');
		}

		this.taskBlockMap.set(taskBlock.getId(), taskBlock);
	}

	public removeTaskBlock(taskBlockId: string) {
		this.taskBlockMap.delete(taskBlockId);
	}

	public getTaskBlock(taskBlockId: string) {
		return this.taskBlockMap.get(taskBlockId);
	}

	public getTaskBlocks() {
		return [...this.taskBlockMap.values()];
	}
}
