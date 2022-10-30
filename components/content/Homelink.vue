<script setup lang="ts">
defineProps({
	to: {
		type: String,
		default: ''
	},
	text: {
		type: String,
		default: ''
	},
})
</script>

<template>
	<NuxtLink :to="to">
		{{text}}
	</NuxtLink>
</template>
