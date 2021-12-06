<template>
<div>
	{{ date }}
</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ date: string }>();
</script>
