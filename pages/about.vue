<template>
	<div class="about">
		<Head>
			<Title>About - Code and Motion</Title>
			<Meta name="description" content="Hey, I’m Michael A front-end developer and digital designer from the Netherlands." />
		</Head>
		<div class="about__content">
			<div class="about__header">
				<div>
					<div class="about__head-img">
						<img src="~/assets/img/about/michael-square.jpeg" alt="Code and Motion CEO">
					</div>
				</div>
				<div>
					<h1 class="about__title">Hey, I’m Michael</h1>
					<p class="hide-mob">
						A front-end developer and digital designer from the Netherlands.
						I like to fool around in After Effects, Illustrator and Premier.
					</p>
				</div>
			</div>
			<p class="show-mob">
				A front-end developer and digital designer from the Netherlands.
				I like to fool around in After Effects, Illustrator and Premier.
			</p>
			<p>
				Because of the lack of nice tutorials out there I wanted to make some good resources to help people that are into design get into code.
				Coding is really not that difficult once you learn the basics.
				Even with basic knowledge you can do a lot of things to upgrade your workflow
				and speed up those tasks that are brain numbingly boring so you can focus on the <span class="about__egg">fun stuff</span>.
			</p>
			<p class="mb-4">
				Coding can be fun and creative too, especially when you combine it with creative software like After Effects.
				Hopefully I can help some designers get into code, maybe you will even begin to like the challenges that come with programming.
			</p>
			<a href="https://www.youtube.com/c/codeandmotion" target="_blank" class="about__link">
				<span class="icon icon--mail"></span>
				<span class="cnm-link about__link-text">codeandmotion@gmail.com</span>
			</a>
			<a href="https://www.youtube.com/c/codeandmotion" target="_blank" class="about__link">
				<span class="icon icon--youtube"></span>
				<span class="cnm-link about__link-text">www.youtube.com/c/codeandmotion</span>
			</a>
		</div>
	</div>
</template>

<style scoped lang="less">
	.about {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 85vh;

		@media @mobile {
			height: 100%;
			margin-bottom: @block-spacing-2;
		}

		&__content {
			max-width: 700px;
			padding: @spacing-4;
			margin-top: @block-spacing-5;
			box-sizing: border-box;
		}

		&__header {
			display: flex;
			flex-direction: row;
			gap: @spacing-3;
		}

		&__title {
			margin-bottom: @spacing-3;
		}

		&__head-img {
			position: relative;
			width: 115px;
			height: 115px;
			border-radius: 4px;
			box-shadow: fade(@primary-blue, 60%) -6px -6px 1px, fade(@primary-blue, 30%) -10px -10px 1px, fade(@primary-blue, 15%) -15px -15px 1px, fade(@primary-blue, 5%) -20px -20px 1px;

			img {
				position: relative;
				width: 100%;
				z-index: 1;
				border-radius: 4px;
			}

			&:after {
				content: '';
				position: absolute;
				top: -2px;
				bottom: -3px;
				left: -2px;
				right: -2px;
				background: @primary-grad-angled;
				z-index: 0;
				border-radius: 5px;
			}
		}

		&__link {
			display: flex;
			gap: @spacing-2;
			align-items: center;
			margin-bottom: @spacing-1;
			transition: all .5s ease-out;

			@media @mobile {
				flex-direction: column;
				gap: 0;
				margin-top: @spacing-4;
			}

			&:hover {
				span {
					text-shadow: 0 0 3px @primary-blue inset, 0 0 30px @primary-blue;
					color: @primary-blue;
					filter: drop-shadow(0 0 5px #44eff2fb);
				}

				.icon {
					background-color: @primary-blue;
					box-shadow: 0 0 30px @primary-blue;
					text-shadow: 0 0 3px @primary-blue inset, 0 0 30px @primary-blue;
				}
			}

			&-text {
				.regular-text();
			}
		}
	}

	.icon {
		&--mail {
			.icon('email', 30px, @primary-green);
		}

		&--youtube {
			.icon('youtube', 30px, @primary-green);
		}
	}
</style>
