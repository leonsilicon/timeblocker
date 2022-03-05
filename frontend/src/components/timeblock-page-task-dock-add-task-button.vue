<script setup lang="ts">
import { mdiMenuDown } from '@mdi/js';

const emit = defineEmits(['select']);
</script>

<template>
	<div>
		<q-btn-dropdown
			split
			:dropdown-icon="mdiMenuDown"
			color="primary"
			label="Add Task"
			class="mb-2"
			@click="emit('select', 'normal')"
		>
			<q-list>
				<q-item v-close-popup clickable @click="emit('select', 'fixed-time')">
					<q-item-section>
						<q-item-label>Add Fixed Time Task</q-item-label>
						<q-item-label caption>
							A task that always occurs at the same time every day.
						</q-item-label>
					</q-item-section>
				</q-item>

				<q-item
					v-close-popup
					clickable
					@click="emit('select', 'fixed-weekly-time')"
				>
					<q-item-section>
						<q-item-label>Add Fixed Weekly Time Task</q-item-label>
						<q-item-label caption>
							A task that always occurs on the same time and day every week.
						</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</q-btn-dropdown>
	</div>
</template>
