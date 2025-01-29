/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "1rem",
        xl: "4rem",
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.container-fluid': {
          width: '100%',
          paddingRight: theme('spacing.5'), // Adjust spacing as needed
          paddingLeft: theme('spacing.5'), // Adjust spacing as needed
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
    },
  ],
}

