<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
	id: string;
	name: string;
}>();

const router = useRouter();
async function goToTimeblock() {
	await router.push(`/timeblock/${props.id}`);
}
</script>

<template>
	<button
		class="py-4 px-4 border-2 center column rounded-md border-primary cursor-pointer hover:scale-105 transition-all"
		@click="goToTimeblock"
	>
		{{ name }}
	</button>
</template>
