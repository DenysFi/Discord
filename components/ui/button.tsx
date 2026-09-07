import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-semibold leading-6 whitespace-nowrap transition-[background-color,color,box-shadow,transform] outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        outline:
          "border-border bg-transparent text-foreground hover:bg-secondary-hover aria-expanded:bg-secondary-hover",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover aria-expanded:bg-secondary-hover",
        ghost:
          "text-foreground hover:bg-secondary-hover aria-expanded:bg-secondary-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive-hover focus-visible:ring-destructive",
        danger:
          "bg-secondary text-destructive-foreground-muted hover:bg-secondary-hover focus-visible:ring-destructive",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // Main: content 24 + padding 4/12 → 32×auto
        default: "h-8 gap-2 px-3",
        // Smaller: content 24 + padding 3/11 → 30×auto
        sm: "h-[30px] gap-1.5 px-[11px]",
        // Larger: content 24 + padding 7/15 → 38×auto
        lg: "h-[38px] gap-2 px-[15px]",
        // Icon-only: 32×32, no padding
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
