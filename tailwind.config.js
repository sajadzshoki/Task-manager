/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#31507d",
          2: "#253c5e",
        },
      },
    },
  },
  plugins: [],
};
