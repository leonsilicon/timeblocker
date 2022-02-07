<script setup lang="ts">
import { reactive } from 'vue';

class Test {
	monke: string;

	constructor(monke: string) {
		this.monke = monke;
	}

	setMonke(monke: string) {
		this.monke = monke;
	}

	getMonke() {
		return this.monke;
	}
}
</script>

<template>
	<div>{{ t.getMonke() }}</div>
	<button @click="t.setMonke('test')">Click</button>
</template>
