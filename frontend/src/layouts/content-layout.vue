<script setup lang="ts">
import NavigationHeader from '~f/components/navigation-header.vue';
import WebsiteFooter from '~f/components/website-footer.vue';
</script>

<template>
	<div class="column w-full h-full">
		<NavigationHeader />
		<div class="flex-grow column">
			<router-view />
		</div>
		<WebsiteFooter />
	</div>
</template>
