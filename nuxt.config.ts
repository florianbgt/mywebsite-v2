// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: '@nuxt-themes/typography',
  devtools: { enabled: true },
  modules: [
    'nuxt-content-assets', // make sure to add before content!
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-icon',
  ],

  content: {    
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        light: 'github-light'
      },
      preload: ['bash', 'python', 'javascript', 'typescript', 'vue', 'tsx', 'jsx']
    },
  },

  colorMode: {
    classSuffix: ''
  },
})
