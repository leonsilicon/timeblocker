<script setup lang="ts">
import NavigationHeader from '~f/components/navigation-header.vue';
import WebsiteFooter from '~f/components/website-footer.vue';
</script>

<template>
	<div class="column h-full w-full">
		<NavigationHeader />
		<div class="column flex-grow">
			<router-view />
		</div>
		<WebsiteFooter />
	</div>
</template>
