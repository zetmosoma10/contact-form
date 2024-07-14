/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#2a4144",
        mediumGrey: "#86a2a5",
        green: "#0c7d69",
        lightGreen: "#e0f1e8",
        redError: "#d94747",
      },
    },
  },
  plugins: [],
};
