<script setup lang="ts">
import { useTimeblockStore } from '~f/store/define';

const props = defineProps<{
	id: string;
	heightRatio: number;
}>();
const timeblockStore = useTimeblockStore();
const task = $computed(() => timeblockStore.activeTimeblock.getTask(props.id)!);
</script>

<template>
	<div :style="{ 'flex-grow': heightRatio }">
		{{ task.getName() }}
	</div>
</template>
