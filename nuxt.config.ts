// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// css: ['~/assets/css/main.css'],
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/icon', '@nuxt/ui'],
	css: ['~/assets/styles/global.sass'],
	vite: {
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: '@import "~/assets/styles/_mixins.sass"',
				},
			},
		},
		/*esbuild: {
			drop: process.env.NODE_ENV === 'development' ? ['console'] : [],
		},*/
	},
})
