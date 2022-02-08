export type TaskBoxDropData = {
	type: TaskBoxDropType;
	payload:
		| {
				taskId: string;
		  }
		// If the task box comes from a task block
		| {
				sourceTaskBlockId: string;
		  };
};

export enum TaskBoxDropType {
	taskBoxDrop = 'task-box-drop',
}
