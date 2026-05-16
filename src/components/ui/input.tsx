import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        // Sizing from component tokens: min-h 56px, px 20px, py 12px
        "min-h-[var(--cb-input-min-height)] w-full min-w-0",
        "rounded-full border border-[var(--cb-color-neutral-200)]",
        // Inputs are always white with brand-500 text, regardless of surface
        "bg-white px-[var(--cb-input-padding-x)] py-[var(--cb-input-padding-y)]",
        "text-[var(--cb-color-brand-500)] text-[length:var(--cb-input-font-size)]",
        "transition-colors outline-none",
        "placeholder:text-[var(--cb-color-neutral-400)]",
        "hover:border-[var(--cb-color-neutral-400)]",
        "focus-visible:border-[var(--cb-color-accent-500)] focus-visible:ring-3 focus-visible:ring-[var(--cb-color-accent-500)]/20",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-[var(--cb-color-danger-500)] aria-invalid:ring-3 aria-invalid:ring-[var(--cb-color-danger-500)]/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
