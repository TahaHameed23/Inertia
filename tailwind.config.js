/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#91f2c3",

          "secondary": "#01c422",

          "accent": "#bafc6a",

          "neutral": "#242632",

          "base-100": "#faf9fb",

          "info": "#54b1e3",

          "success": "#22e2d2",

          "warning": "#f8ac3a",

          "error": "#fc6492",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}