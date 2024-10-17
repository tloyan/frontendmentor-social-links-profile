import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#141414",
          800: "#1F1F1F",
          700: "#333333"
        },
        green: "#C4F82A",
        white: "#FFFFFF"
      }
    },
  },
  plugins: [],
};
export default config;
