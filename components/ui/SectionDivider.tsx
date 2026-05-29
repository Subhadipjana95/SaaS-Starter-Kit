import React from "react"
import { cn } from "@/lib/utils"

type SectionDividerProps = {
  className?: string
}

const SectionDivider = ({ className }: SectionDividerProps) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2 border-y bg-background",
        className
      )}
    >
      <div className="relative mx-auto h-full w-full max-w-6xl border-x border-dashed">
        <div className="absolute -top-2 left-0 h-5 w-5 -translate-x-1/2 rounded-sm border border-border/70 bg-background" />
        <div className="absolute bottom-0 left-0 h-5 w-5 -translate-x-1/2 translate-y-1/2 rounded-sm border border-border/70 bg-background" />
        <div className="absolute -top-2 right-0 h-5 w-5 translate-x-1/2 rounded-sm border border-border/70 bg-background" />
        <div className="absolute right-0 bottom-0 h-5 w-5 translate-x-1/2 translate-y-1/2 rounded-sm border border-border/70 bg-background" />
      </div>
    </div>
  )
}

export default SectionDivider
