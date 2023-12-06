// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: '@nuxt-themes/typography',
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

  image: {
    dir: '.nuxt/content-assets/public',
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Florian Bigot',
      meta: [
        { hid: 'description', name: 'description', content: 'Personal website of Florian Bigot. A software engineer that can help you solving your problems.' },
        { hid: 'og:title', name: 'og:title', content: 'Florian Bigot' },
        { hid: 'og:description', name: 'og:description', content: 'Personal website of Florian Bigot. A software engineer that can help you solving your problems.' },
        { hid: 'og:image', name: 'og:image', content: 'https://florianbigot.com/florian.png' },
        { hid: 'og:image:alt', name: 'og:image:alt', content: 'Florian Bigot' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
})
