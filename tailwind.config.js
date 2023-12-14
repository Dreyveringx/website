/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255,134,7)",
        secondary: "rgb(238, 255, 0)",
        texlight: "rgba(255, 255, 255)",
        bgPrimary: "#000",
      },
    },
  },
  plugins: [],
};
