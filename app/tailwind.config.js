/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        japanese: ['"Japanese 3017"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
