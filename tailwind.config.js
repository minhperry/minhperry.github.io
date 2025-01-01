/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Source Sance 3", "sans-serif"]
      }
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1742px',
      }
    }
  },
  plugins: [],
}