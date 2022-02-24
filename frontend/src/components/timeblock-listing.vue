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

async function onDeleteButtonPress() {
	Dialog.create({
		message: `Are you sure you want to delete timeblock "${props.name}"? This action is not reversible!`,
		cancel: true,
		focus: 'cancel',
		ok: {
			label: 'Delete',
			color: 'transparent',
			flat: true,
			textColor: 'red',
		},
	}).onOk(async () => {
		await deleteTimeblock();
	});
}

const timeblockStore = useTimeblockStore();
async function deleteTimeblock() {
	await client.mutation('deleteTimeblock', {
		timeblockId: props.id,
	});
	timeblockStore.deleteTimeblock(props.id);
}

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
		class="p-4 hover:bg-green-100 rounded-md border-2 transition-all hover:scale-[1.01] cursor-pointer center row border-primary"
		:class="timeblockListingClasses"
		@click="goToTimeblock"
	>
		<div class="flex-1 mr-auto"></div>
		<div class="flex-1">{{ name }}</div>
		<div class="flex-1 justify-end ml-auto row">
			<button
				class="p-2 hover:bg-red-300 rounded-full transition-all"
				@mouseover="isMouseOverDeleteButton = true"
				@mouseout="isMouseOverDeleteButton = false"
				@click.stop="onDeleteButtonPress"
			>
				<v-icon :icon="mdiTrashCan" class="text-red-600" />
			</button>
		</div>
	</button>
</template>
