/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            white: "#FCFCFC",
            black: "#1A1A1A"
        },
        fontFamily: {
            principal: ["Poppins", "sans-serif"]
        }
    },
    plugins: [],
};
