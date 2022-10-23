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
					<p>
						A front-end developer and digital designer from the Netherlands.
						I like to fool around in After Effects, Illustrator and Premier.
					</p>
				</div>
			</div>
			<p>
				Because of the lack of nice tutorials out there I wanted to make some good resources to help people that are into design get into code.
				Coding is really not that difficult once you learn the basics.
				Even with basic knowledge you can do a lot of things to upgrade your workflow
				and speed up those tasks that are brain numbingly boring so you can focus on the <span class="about__egg">fun stuff</span><img class="about__bg-img" src="~/assets/img/about/easter-egg.png" alt="Michael"/>.
			</p>
			<p class="mb-4">
				Coding can be fun and creative too, especially when you combine it with creative software like After Effects.
				Hopefully I can help some designers get into code, maybe you will even begin to like the challenges that come with programming.
			</p>
			<a href="https://www.youtube.com/c/codeandmotion" target="_blank" class="about__link">
				<span class="icon icon--mail"></span>
				<span class="cnm-link">codeandmotion@gmail.com</span>
			</a>
			<a href="https://www.youtube.com/c/codeandmotion" target="_blank" class="about__link">
				<span class="icon icon--youtube"></span>
				<span class="cnm-link">www.youtube.com/c/codeandmotion</span>
			</a>
		</div>
	</div>
</template>

<style scoped lang="less">
	.about {
		display: flex;
		justify-content: center;
		height: 85vh;

		&__content {
			width: 700px;
			margin-top: @block-spacing-5;
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

		&__bg-img {
			transform: scaleX(-1);
			height: 100vh;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			opacity: 0;
			transition: opacity 2s ease .3s;
		}

		&__egg:hover + img {
			opacity: .35;
		}

		&__link {
			display: flex;
			gap: @spacing-2;
			align-items: center;
			margin-bottom: @spacing-1;
			transition: all .5s ease-out;
			
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
