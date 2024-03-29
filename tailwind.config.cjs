/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            white: "#FCFCFC",
            black: "#1A1A1A",
            pinkWhite: '#FEE1E4',
            pinkCta: '#DD5491',
            pinkLogo: '#F598AF',
            lighterGrey: "#CBCBCB",
            lightGrey: "#CBCBCB",
            darkGrey: "#595959",
            darkerGrey: "#404040",
            transparent: "transparent",
        },
        fontFamily: {
            principal: ["Poppins", "sans-serif"]
        }
    },
    plugins: [],
};
