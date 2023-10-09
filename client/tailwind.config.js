/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
  theme: {
    colors: {
        'red': '#9f303b',
        'teal': '#00a6bc',
        'pink': '#ffe0e0',
        'sky': '#d1eeff',
      },
    fontFamily: {
        sans: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    extend: {},
  },
  plugins: [],
}

