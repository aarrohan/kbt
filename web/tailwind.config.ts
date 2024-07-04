import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--helvetica-now-text-font)"],
      serif: ["var(--ogg-font)"],
    },
    extend: {
      colors: {
        primary: "rgb(var(--primary-color-rgb) / <alpha-value>)",
        secondary: "rgb(var(--secondary-color-rgb) / <alpha-value>)",
        white: "rgb(var(--white-color-rgb) / <alpha-value>)",
        dark: "rgb(var(--dark-color-rgb) / <alpha-value>)",
        "foreground-1": "rgb(var(--foreground-1-color-rgb) / <alpha-value>)",
        "foreground-2": "rgb(var(--foreground-2-color-rgb) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
