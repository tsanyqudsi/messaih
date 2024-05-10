/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora Variable', 'sans-serif'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}