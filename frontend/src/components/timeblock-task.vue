<script setup lang="ts">
import { useTimeblockStore } from '~f/store/timeblock';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';

const props = defineProps<{
	id: string;
}>();

const timeblockStore = useTimeblockStore();
const task = $computed(() => timeblockStore.activeTimeblock.getTask(props.id)!);

function onDragStart(event: DragEvent) {
	event.dataTransfer?.setData(
		'text',
		JSON.stringify<TaskBoxDropData>({
			type: TaskBoxDropType.taskBoxDrop,
			payload: {
				taskId: props.id,
			},
		})
	);
}
</script>

<template>
	<div
		draggable="true"
		class="py-2 rounded-lg text-center self-stretch m-2 bg-red-100 cursor-grab active:cursor-grabbing column"
		@dragstart="onDragStart"
	>
		<div>
			{{ task.getName() }}
		</div>
		<div class='text-gray-500 text-sm px-2'>
			{{ task.getDescription() }}
		</div>
	</div>
</template>
