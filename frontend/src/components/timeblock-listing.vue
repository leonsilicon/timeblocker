<script setup lang="ts">
defineProps<{
	id: string;
	name: string;
}>();
</script>

<template>
	<div class="h-16 w-16">{{ name }}</div>
</template>
