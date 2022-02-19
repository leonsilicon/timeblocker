<script setup lang="ts">
import { useRouter } from 'vue-router';
import { mdiTrashCan } from '@mdi/js';
import { client } from '~f/utils/trpc';

const props = defineProps<{
	id: string;
	name: string;
}>();

const router = useRouter();

async function deleteTimeblock() {
	await client.mutation('deleteTimeblock', {
		timeblockId: props.id,
	});
}

async function goToTimeblock() {
	await router.push(`/timeblock/${props.id}`);
}

const isMouseOverDeleteButton = $ref(false);
const timeblockListingClasses = $computed(() => {
	if (isMouseOverDeleteButton) return '!bg-red-100 border-red-500';
});
</script>

<template>
	<button
		class="py-4 px-4 border-2 center row rounded-md border-primary cursor-pointer hover:scale-[1.01] hover:bg-green-100 transition-all"
		:class="timeblockListingClasses"
		@click="goToTimeblock"
	>
		<div class="flex-1 mr-auto"></div>
		<div class="flex-1">{{ name }}</div>
		<div class="flex-1 ml-auto row justify-end">
			<button
				class="hover:bg-red-300 rounded-full p-2 transition-all"
				@mouseover="isMouseOverDeleteButton = true"
				@mouseout="isMouseOverDeleteButton = false"
				@click.stop="deleteTimeblock"
			>
				<v-icon :icon="mdiTrashCan" class="text-red-600" />
			</button>
		</div>
	</button>
</template>
