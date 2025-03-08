/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        special: ['"Special Elite"', 'sans-serif'],
        brutalist: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'custom-green': '#b8ff9f',
        'neo-yellow': '#FFE600',
        'neo-pink': '#FF90E8',
        'neo-blue': '#00F0FF',
        'neo-orange': '#FF5C00',
        'neo-purple': '#9747FF',
      },
      boxShadow: {
        'brutal': '5px 5px 0px 0px #000',
        'brutal-lg': '8px 8px 0px 0px #000',
        'brutal-xl': '12px 12px 0px 0px #000',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
