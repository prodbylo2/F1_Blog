import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['var(--font-roboto)', 'Roboto', 'system-ui', 'sans-serif'],
        'nano': ['Nano', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
