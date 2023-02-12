const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["--font-sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        tiny: "0.813rem",
      },
      boxShadow: {
        input: `
            0px 1px 0px -1px var(--tw-shadow-color),
            0px 1px 2px -1px var(--tw-shadow-color),
            0px 2px 4px -2px var(--tw-shadow-color),
            0px 3px 6px -3px var(--tw-shadow-color)
        `,
        highlight: " inset 0px 0px 0px 1px var(--tw-shadow-color), inset 0px 1px 0px var(--tw-shadow-color)",
      },
      colors: {
        brand: {
          50: "hsl(222, 2%, 98%)",
          100: "hsl(222, 3%, 96%)",
          200: "hsl(222, 10%, 91%)",
          300: "hsl(222, 10%, 60%)",
          500: "hsl(222, 8%, 47%)",
          700: "hsl(222, 17%, 27%)",
          800: "hsl(222, 15%, 11%)",
          900: "hsl(222, 26%, 6%)",
        },
      },
    },
  },
  plugins: [],
};
