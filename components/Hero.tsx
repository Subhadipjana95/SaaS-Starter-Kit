import React from "react"
import { Command } from "lucide-react"
import { Badge } from "./ui/badge"
import Link from "next/link"
import BrandButton from "./ui/BrandButton"
import Logo from "@/icons/Logo"
import HeroGlow from "@/components/ui/HeroGlow"
import { heroData } from "@/data/Hero.data"

const Hero = () => {
  return (
    <section className="relative isolate flex w-full flex-col items-center overflow-hidden pt-16 md:py-2 pb-12 text-center md:pb-20">
      <HeroGlow />

      <div className="mt-3 flex w-full flex-col items-center justify-center gap-1 border-y pt-1 pb-2 text-xs text-muted-foreground sm:mt-0 sm:flex-row sm:gap-0 sm:border-t-0 sm:border-b sm:pb-3 sm:text-sm">
        <span className="hidden items-center justify-center sm:flex">
          <div className="inline-flex rounded-[3px] bg-muted-foreground/80 p-0.5 text-background">
            <Command className="h-3 w-3" />
          </div>
          <span className="ml-2">
            <span className="underline underline-offset-2">
              {heroData.alertBanner.productName}
            </span>{" "}
            {heroData.alertBanner.statusText}
          </span>
        </span>{" "}
        <span className="mx-0.5"> </span>
        <span className="hove:text-primary/80 cursor-pointer transition duration-300">
          {heroData.alertBanner.ctaPrefix}{" "}
          <span className="rounded-sm border bg-brand-color-1/10 px-1 py-0.5 font-mono text-brand-color-3 dark:text-brand-color-1/80">
            {heroData.alertBanner.promoCode}
          </span>{" "}
          {heroData.alertBanner.promoText}
        </span>
      </div>

      <div className="items relative z-10 flex flex-col items-center justify-center pt-10 md:pt-20">
        <Link href={heroData.badge.href}>
          <Badge className="cursor-pointer border border-border bg-brand-color-1/10 py-0.5 pl-0.5 text-muted-foreground sm:py-1 sm:pl-1">
            <div className="flex items-center gap-2 rounded-full bg-brand-color-1/20 px-1.5 py-0.5 sm:px-2 sm:py-1">
              <span className="text-[10px] font-normal tracking-wide text-brand-color-3 uppercase sm:text-xs sm:font-medium dark:text-brand-color-1">
                {heroData.badge.version}
              </span>
            </div>
            <span className="ml-1 text-[10px] font-normal text-foreground/80 sm:ml-2 sm:text-xs sm:font-medium">
              {heroData.badge.text}
            </span>
          </Badge>
        </Link>
        <div className="mx-auto mt-4 max-w-xs sm:max-w-lg">
          <h1 className="leading-tighter tracking-snug px-2 font-[times-new-roman] text-4xl font-medium text-foreground md:text-5xl lg:text-6xl">
            {heroData.heading.prefix}{" "}
            <span className="text-brand-color-3 dark:text-brand-color-1">
              {heroData.heading.highlight}
            </span>{" "}
            {heroData.heading.suffix}
          </h1>
        </div>
        <p className="mt-3 max-w-[18rem] text-center text-sm leading-tight font-light text-muted-foreground sm:mt-6 sm:max-w-sm sm:text-lg sm:leading-snug sm:font-normal">
          {heroData.description}
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
          <Link href={heroData.buttons.secondary.href} className="bg-muted rounded-lg p-0.5 shadow-accent hover:shadow-lg active:scale-[0.98] transition duration-200 inline-flex">
            <span className="rounded-md border bg-radial from-background to-accent/60 px-2 sm:px-3 py-[0.53rem] sm:py-[0.43rem] text-xs sm:text-sm text-muted-foreground transition-colors ring-1 ring-accent text-shadow-md">
              {heroData.buttons.secondary.label}
            </span>
          </Link>
          <BrandButton
            href={heroData.buttons.primary.href}
            label={
              <div className="flex items-center gap-2">
                <Logo className="[--color:#09090b] dark:[--color:#09090b]" />
                <span className="font-medium">
                  {heroData.buttons.primary.label}
                </span>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
