const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Include Next UI theme styles
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui(),
    require('tailwind-nord'),
  ],
}