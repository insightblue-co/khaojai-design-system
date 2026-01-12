// =============================================================================
// Khaojai Design System
// =============================================================================
// A design system wrapping Untitled UI with custom color tokens from Figma.

// -----------------------------------------------------------------------------
// Color Tokens
// -----------------------------------------------------------------------------
// Individual color exports for direct usage
export * from "./tokens/colors";

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
// Re-exported components from Untitled UI + custom overrides
export * from "./components";

// -----------------------------------------------------------------------------
// Tailwind Preset
// -----------------------------------------------------------------------------
// Re-export the preset for convenience (also available via /tailwind-preset)
export { khaojaiPreset, colors as tailwindColors } from "./tailwind/preset";
