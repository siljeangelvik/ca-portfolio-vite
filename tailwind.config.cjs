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

            primary: '#011c15',
            secondary: '#003916',
            tertiary: '#4eb235',
            //tertiary: '#65e93d',
            inferior: '#003916',



            bPrimary: '#222222',
            bSecondary: '#1f1f1f',
            bTertiary: '#171717',
            bInferior: '#121212',

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