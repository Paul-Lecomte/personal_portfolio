/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', '"IBM Plex Sans"', 'ui-sans-serif', 'sans-serif'],
        display: ['"Space Grotesk"', '"IBM Plex Sans"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f7fbff',
          100: '#e8f2ff',
          200: '#c8e0ff',
          300: '#9dc5ff',
          400: '#6ea7f8',
          500: '#3f87ea',
          600: '#2e6fcc',
          700: '#2357a3',
          800: '#1f477f',
          900: '#1b385f',
        },
        accent: {
          50: '#fff8ec',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc36f',
          400: '#ffaa38',
          500: '#f38d14',
          600: '#d66f0d',
          700: '#ae530f',
          800: '#8d4314',
          900: '#733813',
        },
        ink: {
          950: '#070b14',
          900: '#0c1322',
          800: '#121e33',
        },
        success: {
          400: '#34d399',
          500: '#10b981',
        },
      },
      boxShadow: {
        'brand-sm': '0 8px 18px rgba(63, 135, 234, 0.2)',
        brand: '0 18px 34px rgba(63, 135, 234, 0.28)',
        accent: '0 16px 34px rgba(243, 141, 20, 0.26)',
        surface: '0 14px 28px rgba(6, 11, 25, 0.4)',
        'xl-soft': '0 20px 60px rgba(0,0,0,0.25)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};
