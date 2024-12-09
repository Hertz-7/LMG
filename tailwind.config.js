/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkred: '#b31217',
        lightred: '#d01318'
      },
      backgroundImage: {
        'gradient-redblack': 'linear-gradient(to right, #b31217, #d01318)',
        'gradient-to-b': 'linear-gradient(to bottom, #000000, #ffffff)',
        
        
      }
    }
  },
  plugins: [],
}