/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg : "#2a3447",
        darkOverlay : "#0000005e",
      }
    },
  },
  plugins: [],
}

