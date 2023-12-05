// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
  extends: '@nuxt-themes/typography', 
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    'nuxt-content-assets',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],

  colorMode: {
    classSuffix: ''
  },

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
  
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',    
  },
})