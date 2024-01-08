/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
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
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
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
