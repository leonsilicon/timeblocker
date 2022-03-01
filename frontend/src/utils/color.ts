import { FixedTimeTask } from '~f/classes/fixed-time-task';
import { FixedWeeklyTimeTask } from '~f/classes/fixed-weekly-time-task';
import { Task } from '~f/classes/task';

export function getColorFromTaskType(taskType: string) {
	console.log(taskType)
	switch (taskType) {
		case 'normal':
			return Task.color;
		case 'fixed-weekly-time':
			return FixedWeeklyTimeTask.color;
		case 'fixed-time':
			return FixedTimeTask.color;
		default:
			return 'white';
	}
}
