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
  },
  plugins: [],
}