/** @type { import('tailwindcss').Config } */
// const dT = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js{,x},ts{,x},vue,svelte,astro}'],
  // important: '#app',
  darkMode: 'media', // or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
      // '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        // sans: ['name', ...dT.fontFamily.sans]
      }
    }
  }
}
