import * as React from "react"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-auto w-full min-w-0 rounded-[8px] border border-input-border bg-input px-2.5 py-3 text-base leading-5 text-foreground outline-none",
        "transition-[box-shadow,border-color] duration-150 ease-out",
        "placeholder:text-muted-foreground",
        "ring-1 ring-transparent",
        "focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive",
        "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Input }
