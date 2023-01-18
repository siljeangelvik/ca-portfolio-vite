/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./src/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    colors: {
      white: '#fafafa',
      dark: '#1e293b',
      primary: '#134e4a',
      secondary: '#115e59',
      tertiary: '#0f766e',
      inferior: '#0d9488',

    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

