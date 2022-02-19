import type { Timeblock } from '~f/classes/timeblock';
import { timeblockDateToDayjs } from '~f/utils/date';

export type TimeblockColumnConstructorProps = {
	id: string;
	timeblock: Timeblock;
};

/**
 * A timeblock column is a column containing the user's tasks.
 */
export class TimeblockColumn {
	/**
	 * The timeblock that this column belongs to.
	 */
	private timeblock: Timeblock;

	private readonly id: string;

	/**
	 * The IDs of task blocks that are contained in this column.
	 */
	private readonly taskBlockIds: Set<string>;

	/**
	 * Creates a new timeblock column.
	 * @param props The properties to set on the timeblock column.
	 * @param props.id The ID of the timeblock column
	 * @param props.timeblock The timeblock the timeblock column belongs to.
	 */
	constructor({ timeblock, id }: TimeblockColumnConstructorProps) {
		this.id = id;
		this.timeblock = timeblock;
		this.taskBlockIds = new Set();
	}

	public getDate() {
		return this.timeblock.getDate();
	}

	public getId() {
		return this.id;
	}

	public setTimeblock(timeblock: Timeblock) {
		this.timeblock = timeblock;
	}

	public getTimeblock() {
		return this.timeblock;
	}

	public addTaskBlock(taskBlockId: string) {
		const taskBlock = this.timeblock.getTaskBlock(taskBlockId);
		this.taskBlockIds.add(taskBlockId);
		taskBlock.setTimeblockColumnId(this.getId());
	}

	public removeTaskBlock(taskBlockId: string) {
		const taskBlock = this.timeblock.getTaskBlock(taskBlockId);
		taskBlock.setTimeblockColumnId(undefined);
		this.taskBlockIds.delete(taskBlockId);
	}

	public getTaskBlocks() {
		return [...this.taskBlockIds.values()].map((taskBlockId) =>
			this.timeblock.getTaskBlock(taskBlockId)
		);
	}
}
