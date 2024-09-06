// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable devtools
  devtools: {
    enabled: true,
  },

  // Global CSS
  css: ['@/assets/css/tailwind.css'],

  // Build Configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-09-06',
})