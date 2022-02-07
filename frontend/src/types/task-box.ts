export type TaskBoxDropData = {
	type: TaskBoxDropType;
	payload: {
		taskId: string;
	};
};

export enum TaskBoxDropType {
	taskBoxDrop = 'task-box-drop',
}
