/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      mobile: '373px',
      laptop: '980px',
    },

    extend: {
      colors: {
        form: '#151515',
      },
    },
  },
  plugins: [],
}
