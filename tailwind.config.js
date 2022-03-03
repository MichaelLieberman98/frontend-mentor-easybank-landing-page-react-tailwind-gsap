// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const colors = require('tailwindcss/colors')

module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      backgroundImage: {
        'next-gen-background-desktop': "url('/src/images/bg-intro-desktop.svg')",
        'next-gen-background-mobile': "url('/src/images/bg-intro-mobile.svg')",
      },
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
        // '2/3': '66.666667%'
      },
    },
    screens: {
      // 'sm': '375',
      // 'xl': '1440'
      'sm': { 'max': '599px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '600px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '800px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '1000px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1200px' },
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {},
  plugins: [],
};