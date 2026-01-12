# Khaojai Design System

A React design system with custom color tokens exported from Figma, built to work with [Untitled UI](https://www.untitledui.com/) components.

## Features

- 🎨 **Color Tokens** - Typed color constants generated from Figma
- 🎯 **Tailwind Preset** - Ready-to-use Tailwind CSS configuration
- 📚 **Storybook** - Visual documentation for all components
- 📦 **Tree-shakeable** - Import only what you need
- 🔷 **TypeScript** - Full type safety

## Installation

```bash
# Install the package
pnpm add khaojai-design-system

# Install peer dependencies
pnpm add @untitledui/react react react-dom tailwindcss
```

## Setup

### 1. Configure Tailwind CSS

Add the Khaojai preset to your `tailwind.config.ts`:

```typescript
import khaojaiPreset from "khaojai-design-system/tailwind-preset";

export default {
  presets: [khaojaiPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/khaojai-design-system/**/*.js",
    "./node_modules/@untitledui/react/**/*.js",
  ],
};
```

### 2. Import Styles

Make sure your main CSS file includes Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

### Using Components

```tsx
import { Button } from "khaojai-design-system";

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

### Using Color Tokens

```tsx
// Import individual tokens
import { Brand500, Error500, GrayLightMode100 } from "khaojai-design-system";

// Or import all colors
import { colors } from "khaojai-design-system/colors";

// Use in your components
const style = { backgroundColor: Brand500 };
```

### Using Tailwind Classes

With the preset configured, you can use your brand colors directly in Tailwind classes:

```tsx
// Brand colors
<div className="bg-brand-500 text-white">Primary brand color</div>

// Semantic colors
<div className="bg-success-500">Success state</div>
<div className="bg-error-500">Error state</div>
<div className="bg-warning-500">Warning state</div>

// Gray scales
<div className="bg-grayLight-100 text-grayLight-900">Light mode</div>
<div className="bg-grayDark-900 text-grayDark-100">Dark mode</div>
```

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Getting Started

```bash
# Install dependencies
pnpm install

# Generate tokens from Figma JSON
pnpm generate

# Start Storybook
pnpm storybook

# Build the package
pnpm build
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm generate` | Generate color tokens from Figma JSON |
| `pnpm storybook` | Start Storybook dev server on port 6006 |
| `pnpm build-storybook` | Build static Storybook site |
| `pnpm build` | Build the package for distribution |
| `pnpm typecheck` | Run TypeScript type checking |

### Updating Color Tokens

When design tokens change in Figma:

1. Export the new styles JSON from Figma
2. Replace `figma/exported-styles.json` with the new file
3. Run `pnpm generate` to regenerate tokens
4. Commit the changes

## Package Exports

```typescript
// Main entry - colors + components
import { Brand500, Button } from "khaojai-design-system";

// Colors only
import { Brand500, Error500 } from "khaojai-design-system/colors";

// Tailwind preset
import khaojaiPreset from "khaojai-design-system/tailwind-preset";
```

## Color Token Reference

### Brand Colors
- `brand-25` through `brand-950` - Primary brand color scale

### Semantic Colors
- `success-25` through `success-950` - Success states
- `warning-25` through `warning-950` - Warning states  
- `error-25` through `error-950` - Error states

### Gray Scales
- `grayLight` - Light mode grays
- `grayDark` - Dark mode grays
- `grayModern`, `grayNeutral`, `grayCool`, `grayWarm`, `grayIron`, `grayTrue`, `grayBlue`

### Extended Colors
- `blue`, `blueLight`, `blueDark`
- `green`, `greenLight`, `teal`, `cyan`, `moss`
- `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`
- `orange`, `orangeDark`, `yellow`

## Project Structure

```
khaojai-design-system/
├── .github/workflows/    # GitHub Actions (CI/CD)
├── .storybook/           # Storybook configuration
├── figma/                # Figma export files
│   └── exported-styles.json
├── scripts/              
│   └── generate-tokens.ts  # Token generator
├── src/
│   ├── components/       # React components
│   │   └── Button/
│   ├── tailwind/         # Tailwind preset
│   │   └── preset.ts
│   ├── tokens/           # Generated color tokens
│   │   └── colors.ts
│   ├── styles.css        # Base styles
│   └── index.ts          # Main entry
├── package.json
├── tailwind.config.ts
└── tsup.config.ts
```

## CI/CD

This project uses GitHub Actions for continuous integration and deployment:

- **CI**: Runs on every push/PR - builds and type-checks
- **Release**: Publishes to npm when pushing to `main`
- **Storybook**: Auto-deploys to GitHub Pages

### Publishing a New Version

1. **Via GitHub Actions** (Recommended):
   - Go to Actions → Version Bump → Run workflow
   - Choose `patch`, `minor`, or `major`

2. **Locally**:
   ```bash
   npm version patch  # or minor/major
   git push && git push --tags
   ```

See [PUBLISHING.md](./PUBLISHING.md) for detailed setup instructions.

## License

MIT
