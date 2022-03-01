<script setup lang="ts">
import { useRouter } from 'vue-router';
import { mdiTrashCan } from '@mdi/js';
import { Dialog } from 'quasar';
import { client } from '~f/utils/trpc';
import { useTimeblockStore } from '~f/store/timeblock';

const props = defineProps<{
	id: string;
	name: string;
}>();

const router = useRouter();
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
		class="center row border-primary cursor-pointer rounded-md border-2 p-4 transition-all hover:scale-[1.01] hover:bg-green-100"
		:class="timeblockListingClasses"
		@click="goToTimeblock"
	>
		<div class="mr-auto flex-1"></div>
		<div class="flex-1">{{ name }}</div>
		<div class="row ml-auto flex-1 justify-end">
			<button
				class="rounded-full p-2 transition-all hover:bg-red-300"
				@mouseover="isMouseOverDeleteButton = true"
				@mouseout="isMouseOverDeleteButton = false"
				@click.stop="onDeleteButtonPress"
			>
				<v-icon :icon="mdiTrashCan" class="text-red-600" />
			</button>
		</div>
	</button>
</template>
