<script setup lang="ts">
import { useTimeblockStore } from '~f/store/define';
import { getRandomTaskColor } from '~f/utils/task';

const props = defineProps<{
	id: string;
}>();

const timeblockStore = useTimeblockStore();
const task = $computed(() => timeblockStore.tasks.get(props.id));

const taskBoxStyle = {
	backgroundColor: getRandomTaskColor(),
};
</script>

<template>
	<div :style="taskBoxStyle">{{ task.name }}</div>
</template>
