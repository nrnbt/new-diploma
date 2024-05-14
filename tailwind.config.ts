import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    },
    colors: {
      primary: {
        100: "#c0d4cc",
        200: "#b9cfc6",
        300: "#a4c0b5",
        400: "#8eb2a4",
        500: "#79a393",
        600: "#659481",
        700: "#567f6f",
        800: "#486a5c",
        900: "#39544a"
      },
      dark: {
        100: "#94a2ad",
        200: "#7f909d",
        300: "#6c7f8d",
        400: "#5c6d79",
        500: "#4b5a65",
        600: "#3d4850",
        700: "#2e363c",
        800: "#1e2428",
        900: "#171b1e"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
export default config;
