/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamiy : {
        geist : [ 'Geist']
      },
    },
  },
  plugins: [
    require('tailwindcss-motion')
  ],
};

