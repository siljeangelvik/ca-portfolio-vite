/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.{html,js}",
        "./src/*.{html,js}",
        "./src/**/*.{html,js}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        colors: {
            silver: '#c5c6d0',
            white: '#f0f8ff',
            dark: '#1e293b',
            primary: '#222222',
            secondary: '#1f1f1f',
            tertiary: '#171717',
            inferior: '#121212',

            greenPrimary: '#134e4a',
            greenSecondary: '#115e59',
            greenTertiary: '#0f766e',
            greenInferior: '#0d9488',

        },
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
}