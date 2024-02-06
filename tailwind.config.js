/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './nuxt.config.ts',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        'light-primary': '#6750A4',
        'light-on-primary': '#FFFFFF',
        'dark-primary': '#D0BCFF',
        'dark-on-primary': '#381E72',

        'light-secondary': '#625B71',
        'light-on-secondary': '#FFFFFF',
        'dark-secondary': '#CCC2DC',
        'dark-on-secondary': '#332D41',

        'light-background': '#FFFBFE',
        'light-on-background': '#1C1B1F',
        'dark-background': '#1C1B1F',
        'dark-on-background': '#E6E1E5',

        'light-link': '#1769B5',
        'dark-link': '#4A9CE8'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  }
}
