import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base — pill shape enforced globally via [data-slot="button"] in globals.css
  [
    "group/button inline-flex shrink-0 items-center justify-center",
    "rounded-full border border-transparent font-bold whitespace-nowrap",
    "transition-all duration-[250ms] ease-[cubic-bezier(0.2,0,0,1)] outline-none select-none",
    "focus-visible:ring-3 focus-visible:ring-[var(--cb-border-focus)]/50 focus-visible:border-[var(--cb-border-focus)]",
    "active:not-aria-[haspopup]:translate-y-px active:not-aria-[haspopup]:scale-[0.98]",
    "disabled:pointer-events-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        /**
         * Primary — neon lime CTA.
         * rest:     bg lime-500   #CBFF00   brand-500 text
         * hover:    brand gradient (Light Blue → Lime)
         * disabled: neutral-700 bg, neutral-500 text
         */
        default: [
          "bg-[var(--cb-interactive-brand-default)] text-[var(--cb-interactive-brand-text)]",
          "hover:[background:var(--cb-gradient-brand)]",
          "aria-expanded:[background:var(--cb-gradient-brand)]",
          "disabled:bg-[var(--cb-interactive-brand-disabled)] disabled:text-[var(--cb-text-disabled)] disabled:opacity-100",
        ].join(" "),

        /**
         * Secondary — electric light blue.
         * rest:     accent-500  brand-500 text
         * hover:    gradient + brand-500 text
         * disabled: neutral bg, disabled text
         */
        secondary: [
          "bg-[var(--cb-interactive-secondary-default)] text-[var(--cb-interactive-secondary-text)]",
          "hover:[background:var(--cb-gradient-brand)] hover:text-[var(--cb-color-brand-500)]",
          "aria-expanded:[background:var(--cb-gradient-brand)] aria-expanded:text-[var(--cb-color-brand-500)]",
          "disabled:bg-[var(--cb-interactive-secondary-disabled)] disabled:text-[var(--cb-text-disabled)] disabled:opacity-100",
        ].join(" "),

        /**
         * Outline — dark brand bg, white border.
         * Used for Yes / No option buttons on dark step forms.
         */
        outline: [
          "border-[var(--cb-border-default)] bg-[var(--cb-color-brand-500)] text-white",
          "hover:border-[var(--cb-border-strong)] hover:bg-[var(--cb-color-brand-700)]",
          "aria-expanded:bg-[var(--cb-color-brand-700)] aria-expanded:border-[var(--cb-border-strong)]",
          "disabled:opacity-40",
        ].join(" "),

        /**
         * Ghost — transparent bg, border, ghost text.
         * rest:     transparent, border-default, ghost-text color
         * hover:    ghost-hover bg
         * On dark surface: white text + white/15 border (via semantic tokens).
         */
        ghost: [
          "bg-transparent text-[var(--cb-interactive-ghost-text)]",
          "border border-[var(--cb-border-default)]",
          "hover:bg-[var(--cb-interactive-ghost-hover)]",
          "aria-expanded:bg-[var(--cb-interactive-ghost-hover)]",
          "disabled:opacity-40",
        ].join(" "),

        /**
         * Destructive — danger red.
         */
        destructive: [
          "bg-[var(--cb-interactive-danger-default)] text-[var(--cb-interactive-danger-text)]",
          "hover:bg-[var(--cb-interactive-danger-hover)]",
          "focus-visible:ring-[var(--cb-color-danger-500)]/50 focus-visible:border-[var(--cb-color-danger-500)]",
          "disabled:opacity-40",
        ].join(" "),

        /**
         * Link — no bg, accent text, underline on hover.
         */
        link: [
          "text-[var(--cb-color-accent-500)] underline-offset-4",
          "hover:underline hover:text-[var(--cb-color-accent-400)]",
          "disabled:opacity-40",
        ].join(" "),
      },

      size: {
        /** xs — icon-adjacent actions, badges */
        xs: "h-7 gap-1 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",

        /** sm — Back button, secondary nav */
        sm: "min-h-[var(--cb-button-sm-min-height)] gap-1.5 px-[var(--cb-button-sm-padding-x)] text-[length:var(--cb-button-sm-font-size)]",

        /** default — Nav CTA, standard actions */
        default: "min-h-[var(--cb-button-md-min-height)] gap-1.5 px-[var(--cb-button-md-padding-x)] text-[length:var(--cb-button-md-font-size)]",

        /** lg — Hero CTA, step Next button */
        lg: "min-h-[var(--cb-button-lg-min-height)] gap-2 px-[var(--cb-button-lg-padding-x)] text-[length:var(--cb-button-lg-font-size)]",

        /** icon — Square icon-only */
        icon: "size-11",

        /** icon-sm — Compact icon-only */
        "icon-sm": "size-9",

        /** icon-lg — Large icon-only */
        "icon-lg": "size-14",
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
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
