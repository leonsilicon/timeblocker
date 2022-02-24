<script setup lang="ts">
import NavigationHeader from '~f/components/navigation-header.vue';
</script>

<template>
	<div class="w-full h-full column">
		<NavigationHeader />
		<div class="grow column">
			<router-view />
		</div>
	</div>
</template>
