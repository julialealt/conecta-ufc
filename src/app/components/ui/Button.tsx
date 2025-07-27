import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 duration-400",
  {
    variants: {
      variant: {
        primary: "bg-violet-500 text-violet-50 hover:bg-violet-600",
        outline_white: "border border-zinc-100 bg-transparent text-zinc-100 hover:bg-zinc-100/10",
        outline_violet: "border border-violet-500 bg-transparent text-violet-500 hover:bg-violet-500/10",
        ghost: "border border-zinc-600 bg-black text-zinc-400 hover:bg-violet-600 hover:text-violet-50",
        text: "bg-transparent text-violet-50 hover:bg-zinc-800 hover:text-zinc-50",
        danger: "border border-red-600 text-red-600 hover:bg-red-600 hover:text-zinc-50",
        link: "bg-transparent text-violet-500 hover:text-violet-700",
        icon: "p-1 bg-transparent text-violet-500 hover:bg-violet-500/10 focus-visible:ring-2 focus-visible:ring-violet-400",
        filled_icon: "bg-violet text-white hover:bg-violet-600 rounded-xl",
        under_review: "border border-zinc-600 bg-black text-zinc-400 cursor-default",
        rejected: "border border-red-600 bg-black text-red-600 cursor-default",
        recruited: "border border-black text-black bg-gradient-to-r from-pink-400 to-violet-500 cursor-default",
      },
      size: {
        default: "px-4 py-2.5 gap-2",
        icon: "p-2.5",
        small: "p-2 text-xs font-normal",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  Icon?: LucideIcon;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, Icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && <Icon className="h-4 w-4" />}
        {size !== "icon" && children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
