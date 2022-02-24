<script setup lang="ts">
import NavigationHeader from '~f/components/navigation-header.vue';
</script>

<template>
	<div class="column h-full w-full">
		<NavigationHeader />
		<div class="column grow">
			<router-view />
		</div>
	</div>
</template>
