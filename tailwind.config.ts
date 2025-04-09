import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['var(--font-roboto)', 'Roboto', 'system-ui', 'sans-serif'],
        'nano': ['Nano', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light mode colors (blue and white)
        primary: {
          DEFAULT: "#2563eb", // blue-600
          foreground: "#ffffff",
        },
        // Dark mode colors (teal and dark grey)
        dark: {
          primary: "#14b8a6", // teal-500
          background: "#1e293b", // slate-800
          foreground: "#f1f5f9", // slate-100
          card: "#334155", // slate-700
        },
      },
      animation: {
        "race": "race 5s linear infinite",
        "fadeIn": "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        race: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(100vw + 300px))" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
