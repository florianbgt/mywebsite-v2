// @ts-nocheck

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: '@nuxt-themes/typography',

  target: 'static',
  
  app: {
    head: {
      title: "Florian Bigot",
      meta: [
        {name: 'description', content: 'Florian Bigot, software engineer'},
      ],
      htmlAttrs: {
        lang: 'en',
      }
    },
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxt/content',
  ],

  buildModules: [
    '@nuxt/image',
  ],

  tailwindcss: {
    config: {
      theme: {
        colors: {
          'light': '#F9F7F3',
          'dark': '#343330',
          'primary': '#F9A620',
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        },
      },
      plugins: [],
    }
  },

  content: {}
})
