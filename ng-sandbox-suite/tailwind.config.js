/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        text: {
          primary: {
            light: '#242f3e',
            dark: '#f8f9fa',
          },
          secondary: {
            light: '#f8f9fa',
            dark: '#242f3e',
          },
        },
        background: {
          light: '#f8f9fa',
          dark: '#242f3e',
        },
        button: {
          background: {
            primary: {
              light: '#252525',
              dark: '#242f3e',
            },
            secondary: {
              light: '#f8f9fa',
              dark: '#f8f9fa',
            },
          },
        },
      },
    },
  },
  plugins: [],
}

