<template>
	<div class="home">
		<Head>
			<Title>Code and Motion - Development for Web Animation and Motion Design</Title>
			<Meta name="description" content="Learn how to develop code for the Adobe products and bring animation to the web." />
		</Head>
		<img class="home__img" src="~/assets/svg/logo-grad-2.svg" alt="Code and Motion">
		<h1 class="home__header">Code and Motion</h1>
		<h2 class="home__paragraph"><span class="font-green-accent">Code</span> for motion design</h2>
		<h2 class="home__paragraph"><span class="font-blue-accent">Motion design</span> for code</h2>
		<NuxtLink class="top-nav__menu-item" to="/blog">
			<button class="home__btn primary-button primary-button--big">DISCOVER</button>
		</NuxtLink>
	</div>
</template>

<style scoped lang="less">
	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 85vh;

		&__img {
			width: 225px;
			margin-bottom: @spacing-6;
		}

		&__header {
			.bold();
			text-transform: uppercase;
			position: relative;
			margin-bottom: @spacing-5;

			&:after {
				content: '';
				position: absolute;
				bottom: -@spacing-1;
				left: @spacing-1;
				right: @spacing-1;
				height: 2px;
				background: @primary-grad;
			}
		}

		&__paragraph {
			margin: 0 0 @spacing-1;
			text-transform: uppercase;
		}

		&__btn {
			margin-top: @spacing-4;
		}
	}
</style>
