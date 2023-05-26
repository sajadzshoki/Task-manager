/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        
        'dashboard': 'repeat(auto-fit, minmax(300px, 1fr))',
        'notes-list': 'repeat(auto-fit, minmax(230px, 1fr))'
        },
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
