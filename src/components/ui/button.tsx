import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base — pill shape is enforced globally via [data-slot="button"] in globals.css
  [
    "group/button inline-flex shrink-0 items-center justify-center",
    "rounded-full border border-transparent font-bold whitespace-nowrap",
    "transition-all duration-150 ease-out outline-none select-none",
    "focus-visible:ring-3 focus-visible:ring-cb-cyan-100/50 focus-visible:border-cb-cyan-100",
    "active:not-aria-[haspopup]:translate-y-px active:not-aria-[haspopup]:scale-[0.98]",
    "disabled:pointer-events-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        /**
         * Primary — neon lime CTA.
         * Used for: "Get an Offer Now", "Accept Your Offer!", "Next →"
         *
         * rest     bg-cb-lime-100   #C8FF00   navy text
         * hover    bg-cb-lime-90    #CDFF1A
         * active   bg-cb-lime-80    #D3FF33   + translate-y-px
         * disabled bg-cb-lime-30   #EEFFB3   40% opacity
         */
        default: [
          "bg-cb-lime-100 text-cb-navy-100",
          "hover:bg-cb-lime-90",
          "aria-expanded:bg-cb-lime-90",
          "disabled:bg-cb-lime-30 disabled:text-cb-navy-40 disabled:opacity-100",
        ].join(" "),

        /**
         * Secondary — electric cyan.
         * Used for: "← Back" in step navigation.
         *
         * rest     bg-cb-cyan-100   #00C8FF   navy text
         * hover    bg-cb-cyan-90    #1ADCFF
         * active   bg-cb-cyan-80    #33E0FF   + translate-y-px
         * disabled bg-cb-cyan-20    #CCF8FF   muted
         */
        secondary: [
          "bg-cb-cyan-100 text-cb-navy-100",
          "hover:bg-cb-cyan-90",
          "aria-expanded:bg-cb-cyan-90",
          "disabled:bg-cb-cyan-20 disabled:text-cb-navy-40 disabled:opacity-100",
        ].join(" "),

        /**
         * Outline — dark navy bg, white border.
         * Used for: Yes / No option buttons on step forms.
         *
         * rest     bg-cb-navy-100  white border  white text
         * hover    bg-cb-navy-80   brighter border
         * active   bg-cb-navy-90   + translate-y-px
         * disabled opacity-40
         */
        outline: [
          "border-white/30 bg-cb-navy-100 text-white",
          "hover:border-white/70 hover:bg-cb-navy-80",
          "aria-expanded:bg-cb-navy-80 aria-expanded:border-white/70",
          "disabled:opacity-40",
        ].join(" "),

        /**
         * Ghost — invisible bg, white text.
         * Used for: "Have your VIN number?", nav text links.
         *
         * rest     transparent  white text
         * hover    white/10 overlay
         * disabled opacity-40
         */
        ghost: [
          "text-white",
          "hover:bg-white/10 hover:text-white",
          "aria-expanded:bg-white/10",
          "disabled:opacity-40",
        ].join(" "),

        /**
         * Destructive — red bg, white text.
         * Used for: error actions, delete confirmations.
         *
         * rest     bg-destructive  white text
         * hover    bg-destructive/85
         * disabled bg-destructive/40
         */
        destructive: [
          "bg-destructive text-white",
          "hover:bg-destructive/85",
          "focus-visible:ring-destructive/50 focus-visible:border-destructive",
          "disabled:bg-destructive/40 disabled:opacity-100",
        ].join(" "),

        /**
         * Link — no bg, cyan text, underline on hover.
         * Used for: inline text links ("smarter", "Have your VIN number?").
         *
         * rest     transparent  cb-cyan-100 text
         * hover    underline
         */
        link: [
          "text-cb-cyan-100 underline-offset-4",
          "hover:underline hover:text-cb-cyan-90",
          "disabled:opacity-40",
        ].join(" "),
      },

      size: {
        /**
         * xs — icon-adjacent actions, badges
         * h-7  px-3  text-xs
         */
        xs: "h-7 gap-1 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",

        /**
         * sm — Back button, secondary nav actions
         * h-9  px-5  text-sm
         */
        sm: "h-9 gap-1.5 px-5 text-sm",

        /**
         * default — Nav CTA ("Get an offer"), standard actions
         * h-11  px-6  text-sm
         */
        default: "h-11 gap-1.5 px-6 text-sm",

        /**
         * lg — Hero CTA ("Get an Offer Now"), step Next button
         * h-14  px-8  text-base
         */
        lg: "h-14 gap-2 px-8 text-base",

        /**
         * icon — Square icon-only, stays rounded via globals override
         * size-11
         */
        icon: "size-11",

        /**
         * icon-sm — Compact icon-only
         * size-9
         */
        "icon-sm": "size-9",

        /**
         * icon-lg — Large icon-only
         * size-14
         */
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
