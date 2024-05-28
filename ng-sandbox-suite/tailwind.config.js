/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: {
            light: '#2a2829',
            dark: '#f8f9fa',
          },
          secondary: {
            light: '#f8f9fa',
            dark: '#242f3e',
          },
        },
        background: {
          light: '#cdd6dd',
          dark: '#4a4548',
        },
        calendar: {
          background: {
            light: '#cdd6dd',
            dark: '#4a4548',
          },
          today:'#F8719D',
          text: {
            light: '#2a2829',
            dark: '#f8f9fa',
          },

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

