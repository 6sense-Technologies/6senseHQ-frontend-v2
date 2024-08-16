import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hero: "#F8F4EC",
        primary: "#17494D",
        secondary: "#BA8D46",
      },
      fontFamily: {
        "plex-sans": ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
