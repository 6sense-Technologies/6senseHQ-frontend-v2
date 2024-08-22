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
        textSecondary: "#4E4E4E",
        blackSecondary: "#222222",
        highlight: "#BD8D46",
        lightGray: "#F8F9F9",
        footerBg: "#F8F3EC",
        actionColor: "#FF924E",
        dimmed: "#737373",
        dark: "#252B42",
        lightGray2: "#6F6F6F",
      },
      fontFamily: {
        "plex-sans": ["IBM Plex Sans", "sans-serif"],
        "plex-sans-thai": ["IBM Plex Sans Thai", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
