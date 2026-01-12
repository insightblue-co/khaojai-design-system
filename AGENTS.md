# AI Agent Instructions for Khaojai Design System

This document provides context for AI assistants working on this codebase.

## Project Purpose

**khaojai-design-system** is an npm package that provides:
1. Color tokens exported from Figma as TypeScript constants
2. A Tailwind CSS preset for using brand colors
3. React components (wrapping/extending Untitled UI)
4. Storybook documentation

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Figma Design File                        │
│                           │                                 │
│                           ▼                                 │
│              figma/exported-styles.json                     │
│                           │                                 │
│                           ▼                                 │
│            scripts/generate-tokens.ts                       │
│                     │           │                           │
│                     ▼           ▼                           │
│     src/tokens/colors.ts    src/tailwind/preset.ts         │
│              │                      │                       │
│              └──────────┬───────────┘                       │
│                         ▼                                   │
│                  src/index.ts                               │
│                         │                                   │
│                         ▼                                   │
│                 dist/ (npm package)                         │
└─────────────────────────────────────────────────────────────┘
```

## Key Files to Know

| File | Purpose | Editable? |
|------|---------|-----------|
| `figma/exported-styles.json` | Source color data from Figma | Replace with new export |
| `scripts/generate-tokens.ts` | Transforms Figma JSON to TS | Yes |
| `src/tokens/colors.ts` | Generated TypeScript color constants | **NO - Auto-generated** |
| `src/tailwind/preset.ts` | Generated Tailwind config | **NO - Auto-generated** |
| `src/components/**` | React components | Yes |
| `src/index.ts` | Package entry point | Yes |
| `.storybook/*` | Storybook configuration | Yes |

## Color System

### Figma JSON Format
```json
{
  "Brand/500": "#1574c7",
  "Gray (light mode)/25": "#fdfdfd",
  "Error/500": "#f04438"
}
```

### Generated TypeScript
```typescript
export const Brand500 = "#1574c7" as const;
export const GrayLightMode25 = "#fdfdfd" as const;
```

### Generated Tailwind
```typescript
export const colors = {
  brand: { "500": "#1574c7", ... },
  grayLight: { "25": "#fdfdfd", ... },
  error: { "500": "#f04438", ... },
};
```

## Component Pattern

Every component should follow this structure:

```typescript
// src/components/Button/Button.tsx
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`... bg-brand-500 ...`}  // Use Tailwind with design tokens
        {...props}
      />
    );
  }
);
```

## Storybook Stories Pattern

```typescript
// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Button", variant: "primary" },
};
```

## Common Tasks

### Task: Add a new component
1. Create `src/components/NewComponent/NewComponent.tsx`
2. Create `src/components/NewComponent/NewComponent.stories.tsx`
3. Create `src/components/NewComponent/index.ts`
4. Add export to `src/components/index.ts`

### Task: Update colors from Figma
1. Replace `figma/exported-styles.json` with new export
2. Run `pnpm generate`
3. Check `src/tokens/colors.ts` and `src/tailwind/preset.ts` for changes

### Task: Add a new color category
1. Update `figma/exported-styles.json`
2. May need to update `scripts/generate-tokens.ts` if format differs
3. Run `pnpm generate`

## Tailwind Color Classes Available

After applying the preset, these classes work:

- `bg-brand-{25-950}` - Brand colors
- `bg-error-{25-950}` - Error/destructive
- `bg-warning-{25-950}` - Warning
- `bg-success-{25-950}` - Success
- `bg-grayLight-{25-950}` - Light mode grays
- `bg-grayDark-{25-950}` - Dark mode grays
- Plus: `blue`, `green`, `teal`, `cyan`, `indigo`, `violet`, `purple`, `pink`, `rose`, `orange`, `yellow`, etc.

## Testing Changes

1. Run `pnpm storybook` to see components
2. Navigate to "Design Tokens/Colors" for color palette
3. Navigate to "Components/*" for component variants

## Package Exports

```typescript
// Main entry
import { Button, Brand500 } from "khaojai-design-system";

// Colors subpath
import { Brand500, Error500 } from "khaojai-design-system/colors";

// Tailwind preset subpath
import preset from "khaojai-design-system/tailwind-preset";
```

## Dependencies

**Bundled Dependencies** (included with package):
- `@untitledui/icons` - Untitled UI icons
- `react-aria-components` - Accessible component primitives
- `tailwind-merge` - Tailwind class merging utility

**Peer Dependencies** (consumer must install):
- `react` ^18.0.0
- `react-dom` ^18.0.0
- `tailwindcss` ^3.4.0
- `tailwindcss-animate` (optional)
- `tailwindcss-react-aria-components` (optional)

**Note**: Untitled UI components are generated via CLI (`npx untitledui@latest init`), not installed as npm package. Only icons and utilities are npm packages.

## Critical: Working with Generated Files

**⚠️ Property names in generated files come from Figma JSON and have UNPREDICTABLE CASING.**

Before referencing any property from `src/tokens/colors.ts` or `src/tailwind/preset.ts`:
1. **ALWAYS read the actual generated file first** to check exact property names
2. **DO NOT assume casing** - Figma exports may have `White`/`Black` (PascalCase), `grayLight` (camelCase), or `graymodern` (lowercase)
3. **Run `pnpm typecheck`** after any changes to catch property name mismatches

Example - WRONG assumption:
```typescript
// ❌ Assumed lowercase
colors.base.white  // ERROR if generated file has "White"
```

Example - CORRECT approach:
```typescript
// ✅ First read src/tailwind/preset.ts to see actual keys:
//    base: { "Black": "...", "White": "..." }
colors.base.White  // Correct!
```

## Don'ts

- ❌ Don't edit generated files (`src/tokens/colors.ts`, `src/tailwind/preset.ts`)
- ❌ Don't assume property name casing - always verify against generated files
- ❌ Don't use inline styles for colors (use Tailwind classes)
- ❌ Don't skip creating Storybook stories for components
- ❌ Don't add heavy dependencies (keep bundle small)
- ❌ Don't skip `pnpm typecheck` before committing

## Quick Reference Commands

```bash
pnpm install          # Install dependencies
pnpm generate         # Generate tokens from Figma JSON
pnpm storybook        # Start Storybook (port 6006)
pnpm build            # Build package
pnpm build-storybook  # Build static docs
pnpm typecheck        # Check TypeScript types
```
