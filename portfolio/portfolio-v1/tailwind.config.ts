import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          h1: "var(--color-light-h1)",
          h2: "var(--color-light-h2)",
          h3: "var(--color-light-h3)",
        },
        dark: {
          h1: "var(--color-dark-h1)",
          h2: "var(--color-dark-h2)",
        },
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
