"use client"

import Globe from "@/components/groot-studio/globe"
import { networkHeading, networkMarkers, networkCards } from "@/data/Network.data"
import type { LucideIcon } from "lucide-react"

const Networks = () => {
  const globeConfig = {
    startLocation: [19.07, 72.87] as [number, number],
    baseTheta: 0.28,
    rotationSpeed: 0.0022,
    springStrength: 0.06,
    springDamping: 0.62,
    focusEase: 0.08,
  }

  return (
    <section className="relative min-h-186 isolate w-full overflow-hidden text-center px-4 sm:px-8 pt-2">
      <Globe
        markers={networkMarkers}
        orbitText={networkHeading.title}
        {...globeConfig}
      />

      <div className="absolute z-21 bottom-0 left-0 right-0 flex flex-row items-center justify-center bg-background">
        <div className="mx-auto w-full max-w-6xl -mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {networkCards.map((card) => {
              const Icon = card.icon as unknown as LucideIcon
              return (
                <div
                  key={card.id}
                  className="group flex flex-col grow h-42 sm:h-48 items-start justify-center gap-4 border-t border-border bg-background p-4 sm:p-6 md:border-r md:last:border-r-0"
                >
                  <div className="flex items-center justify-center rounded-md p-2 bg-muted border border-border group-hover:focus:brand-color-3 transition duration-200">
                    <Icon size={20} strokeWidth={1.2} className="text-muted-foreground group-hover:text-brand-color-3 transition duration-200" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-medium text-foreground">{card.title}</h3>
                    <p className=" text-sm text-muted-foreground text-wrap wrap-balance line-clamp-2">{card.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Networks