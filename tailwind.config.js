/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "mobile": "430px",
      "laptop": "980px"
    },

    extend: {
      colors: {
        "form": "#151515"
      }
    },
  },
  plugins: [],
}