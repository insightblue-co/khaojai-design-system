import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "Khaojai Design System",
  brandUrl: "/",
  
  // UI
  appBg: "#f8f9fc",
  appContentBg: "#ffffff",
  appBorderColor: "#d5d9eb",
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"Fira Code", monospace',

  // Text colors
  textColor: "#181d27",
  textInverseColor: "#ffffff",
  textMutedColor: "#717680",

  // Toolbar default and active colors
  barTextColor: "#717680",
  barSelectedColor: "#1574c7",
  barBg: "#ffffff",

  // Brand colors
  colorPrimary: "#1574c7",
  colorSecondary: "#1574c7",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#d5d7da",
  inputTextColor: "#181d27",
  inputBorderRadius: 6,
});

addons.setConfig({
  theme,
});
