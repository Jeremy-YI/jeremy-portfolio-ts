/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F5F7FA',
          default: '#161D27',
        },
        dark: {
          background: '#161D27',
          default: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
