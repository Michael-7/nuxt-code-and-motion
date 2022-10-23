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
	css: ['~/assets/styles/global.less'],
	vite: {
		css: {
			preprocessorOptions: {
				less: {
					additionalData: '@import "~/assets/styles/variables.less";'
				}
			}
		}
	}
})
