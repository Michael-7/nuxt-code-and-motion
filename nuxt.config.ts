// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content'
	],
	content: {
		highlight: {
			theme: "github-dark",
		}
	},
	css: ['~/assets/styles/global.less', '@fontsource/cooper-hewitt/400.css', '@fontsource/cooper-hewitt/500.css', '@fontsource/cooper-hewitt/600.css'],
	vite: {
		css: {
			preprocessorOptions: {
				less: {
					additionalData: '@import "~/assets/styles/variables.less";',
				}
			}
		}
	},
	app: {
		head: {
			title: 'Code and Motion - Development for Web Animation and Motion Design',
			script: [
				{
					children: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'UA-175161482-1');
					`
				},
				{
					src: 'https://www.googletagmanager.com/gtag/js?id=UA-175161482-1',
					async: '',
				}
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
		},
	}
});
