<script setup lang="ts">
import { mdiPencilCircle, mdiDeleteCircle } from '@mdi/js';
import { useTimeblockStore } from '~f/store/timeblock';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';
import { client } from '~f/utils/trpc';

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

let areTaskBoxOptionsShowing = $ref(false);
function onMouseOver() {
	areTaskBoxOptionsShowing = true;
}

function onMouseOut() {
	areTaskBoxOptionsShowing = false;
}

async function onDeleteClick() {
	timeblockStore.activeTimeblock.getTask(task.getId()).setIsHidden(true);

	await client.mutation('hideTimeblockTask', {
		taskId: task.getId(),
		timeblockId: timeblockStore.activeTimeblock.getId(),
	});
}

function onEditClick() {

}
</script>

<template>
	<div
		draggable="true"
		class="py-2 rounded-lg text-center self-stretch m-2 bg-red-100 cursor-grab active:cursor-grabbing column"
		@dragstart="onDragStart"
		@mouseover="onMouseOver"
		@mouseout="onMouseOut"
	>
		<div class="row justify-between items-center">
			<div v-show="areTaskBoxOptionsShowing" class="ml-4">
				<v-icon
					:icon="mdiDeleteCircle"
					class="text-red-500 cursor-pointer"
					@click="onDeleteClick"
				></v-icon>
			</div>
			<div class="column mx-auto">
				<div>
					{{ task.getName() }}
				</div>
				<div class="text-gray-500 text-sm px-2">
					{{ task.getDescription() }}
				</div>
			</div>
			<div v-show="areTaskBoxOptionsShowing" class="mr-4">
				<v-icon
					:icon="mdiPencilCircle"
					class="text-green-500 cursor-pointer"
					@click="onEditClick"
				></v-icon>
			</div>
		</div>
	</div>
</template>
