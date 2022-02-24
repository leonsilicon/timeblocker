<script setup lang="ts">
import { useRouter } from 'vue-router';
import { mdiSyncCircle, mdiMouseVariant, mdiViewColumnOutline } from '@mdi/js';
import { useAppStore } from '~f/store/app';

const router = useRouter();
const appStore = useAppStore();

async function goToTimeblockPage() {
	if (appStore.isLoggedIn) {
		await router.push('/timeblocks');
	} else {
		await router.push('/register');
	}
}

const features = [
	{
		title: 'Synchronized',
		description:
			'Access your timeblocks from any internet-connected device, at any time.',
		icon: mdiSyncCircle,
	},
	{
		title: 'Intuitive UI',
		description:
			'The easy drag-and-drop UI makes it effortless to plan out your day.',
		icon: mdiMouseVariant,
	},
	{
		title: 'Multiple Columns',
		description:
			'Supports multiple columns so you can restructure your day around interruptions.',
		icon: mdiViewColumnOutline,
	},
];
</script>

<template>
	<div class="items-center py-16 column">
		<div class="mb-2 text-5xl font-bold text-center">timeblocker.io</div>
		<div class="px-8 max-w-2xl text-center">
			Timeblocking is a way to manage your time more efficiently and effectively
			by chunking the hours in a day into "blocks," and assigning a single task
			to each of these blocks.
		</div>

		<button class="mt-4 btn btn-primary btn-sm" @click="goToTimeblockPage">
			Create Timeblock
		</button>
	</div>

	<!-- Features -->
	<div class="gap-4 items-stretch px-8 mx-auto mb-8 max-w-5xl row">
		<div
			v-for="(feature, index) in features"
			:key="index"
			class="flex-1 column"
		>
			<v-icon class="self-center pb-4" size="70" :icon="feature.icon" />
			<h1 class="text-xl text-center text-bold">{{ feature.title }}</h1>
			<p clkss="text-gray-500 text-sm text-cente">{{ feature.description }}</p>
		</div>
	</div>
</template>
