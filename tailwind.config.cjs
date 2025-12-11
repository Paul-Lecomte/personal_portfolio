/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#4f46e5',
          soft: '#818cf8',
        },
      },
    },
  },
  plugins: [],
};

