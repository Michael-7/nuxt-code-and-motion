<template>
	<div>
		<span class="footer">
			<span>© 2023 Code And Motion</span>
			<span class="hide-mob">-</span>
			<a href="mailto:codeandmotion@gmail.com" class="cnm-link">codeandmotion@gmail.com</a>
			<span class="hide-mob">-</span>
			<NuxtLink to="/about/" class="cnm-link">about</NuxtLink>
		</span>
	</div>
</template>

<style scoped lang="less">
	.footer {
		display: flex;
		justify-content: center;
		gap: @spacing-1;
		padding: @spacing-1 0;

		@media @mobile {
			font-size: 14px;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>
