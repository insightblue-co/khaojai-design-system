import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../base/buttons/button";
import { Plus, ArrowRight } from "@untitledui/icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "link-gray", "link-color", "primary-destructive", "secondary-destructive", "tertiary-destructive", "link-destructive"],
      description: "Color variant of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the button",
    },
    isDisabled: {
      control: "boolean",
      description: "Disables the button",
    },
    isLoading: {
      control: "boolean",
      description: "Shows loading spinner",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default button
export const Default: Story = {
  args: {
    children: "Button",
    color: "primary",
    size: "sm",
  },
};

// Primary variants
export const Primary: Story = {
  args: {
    children: "Primary Button",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    color: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    color: "tertiary",
  },
};

export const LinkGray: Story = {
  args: {
    children: "Link Gray",
    color: "link-gray",
  },
};

export const LinkColor: Story = {
  args: {
    children: "Link Color",
    color: "link-color",
  },
};

// Destructive variants
export const PrimaryDestructive: Story = {
  args: {
    children: "Delete",
    color: "primary-destructive",
  },
};

export const SecondaryDestructive: Story = {
  args: {
    children: "Delete",
    color: "secondary-destructive",
  },
};

export const TertiaryDestructive: Story = {
  args: {
    children: "Delete",
    color: "tertiary-destructive",
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "Extra Large",
    size: "xl",
  },
};

// States
export const Loading: Story = {
  args: {
    children: "Loading...",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    isDisabled: true,
  },
};

// With Icons
export const WithLeadingIcon: Story = {
  args: {
    children: "Add Item",
    iconLeading: Plus,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: "Continue",
    iconTrailing: ArrowRight,
  },
};

export const IconOnly: Story = {
  args: {
    iconLeading: Plus,
  },
};

// All Variants Grid
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">Primary Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="tertiary">Tertiary</Button>
          <Button color="link-gray">Link Gray</Button>
          <Button color="link-color">Link Color</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">Destructive Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button color="primary-destructive">Primary</Button>
          <Button color="secondary-destructive">Secondary</Button>
          <Button color="tertiary-destructive">Tertiary</Button>
          <Button color="link-destructive">Link</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">XL</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button isDisabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Button iconLeading={Plus}>Leading</Button>
          <Button iconTrailing={ArrowRight}>Trailing</Button>
          <Button iconLeading={Plus} iconTrailing={ArrowRight}>Both</Button>
          <Button iconLeading={Plus} />
        </div>
      </div>
    </div>
  ),
};
