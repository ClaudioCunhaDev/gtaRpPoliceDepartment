/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    fontSize: {
      "4xl": "2rem",
      "3xl": "1.75rem",
      "2xl": "1.538rem",
      xl: "1rem",
      lg: "0.938rem",
      md: "0.881rem",
      sm: "0.75rem",
      xs: "0.681rem",
      "2xs": "0.648rem",
      "3xs": "0.625rem",
      "4xs": "0.568rem",
      "5xs": "0.511rem",
    },
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
