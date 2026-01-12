import { defineConfig } from "tsup";

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
  external: ["react", "react-dom", "@untitledui/react", "tailwindcss"],
  treeshake: true,
});
