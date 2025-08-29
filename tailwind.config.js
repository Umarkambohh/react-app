const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        emerald: "#4CD964", // ✅ now added alongside default palette
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '0rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1500px',
    },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".container-fluid": {
          width: "100%",
          paddingRight: theme("spacing.5"),
          paddingLeft: theme("spacing.5"),
          marginRight: "auto",
          marginLeft: "auto",
        },
      });
    },
  ],
};
