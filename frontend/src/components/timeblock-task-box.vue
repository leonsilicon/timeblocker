<script setup lang="ts">
import { mdiPencilCircle, mdiDeleteCircle } from '@mdi/js';
import { useTimeblockStore } from '~f/store/timeblock';
import { TaskBoxDropData, TaskBoxDropType } from '~f/types/task-box';
import { client } from '~f/utils/trpc';
import TimeblockTaskBoxEditor from '~f/components/timeblock-task-box-editor.vue';

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

let taskNewName = $ref('');
let taskNewDescription = $ref('');

let isTaskEditorShowing = $ref(false);
function onEditClick() {
	taskNewName = task.getName();
	taskNewDescription = task.getDescription() ?? '';
	isTaskEditorShowing = true;
}

async function updateTask() {
	if (taskNewName === '') return;

	isTaskEditorShowing = false;

	task.setName(taskNewName);
	task.setDescription(taskNewDescription);

	await client.mutation('updateTimeblockTask', {
		taskId: task.getId(),
		timeblockId: timeblockStore.activeTimeblock.getId(),
		description: taskNewDescription,
		name: taskNewName,
	});
}
</script>

<template>
	<TimeblockTaskBoxEditor
		v-if="isTaskEditorShowing"
		v-model:name="taskNewName"
		v-model:description="taskNewDescription"
		@blur="updateTask"
	/>
	<div
		v-else
		draggable="true"
		class="column m-2 cursor-grab self-stretch rounded-lg bg-red-100 py-2 text-center active:cursor-grabbing"
		@dragstart="onDragStart"
		@mouseover="onMouseOver"
		@mouseout="onMouseOut"
	>
		<div class="row items-center justify-between">
			<div v-show="areTaskBoxOptionsShowing" class="ml-4">
				<v-icon
					:icon="mdiDeleteCircle"
					class="transform cursor-pointer text-red-500 transition-all hover:scale-105"
					@click="onDeleteClick"
				></v-icon>
			</div>
			<div class="column mx-auto">
				<div>
					{{ task.getName() }}
				</div>
				<div class="px-2 text-sm text-gray-500">
					{{ task.getDescription() }}
				</div>
			</div>
			<div v-show="areTaskBoxOptionsShowing" class="mr-4">
				<v-icon
					:icon="mdiPencilCircle"
					class="transform cursor-pointer text-green-500 transition-all hover:scale-105"
					@click="onEditClick"
				></v-icon>
			</div>
		</div>
	</div>
</template>
