import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["10px", "12px"]
      },
      colors: {
        primary: {
          DEFAULT: "#1DB954"
        },
        secondary: {
          DEFAULT: "#FFFFFF"
        }
      }
    }
  },
  plugins: []
};
export default config;
