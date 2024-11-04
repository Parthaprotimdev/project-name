/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Personal screen size
      screens: {
        min80: "80rem",
      },
    },
  },
  plugins: [require("daisyui")],

  // Config daisyUI For light theme only
  daisyui: {
    themes: ["light"],
  },
};
