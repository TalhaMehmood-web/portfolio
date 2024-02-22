/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "1250px": "1250px",
      "988px": "988px",
      "630px": "630px"
    }
  },
  plugins: [],
}