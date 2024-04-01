/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "1200px" : "1200px",
        "800px" : "800px",
        "400px" : "400px",
      }
    },
  },
  plugins: [],
}