/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainBg': 'url("/src/assets/mcy-background.png")',
      },
      scale: {
        '250': '2.50',
      },
    },
  },
  plugins: [],
}
