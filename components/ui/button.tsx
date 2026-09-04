import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `
  inline-flex items-center justify-center
  gap-2 whitespace-nowrap
  rounded-[3px]
  text-sm font-medium
  transition-all duration-200
  disabled:pointer-events-none
  disabled:opacity-50
  outline-none

  [&_svg]:pointer-events-none
  [&_svg:not([class*='size-'])]:size-4
  [&_svg]:shrink-0

  focus-visible:border-[#DC2626]
  focus-visible:ring-1
  focus-visible:ring-[#DC2626]/40
  `,
  {
    variants: {
      variant: {
        default:
          `
          bg-[#DC2626]
          text-white
          shadow-[0_0_0_rgba(220,38,38,0)]
          hover:bg-[#ef2f2f]
          hover:shadow-[0_0_24px_rgba(220,38,38,0.18)]
          active:scale-[0.98]
          `,

        destructive:
          `
          bg-red-600
          text-white
          hover:bg-red-500
          `,

        outline:
          `
          border border-zinc-700
          bg-transparent
          text-white
          hover:border-zinc-400
          hover:bg-white/[0.025]
          `,

        secondary:
          `
          bg-zinc-900
          text-white
          border border-zinc-800
          hover:bg-zinc-800
          hover:border-zinc-700
          `,

        ghost:
          `
          text-zinc-400
          hover:bg-white/[0.04]
          hover:text-white
          `,

        link:
          `
          text-[#DC2626]
          underline-offset-4
          hover:underline
          `,
      },

      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-[3px] px-3 text-xs",
        lg: "h-12 rounded-[3px] px-6",
        icon: "size-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }