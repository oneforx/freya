const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./src/lib/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./src/lib/*.{js,ts,jsx,tsx}",
    join(__dirname, 'src/lib/**/**/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'src/lib/**/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'src/lib/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'src/lib/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'src/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        teal: colors.teal,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
