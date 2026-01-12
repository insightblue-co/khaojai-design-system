import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "../tailwind/preset";

const meta: Meta = {
  title: "Design Tokens/Colors",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

// Helper component to display a color swatch
const ColorSwatch = ({
  value,
  shade,
}: {
  value: string;
  shade?: string;
}) => {
  const isLight = isLightColor(value);
  return (
    <div className="flex flex-col">
      <div
        className="h-16 w-full rounded-lg shadow-sm border border-gray-200 flex items-end justify-between p-2"
        style={{ backgroundColor: value }}
      >
        <span
          className={`text-xs font-mono ${isLight ? "text-gray-800" : "text-white"}`}
        >
          {shade}
        </span>
        <span
          className={`text-xs font-mono ${isLight ? "text-gray-600" : "text-white/80"}`}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

// Helper to determine if a color is light
function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}

// Helper component to display a color scale
const ColorScale = ({
  name,
  shades,
}: {
  name: string;
  shades: Record<string, string>;
}) => {
  const sortedShades = Object.entries(shades).sort((a, b) => {
    const numA = parseInt(a[0], 10);
    const numB = parseInt(b[0], 10);
    if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
    return a[0].localeCompare(b[0]);
  });

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3 capitalize">{name}</h3>
      <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
        {sortedShades.map(([shade, value]) => (
          <ColorSwatch key={shade} shade={shade} value={value} />
        ))}
      </div>
    </div>
  );
};

// Brand Colors Story
export const BrandColors: Story = {
  render: () => (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Brand Colors</h1>
        <p className="text-gray-600 mb-8">
          Primary brand colors used throughout the design system.
        </p>
        <ColorScale name="brand" shades={colors.brand} />
      </div>
    </div>
  ),
};

// Semantic Colors Story
export const SemanticColors: Story = {
  render: () => (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Semantic Colors</h1>
        <p className="text-gray-600 mb-8">
          Colors that convey meaning: success, warning, error states.
        </p>
        <ColorScale name="success" shades={colors.success} />
        <ColorScale name="warning" shades={colors.warning} />
        <ColorScale name="error" shades={colors.error} />
      </div>
    </div>
  ),
};

// Gray Scales Story
export const GrayScales: Story = {
  render: () => (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Gray Scales</h1>
        <p className="text-gray-600 mb-8">
          Neutral colors for text, backgrounds, and borders.
        </p>
        <ColorScale name="Gray (Light Mode)" shades={colors.grayLight} />
        <ColorScale name="Gray (Dark Mode)" shades={colors.grayDark} />
        {colors.graymodern && <ColorScale name="Gray Modern" shades={colors.graymodern} />}
        {colors.grayneutral && <ColorScale name="Gray Neutral" shades={colors.grayneutral} />}
        {colors.graycool && <ColorScale name="Gray Cool" shades={colors.graycool} />}
        {colors.graywarm && <ColorScale name="Gray Warm" shades={colors.graywarm} />}
        {colors.grayiron && <ColorScale name="Gray Iron" shades={colors.grayiron} />}
        {colors.graytrue && <ColorScale name="Gray True" shades={colors.graytrue} />}
        {colors.grayblue && <ColorScale name="Gray Blue" shades={colors.grayblue} />}
      </div>
    </div>
  ),
};

// Extended Colors Story
export const ExtendedColors: Story = {
  render: () => (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Extended Colors</h1>
        <p className="text-gray-600 mb-8">
          Additional color palettes for various UI needs.
        </p>
        
        <h2 className="text-xl font-semibold mb-4 mt-8">Blues</h2>
        <ColorScale name="blue" shades={colors.blue} />
        {colors.bluelight && <ColorScale name="Blue Light" shades={colors.bluelight} />}
        {colors.bluedark && <ColorScale name="Blue Dark" shades={colors.bluedark} />}
        
        <h2 className="text-xl font-semibold mb-4 mt-8">Greens</h2>
        <ColorScale name="green" shades={colors.green} />
        {colors.greenlight && <ColorScale name="Green Light" shades={colors.greenlight} />}
        <ColorScale name="teal" shades={colors.teal} />
        {colors.moss && <ColorScale name="moss" shades={colors.moss} />}
        <ColorScale name="cyan" shades={colors.cyan} />
        
        <h2 className="text-xl font-semibold mb-4 mt-8">Purples & Pinks</h2>
        <ColorScale name="indigo" shades={colors.indigo} />
        <ColorScale name="violet" shades={colors.violet} />
        <ColorScale name="purple" shades={colors.purple} />
        <ColorScale name="fuchsia" shades={colors.fuchsia} />
        <ColorScale name="pink" shades={colors.pink} />
        <ColorScale name="rose" shades={colors.rose} />
        
        <h2 className="text-xl font-semibold mb-4 mt-8">Oranges & Yellows</h2>
        <ColorScale name="orange" shades={colors.orange} />
        {colors.orangedark && <ColorScale name="Orange Dark" shades={colors.orangedark} />}
        <ColorScale name="yellow" shades={colors.yellow} />
      </div>
    </div>
  ),
};

// Base Colors Story
export const BaseColors: Story = {
  render: () => (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Base Colors</h1>
        <p className="text-gray-600 mb-8">
          Fundamental black and white colors.
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <div className="flex flex-col">
            <div
              className="h-24 w-full rounded-lg shadow-sm border border-gray-200 flex items-end justify-between p-3"
              style={{ backgroundColor: colors.base.White }}
            >
              <span className="text-sm font-medium text-gray-800">White</span>
              <span className="text-xs font-mono text-gray-600">
                {colors.base.White}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className="h-24 w-full rounded-lg shadow-sm flex items-end justify-between p-3"
              style={{ backgroundColor: colors.base.Black }}
            >
              <span className="text-sm font-medium text-white">Black</span>
              <span className="text-xs font-mono text-white/80">
                {colors.base.Black}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// All Colors Overview
export const AllColors: Story = {
  render: () => (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Complete Color Palette</h1>
        <p className="text-gray-600 mb-8">
          All available colors in the Khaojai Design System.
        </p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Base</h2>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <ColorSwatch value={colors.base.White} shade="white" />
              <ColorSwatch value={colors.base.Black} shade="black" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Brand</h2>
            <ColorScale name="brand" shades={colors.brand} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Semantic</h2>
            <ColorScale name="success" shades={colors.success} />
            <ColorScale name="warning" shades={colors.warning} />
            <ColorScale name="error" shades={colors.error} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Grays</h2>
            <ColorScale name="Gray Light" shades={colors.grayLight} />
            <ColorScale name="Gray Dark" shades={colors.grayDark} />
          </section>
        </div>
      </div>
    </div>
  ),
};
