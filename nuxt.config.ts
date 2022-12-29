export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  build: {
		transpile: ['primevue']
	},
  buildModules: ['@nuxtjs/google-fonts'],
  i18n: {
    strategy: 'no_prefix',
    langDir: 'locales',
    baseUrl: 'http://locahost',
    defaultLocale: 'pt',
    lazy: true,
    locales: [
      { code: 'pt', iso: 'pt-BR', file: 'pt-br.json', dir: 'auto' },
      { code: 'en', iso: 'en-US', file: 'pt-br.json', dir: 'auto' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
    vueI18n: {
      legacy: true,
    },
  },
  css: [
    'primevue/resources/themes/mdc-dark-indigo/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    '~/assets/styles/main.scss'
  ],
  googleFonts: {
    prefetch: true,
    preload: true,
    families: {
      Roboto: true
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *;'
        }
      }
    }
  }
})
