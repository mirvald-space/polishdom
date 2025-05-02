import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[18px] text-sm font-semibold uppercase leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(187,74,61,1)] text-white hover:bg-[rgba(187,74,61,0.9)]",
        outline:
          "border border-[rgba(59,56,40,0.1)] bg-white text-[rgba(59,56,40,1)] hover:bg-gray-50",
        white: "bg-white text-[rgba(59,56,40,1)] hover:bg-gray-50",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-1.5",
        lg: "px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
