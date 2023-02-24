<template>
	<div class="blog-post">
		<Head>
			<Title>{{article.title}} - Code and Motion</Title>
			<Meta name="description" :content="article.description" />
		</Head>
		<div class="container blog-post-header">
			<div class="content">
				<div class="blog-post-header__details">
					<h1>{{article.title}}</h1>
					<div>
						<div class="blog-post-header__tags">
							<span v-for="tag in article.tags">{{tag}}</span>
						</div>
						<div class="blog-post-header__author">
							<img src="~/assets/img/about/michael-square.jpeg" alt="Code and Motion CEO">
							<span>by <span class="bold">Michael Heemskerk</span> <br/> On {{convertDate(article.date)}} </span>
						</div>
					</div>
				</div>
				<div class="blog-post-header__overlay" v-if="article.video">
					<iframe width="560" height="315" color="white" :src="'https://www.youtube-nocookie.com/embed/' + article.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<img v-else class="blog-post-header__overlay blog-post-header__overlay--img" :src="'../img/' + article.img" :alt="article.title"/>
			</div>
		</div>
		<div class="container blog-post-body">
			<div class="content">
				<article>
					<ContentDoc />
				</article>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { path } = useRoute();

	onMounted(() => {
		console.log(removeTrailingSlashFromRoute(path));
		console.log(article);
	})

	const {data: article} = await useAsyncData(`getarticle-${removeTrailingSlashFromRoute(path)}`, () => {
		return queryContent('/').where({_path: removeTrailingSlashFromRoute(path)}).findOne();
	});

	function convertDate(inputDate: string): string {
		let date = new Date(inputDate);
		return date.toLocaleString('en-GB', {dateStyle: 'medium'});
	}

	function removeTrailingSlashFromRoute(route: string): string {
		if (route.slice(-1) === '/') {
			return route.substring(0, route.length - 1);
		}
		return route;
	}
</script>

<style lang="less">
	.blog-post {
		&-header {
			padding-top: @block-spacing-2;

			.content {
				position: relative;
				display: flex;
				flex-direction: row;
				align-items: center;
				max-width: 1000px;

				@media @tablet {
					flex-direction: column;
				}
			}

			&__details {
				display: flex;
				flex-direction: column;
				position: relative;
				background-color: @background-light;
				border-radius: 10px;
				min-height: 450px;
				padding: @block-spacing-2 @block-spacing-5 @block-spacing-2 @block-spacing-3;
				box-sizing: border-box;
				justify-content: space-between;
				margin-right: -@block-spacing-4;

				@media @tablet {
					margin-right: 0;
					min-height: 350px;
				}

				&:before {
					content: '';
					position: absolute;
					top: -2px;
					bottom: -2px;
					left: -2px;
					right: -2px;
					background: linear-gradient(142deg, #51E570 5.89%, #44EEF2 94.12%);
					z-index: -1;
					border-radius: 10px;
				}

				&:after {
					content: '';
					position: absolute;
					top: 0px;
					bottom: 0px;
					left: 0px;
					right: 0px;
					border-radius: 10px;
					z-index: -2;
					box-shadow: fade(@primary-green, 10%) -15px -7px 0px, fade(@primary-green, 5%) -25px -12px 0px, fade(@primary-green, 3%) -35px -17px 0px, fade(@primary-green, 2%) -45px -22px 0px;
				}
			}

			&__tags {
				padding: @spacing-2 0;
				display: flex;
				gap: @spacing-1;

				span {
					.cnm-tag();
				}
			}

			&__author {
				display: flex;
				align-items: center;
				gap: @spacing-4;
				padding: @spacing-2 0;

				img {
					width: 80px;
					border-radius: 10px;
				}
			}

			&__overlay {
				position: relative;

				@media @tablet {
					width: 90%;
					height: auto;
				}

				@media @mobile {
					width: 100%;
					height: auto;
				}

				iframe, &--img {
					border-radius: 15px;
					box-shadow: -1px 0px 20px fade(@black, 50%);

					@media @tablet {
						width: 100%;
					}
				}

				&--img {
					width: 560px;
					height: 315px;
				}
			}
		}

		&-body {
			.content {
				max-width: 775px;
			}

			pre {
				overflow-x: auto;
				overflow-y: hidden;
			}

			code {
				span {
					font-family: 'Roboto Mono', monospace;
				}
			}
		}

		p a {
			.cnm-link();
		}

		h2 {
			margin-top: @block-spacing-3;
		}

		hr {
			border: none;
			height: 2px;
			background: @background-accent;
			margin: @block-spacing-2 0;
		}
	}
</style>
