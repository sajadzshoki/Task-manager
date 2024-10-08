/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    {
      relative: true,
      transform: (content) => content.replace(/taos:/g, ""),
      files: ["./src/*.{html,js}"],
    },
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        dashboard: "repeat(auto-fit, minmax(300px, 1fr))",
        "notes-list": "repeat(3, minmax(230px, 1fr))",
        tasks: "repeat(auto-fit, minmax(230px, 1fr))",
      },
      colors: {
        blue: {
          1: "#31507d",
          2: "#253c5e",
        },
      },
    },
  },
  plugins: [require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
