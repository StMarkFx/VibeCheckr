/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}', // Updated path
      './src/app/globals.css', // Added globals.css
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }