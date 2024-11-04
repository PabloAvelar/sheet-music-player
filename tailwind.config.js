// tailwind.config.js
/** @type {import('tailwindcss').Config} */

// Importing nord color scheme
const { nord } = require('tailwind-nord');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nord-polar-1': '#2E3440',
        'nord-polar-2': '#3B4252',
        'nord-polar-3': '#434C5E',
        'nord-polar-4': '#4C566A',
        
        // Snow Storm
        'nord-snow-1': '#D8DEE9',
        'nord-snow-2': '#E5E9F0',
        'nord-snow-3': '#ECEFF4',
        
        // Frost
        'nord-frost-1': '#8FBCBB',
        'nord-frost-2': '#88C0D0',
        'nord-frost-3': '#81A1C1',
        'nord-frost-4': '#5E81AC',
        
        // Aurora
        'nord-aurora-1': '#BF616A',
        'nord-aurora-2': '#D08770',
        'nord-aurora-3': '#EBCB8B',
        'nord-aurora-4': '#A3BE8C',
        'nord-aurora-5': '#B48EAD',
      } 
    },
  },
  variants: {},
  plugins: [
    require('tailwind-nord')
  ],
}