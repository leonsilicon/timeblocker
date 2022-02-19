import type { TaskBlock } from '~f/classes/task-block';

type CalculateTaskBlocksRatiosProps = {
	taskBlocks: TaskBlock[];
};

export function calculateTaskBlocksRatios({
	taskBlocks,
}: CalculateTaskBlocksRatiosProps) {
	const ratios: number[] = [];

	for (const taskBlock of taskBlocks) {
		const startMinute = taskBlock.getStartMinute();
		const endMinute = taskBlock.getEndMinute();

		ratios.push(endMinute - startMinute);
	}

	return ratios;
}
