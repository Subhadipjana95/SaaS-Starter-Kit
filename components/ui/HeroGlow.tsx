import React from 'react'

const HeroGlow = () => {
  return (
     <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-40 top-1/3 -z-10 overflow-hidden flex items-end justify-center"
      >
        <div className="hero-glow-primary relative -bottom-64 h-136 w-136 rounded-full blur-3xl sm:h-160 sm:w-160" />
        <div className="hero-glow-secondary relative -bottom-32 h-104 w-136 rounded-full blur-3xl sm:h-lg sm:w-lg" />
        <div className="hero-glow-secondary relative -bottom-32 h-104 w-124 rounded-full blur-3xl sm:h-lg sm:w-lg" />
        <div className="hero-glow-secondary absolute -right-20 -bottom-20 h-80 w-160 animate-pulse rounded-full blur-3xl opacity-50 sm:h-104 sm:w-xl" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--brand-color-2)_32%,transparent),transparent_76%)]" />
      </div>
  )
}

export default HeroGlow