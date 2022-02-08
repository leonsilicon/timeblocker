import type { Timeblock } from '~f/classes/timeblock';
import { timeblockDateToDayjs } from '~f/utils/date';

export type TimeblockColumnConstructorProps = {
	timeblock: Timeblock;
	versionNumber: number;
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
	 * The IDs of task blocks that are contained in this column.
	 */
	private readonly taskBlockIds: Set<string>;

	constructor({ timeblock, versionNumber }: TimeblockColumnConstructorProps) {
		this.timeblock = timeblock;
		this.versionNumber = versionNumber;
		this.taskBlockIds = new Set();
	}

	public getDate() {
		return this.timeblock.getDate();
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

	public addTaskBlock(taskBlockId: string) {
		const taskBlock = this.timeblock.getTaskBlock(taskBlockId);

		// Validate that the task block overlaps with the date
		const taskBlockStartTimestamp = taskBlock.getStartTimestamp();
		const taskBlockEndTimestamp = taskBlock.getEndTimestamp();
		const columnStartDate = timeblockDateToDayjs(this.timeblock.getDate());
		const columnEndDate = columnStartDate.add(1, 'day');

		if (
			columnStartDate.unix() > taskBlockEndTimestamp ||
			columnEndDate.unix() <= taskBlockStartTimestamp
		) {
			throw new Error('Task does not fall into range of column.');
		}

		this.taskBlockIds.add(taskBlockId);
	}

	public removeTaskBlock(taskBlockId: string) {
		this.taskBlockIds.delete(taskBlockId);
	}

	public getTaskBlocks() {
		return [...this.taskBlockIds.values()].map((taskBlockId) =>
			this.timeblock.getTaskBlock(taskBlockId)
		);
	}
}
