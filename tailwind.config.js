/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/src/images/hero-background.svg')",
      },
      colors: {
        darkBlue: "#000830",
      },
      height: {
        projectHeight: "38vh",
      },
      boxShadow: {
        primary: " 0px 4px 8px rgba(88, 88, 88, 0.25)",
        secondary: "4px 4px 8px rgba(88, 88, 88, 0.25)",
      },
      transitionDuration: {
        5000: "5000ms",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
