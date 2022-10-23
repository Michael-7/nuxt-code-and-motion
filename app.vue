<template>
	<NuxtLayout>
		<NuxtPage/>
	</NuxtLayout>
</template>

<script setup lang="ts">  
useHead({
	link: [
		{ 
			rel: 'preconnect', 
			href: 'https://fonts.googleapis.com'
		},
		{ 
			rel: 'preconnect', 
			href: 'https://fonts.gstatic.com',
			crossorigin: '' 
		},
		{ 
			rel: 'stylesheet', 
			href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
		}
	]
})
</script>
