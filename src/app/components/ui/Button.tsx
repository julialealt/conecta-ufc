import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-violet-500 text-violet-50 hover:bg-violet-600",
        outline_white:
          "border border-zinc-100 bg-transparent text-zinc-100 hover:bg-zinc-100/10",
        outline_violet:
          "border border-violet-500 bg-transparent text-violet-500 hover:bg-violet-500/10",
        ghost:
          "border border-zinc-500 bg-black text-zinc-400 hover:bg-violet-600 hover:text-violet-50",
        text:
          "bg-transparent text-violet-50 hover:bg-zinc-800 hover:text-zinc-50",
      },
      size: {
        default: "h-10 px-4 py-2.5 gap-2", // 10px = py-2.5
        icon: "h-10 w-10",
        small: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  Icon?: LucideIcon
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
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }