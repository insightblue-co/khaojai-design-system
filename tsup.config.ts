import { defineConfig } from "tsup";
import path from "path";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "tokens/colors": "src/tokens/colors.ts",
    "tailwind/preset": "src/tailwind/preset.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "tailwindcss",
    "@untitledui/icons",
    "react-aria-components",
    "tailwind-merge",
    "tailwindcss-animate",
    "tailwindcss-react-aria-components",
  ],
  treeshake: true,
  esbuildOptions(options) {
    options.alias = {
      "@": path.resolve(__dirname, "src"),
    };
  },
});
