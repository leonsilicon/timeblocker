<script setup lang="ts">
function addTask() {}
</script>

<template>
	<div class="q-pa-md">
		<q-btn-dropdown
			split
			class="glossy"
			color="teal"
			label="Folders"
			@click="addTask"
		>
			<q-list>
				<q-item v-close-popup clickable @click="onItemClick">
					<q-item-section avatar>
						<q-avatar icon="folder" color="primary" text-color="white" />
					</q-item-section>
					<q-item-section>
						<q-item-label>Photos</q-item-label>
						<q-item-label caption>February 22, 2016</q-item-label>
					</q-item-section>
					<q-item-section side>
						<q-icon name="info" color="amber" />
					</q-item-section>
				</q-item>

				<q-item v-close-popup clickable @click="onItemClick">
					<q-item-section avatar>
						<q-avatar icon="assignment" color="secondary" text-color="white" />
					</q-item-section>
					<q-item-section>
						<q-item-label>Vacation</q-item-label>
						<q-item-label caption>February 22, 2016</q-item-label>
					</q-item-section>
					<q-item-section side>
						<q-icon name="info" color="amber" />
					</q-item-section>
				</q-item>
			</q-list>
		</q-btn-dropdown>
	</div>
</template>
