<script setup lang="ts">
import { useTimeblockStore } from '~f/store/define';
import { TaskBoxDropData } from '~f/types/task-box';

const props = defineProps<{
	id: string;
}>();

const timeblockStore = useTimeblockStore();
const task = $computed(() => timeblockStore.tasksMap.get(props.id)!);

function onDragStart(event: DragEvent) {
	event.dataTransfer?.setData(
		'data',
		JSON.stringify<TaskBoxDropData>({
			type: 'particle-drop',
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
		class="py-2 rounded-lg text-center self-stretch m-2 bg-red-100 cursor-grab active:cursor-grabbing"
		@dragstart="onDragStart"
	>
		{{ task.getName() }}
	</div>
</template>
