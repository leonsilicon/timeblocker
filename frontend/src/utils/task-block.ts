import type { TaskBlock } from '~f/classes/task-block';
import type { TimeblockDate } from '~f/types/date';
import { dayjsFromTimeblockDate } from '~f/utils/date';

type CalculateTaskBlocksRatiosProps = {
	taskBlocks: TaskBlock[];
	date: TimeblockDate;
};

export function calculateTaskBlocksRatios({
	taskBlocks,
	date,
}: CalculateTaskBlocksRatiosProps) {
	const ratios: number[] = [];

	const startOfDay = dayjsFromTimeblockDate(date);
	const endOfDay = startOfDay.add(1, 'day').subtract(1, 'millisecond');
	for (const taskBlock of taskBlocks) {
		const startTimestamp = Math.max(
			taskBlock.getStartTimestamp(),
			startOfDay.unix()
		);

		const endTimestamp = Math.min(taskBlock.getEndTimestamp(), endOfDay.unix());

		ratios.push(endTimestamp - startTimestamp);
	}

	return ratios;
}
