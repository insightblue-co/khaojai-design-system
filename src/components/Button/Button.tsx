import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant style */
  variant?: "primary" | "secondary" | "tertiary" | "destructive" | "ghost";
  /** Button size */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** Full width button */
  fullWidth?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-500 shadow-sm",
  secondary:
    "bg-white text-grayLight-700 border border-grayLight-300 hover:bg-grayLight-50 focus:ring-brand-500 shadow-sm",
  tertiary:
    "bg-transparent text-brand-500 hover:bg-brand-50 focus:ring-brand-500",
  destructive:
    "bg-error-500 text-white hover:bg-error-600 focus:ring-error-500 shadow-sm",
  ghost:
    "bg-transparent text-grayLight-600 hover:bg-grayLight-100 focus:ring-grayLight-500",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-2 text-sm gap-1.5",
  md: "px-3.5 py-2.5 text-sm gap-1.5",
  lg: "px-4 py-2.5 text-base gap-2",
  xl: "px-4.5 py-3 text-base gap-2",
  "2xl": "px-5.5 py-4 text-lg gap-2.5",
};

/**
 * Button component with Khaojai design system styling.
 * 
 * This is a standalone implementation that follows Untitled UI patterns.
 * When @untitledui/react is installed, you can replace this with a wrapper
 * around their Button component.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const classes = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
