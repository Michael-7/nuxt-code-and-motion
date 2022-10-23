<template>
	<div class="container blog">
		<Head>
			<Title>Blog - Code and Motion</Title>
			<Meta name="description" content="Learn how to develop code for the Adobe products and bring animation to the web." />
		</Head>
		<div class="content">
			<div class="blog-header">
				<p class="blog-header__sub-title">Blog</p>
				<h1>
					Learn how to create <span class="font-blue-accent">plugins</span> and <span class="font-green-accent">scripts</span> 
					for adobe products, or bring <span class="font-blue-accent">motion design</span> to the <span class="font-green-accent">web</span>
				</h1>
			</div>
			<!-- <div class="blog-filters">
				<p class="blog-filters__sub-title">Search</p>
				<input type="text" />
				<p class="blog-filters__sub-title">Categories</p>
			</div> -->
			<div class="blog-posts">
				<div v-for="article in articles" :key="article.slug" class="post">
					<NuxtLink :to="'/blog/' + article.slug">
						<div class="post__img">
							<img :src="'/img/' + article.img" :alt="article.img">
							<div class="post__img-overlay">
								<p>{{article.description}}</p>
								<div class="post__img-overlay-tags">
									<span v-for="tag of article.tags">{{tag}}</span>
								</div>
							</div>
						</div>
						<h2 class="post__title">{{article.title}}</h2>
					</NuxtLink>
				</div>
			</div>	
		</div>
	</div>
</template>

<script setup>
	const {data: articles} = await useAsyncData('getarticles', () => {
		return queryContent('blog').find();
	})
</script>

<style scoped lang="less">
	.blog {
		&-header {
			margin-bottom: @block-spacing-4;

			&__sub-title {
				.large-text();
				.bold();
				color: @secondary-text;
				text-transform: uppercase;
			}
		}

		&-filters {
			margin-bottom: @block-spacing-2;

			&__sub-title {
				.regular-text();
				.bold();
				color: @secondary-text;
				text-transform: uppercase;
			}
		}

		&-posts {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: @spacing-6 @spacing-3;
		}

		.post {

			&:hover {
				.post__img {
					&-overlay {
						opacity: 1;
					}

					&:after {
						background: linear-gradient(179.58deg, #101727 0.33%, rgba(16, 23, 39, 0.75) 99.59%);
						backdrop-filter: blur(5px);
					}

					&:before {
						background: @primary-grad;
					}
				}

				.post__title {
					color: @primary-blue;
				}
			}

			&__img {
				position: relative;
				height: 216px;

				&-overlay {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					padding: @spacing-3;
					opacity: 0;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					z-index: 1;

					p {
						margin: 0;
					}

					span {
						.cnm-tag();
					}

					&-tags {
						display: flex;
						gap: @spacing-1;
					}
				}

				&:after {
					content: '';
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					border-radius: 4px;
					background-color: transparent;
					border: 1px solid @background-light;
				}

				&:before {
					content: '';
					position: absolute;
					height: 10px;
					bottom: -2px;
					left: 0;
					right: 0;
					border-radius: 4px;
					background: transparent;
				}
			}

			img {
				width: 100%;
				border-radius: 4px;
			}

			&__title {
				margin: @spacing-2 @spacing-1;
			}
		}
	}
</style>
