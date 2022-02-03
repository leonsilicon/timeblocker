<script setup lang="ts">
import TimeblockCalendar from '~f/components/timeblock-calendar.vue';
import TimeblockPageToolbar from '~f/components/timeblock-page-toolbar.vue';
import TimeblockPageTaskDock from '~f/components/timeblock-page-task-dock.vue';
</script>

<template>
	<div class="column">
		<TimeblockPageToolbar />
		<div class="row">
			<TimeblockPageTaskDock />
			<TimeblockCalendar />
		</div>
	</div>
</template>
