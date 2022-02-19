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
		message: `Are you sure you want to delete timeblock ${props.name}? This action is not reversible!`,
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
				@click.stop="onDeleteButtonPress"
			>
				<v-icon :icon="mdiTrashCan" class="text-red-600" />
			</button>
		</div>
	</button>
</template>
