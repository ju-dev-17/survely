/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        text: '#161816',
        background: '#f7f8f7',
        primary: '#bfc5c1',
        secondary: '#dce3df',
        accent: '#73686f',
      },
    },
  },
  plugins: [],
}

