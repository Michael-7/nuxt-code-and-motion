<template>
	<div class="container blog">
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
						<div>
							<img :src="'/assets/img/blog/' + article.img" alt="">
							<!-- <h2>{{article.title}}</h2>
							<p>{{article.slug}}</p>
							<p>{{article.description}}</p> -->
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
			gap: @spacing-6;
		}

		.post {

			img {
				width: 100%;
				border-radius: 10px;
			}

			&__title {
				margin: @spacing-1 @spacing-1;
			}
		}
	}
</style>
