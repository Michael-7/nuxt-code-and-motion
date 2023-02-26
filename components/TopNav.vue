<template>
	<div class="top-nav">
		<div class="top-nav__section">
			<NuxtLink class="top-nav__logo-link hide-mob" to="/">
				<span class="top-nav__logo">Code and Motion</span>
			</NuxtLink>
		</div>
		<div class="top-nav__menu">
			<NuxtLink class="top-nav__menu-item" to="/about/">About</NuxtLink>
			<NuxtLink class="top-nav__menu-item" to="/blog/"><button class="primary-button primary-button--big">Blog</button></NuxtLink>
			<!-- <NuxtLink class="top-nav__menu-item" to="/about">Tools</NuxtLink> -->
		</div>
	</div>
</template>

<style scoped lang="less">
	.top-nav {
		background-color: @background;
		display: flex;
		justify-content: space-between;
		padding: @spacing-4 @spacing-8;

		@media @mobile {
			padding: @spacing-2;
		}

		&__logo {
			font-size: 32px;
			text-transform: uppercase;
			position: relative;
			margin: 0;

			&:after {
				content: '';
				position: absolute;
				bottom: -4px;
				left: 0;
				right: 0;
				height: 2px;
				background: @primary-grad;
			}
		}

		&__menu {
			display: flex;
			align-items: center;
			gap: @spacing-5;

			&-item {
				.large-text();
				.bold();
				text-transform: uppercase;

				.primary-button {
					text-transform: uppercase;
				}
			}
		}
	}
</style>
