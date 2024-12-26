/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Matches all HTML and JS files in the `src` directory and subdirectories
    "./components/**/*.{html,js}" // Matches all HTML and JS files in the `components` directory and subdirectories
  ],
  theme: {
    extend: {
      fontFamily: {
        customBB:
          ['"BadaBoom BB"', 'sans-serif'],
        customInter:
          ["Inter", 'serif'],
      },
      colors:{
        customRed: '#FF1E00',
        customBlack: '#000000',
        customYellow: '#FFCC00'
      },
      fontSize:{
        customSize: '90px',
        customSize1: '70px'
      },
    }, // For extending Tailwind's default theme
  },
  plugins: [], // Add Tailwind CSS plugins here if needed
};
