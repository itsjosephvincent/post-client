// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '@/plugins/vue-notification.ts'
  ],
  runtimeConfig: {
    public: {
      apiBaseURL: process.env.API_BASE_URL,
      appName: process.env.APP_NAME,
      redirectUri: process.env.REDIRECT_URI
    }
  },
})
