/** @type {import('tailwindcss').Config} */
const primaryBorderColor = "linear-gradient(to right, #009688, #3b82f6)";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primary: "linear-gradient(to right, #009688, #3b82f6)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        banner: "url('/s.png')",
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
        main: ["Nunito", "sans-serif"],
      },
      //colors
      backgroundColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        accent: "var(--text-accent)",
      },
      borderColor: {
        primary: primaryBorderColor,
      },

      textColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--text-accent)",
      },
    },
  },
  plugins: [],
};
