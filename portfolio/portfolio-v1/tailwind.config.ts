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
        darkh1: "#424874",
        darkh2: "#9C90C5",
        lighth1: "#A6B1E1",
        lighth2: "#DCD6F7",
        lighth3: "#F4EEFF",
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
