import type { Config } from "tailwindcss";
import { khaojaiPreset } from "./src/tailwind/preset";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [khaojaiPreset as Config],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
