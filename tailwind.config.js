/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./build/*.html'],
    theme : {
        extend: {
            colors: {
                'orange-1' : '#E3AC1C',
                'background-white' : 'rgb(243 244 246)',
            },
        },
    },
    plugins: [] ,
}