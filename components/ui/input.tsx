import * as React from "react"
import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `
        flex h-12 w-full min-w-0
        rounded-[3px]
        border border-zinc-800
        bg-[#0b0b0b]
        px-4 py-2
        text-[14px] text-white
        placeholder:text-zinc-600
        shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]
        outline-none
        transition-all duration-300
        file:border-0
        file:bg-transparent
        file:text-sm
        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-50

        hover:border-zinc-700

        focus:border-[#DC2626]
        focus:bg-[#0e0e0e]
        focus:shadow-[0_0_0_1px_rgba(220,38,38,0.12),inset_0_1px_0_rgba(255,255,255,0.025)]

        aria-invalid:border-red-600
        `,
        className,
      )}
      {...props}
    />
  )
}

export { Input }