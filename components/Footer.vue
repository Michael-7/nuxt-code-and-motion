<template>
	<div>
		<span class="footer">
			© 2022 Code And Motion 
			<span>-</span>
			<a href="mailto:codeandmotion@gmail.com" class="cnm-link">codeandmotion@gmail.com</a>
			<span>-</span>
			<NuxtLink to="/about" class="cnm-link">about</NuxtLink>
		</span>
	</div>
</template>

<style scoped lang="less">
	.footer {
		display: flex;
		justify-content: center;
		gap: @spacing-1;
		padding: @spacing-1 0;
	}
</style>
