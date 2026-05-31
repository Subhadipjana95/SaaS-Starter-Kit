"use client"

import React from "react"
import { showcaseHeadingData, showcaseHighlightData, showcaseTailData, showcaseData } from "@/data/Showcase.data"

const Showcase = () => {
  return (
    <section className="relative isolate w-full overflow-hidden text-center">
      <div className="flex flex-col justify-center items-center w-full py-8">
        <h1 className="text-2xl md:text-4xl font-medium text-foreground">
          {showcaseHeadingData} <span className="text-brand-color-2">{showcaseHighlightData}</span> {showcaseTailData}
        </h1>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 text-left">
          {showcaseData.map((item, index) => (
            <div key={item.id} className={`group relative flex flex-col items-center overflow-hidden rounded-none px-6 py-6 sm:p-8 border-t md:odd:border-r md:border-dashed transition-colors ${index < 2 ? 'md:[border-top-style:solid]' : ''}`}>
              {/* Subtle radial glow - alternates sides */}
              <div className={`pointer-events-none absolute top-0 w-[70%] h-[60%] ${index % 2 === 0 ? 'left-0' : 'right-0'}`} style={{ background: `radial-gradient(ellipse at ${index % 2 === 0 ? '30%' : '70%'} 0%, var(--brand-color-2) 0%, transparent 70%)`, opacity: 0.08 }} />
              <div className="relative flex h-28 sm:h-44 w-full items-center justify-center">
                 <item.Illustration />
              </div>
              <div className="mt-8 text-left w-full">
                 <h3 className="text-xl font-normal text-foreground">{item.title}</h3>
                 <p className="mt-2 text-muted-foreground leading-snug line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase