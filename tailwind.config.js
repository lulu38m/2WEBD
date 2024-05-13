/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "bleu" : "#0047b2",
            },
            rotate: {
                '45': '-75deg',
            }
        },
    },
    plugins: [],
}