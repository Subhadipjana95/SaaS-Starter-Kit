import React from "react"
import { Command } from "lucide-react"
import { Badge } from "./ui/badge"
import Link from "next/link"
import BrandButton from "./ui/BrandButton"
import Logo from "@/icons/Logo"
import Star from "@/icons/Star"
import Image from "next/image"
import HeroGlow from "@/components/ui/HeroGlow"
import { heroData } from "@/data/Hero.data"

const Hero = () => {
  return (
    <section className="relative isolate flex w-full flex-col items-center overflow-hidden pb-20 text-center">
      <HeroGlow />

      <div className="flex w-full items-center justify-center border-b py-3 text-sm text-muted-foreground">
        <div className="inline-flex rounded-[3px] bg-muted-foreground/80 p-0.5 text-background">
          <Command className="h-3 w-3" />
        </div>
        <span className="ml-2">
          <span className="underline underline-offset-2">{heroData.alertBanner.productName}</span> {heroData.alertBanner.statusText}
        </span>{" "}
        <span className="mx-0.5"> </span>
        <span className="hove:text-primary/80 cursor-pointer transition duration-300">
          {heroData.alertBanner.ctaPrefix}{" "}
          <span className="rounded-sm border bg-brand-color-1/10 px-1 py-0.5 text-brand-color-3 italic dark:text-brand-color-1/80">
            {heroData.alertBanner.promoCode}
          </span>{" "}
          {heroData.alertBanner.promoText}
        </span>
        <span className="mx-0.5"> </span>
      </div>

      <div className="relative z-10 items flex flex-col items-center justify-center pt-20">
        <Link href={heroData.badge.href}>
          <Badge className="cursor-pointer border border-border bg-brand-color-1/10 py-1 pl-1 text-muted-foreground">
            <div className="flex items-center gap-2 rounded-full bg-brand-color-1/20 px-2 py-1">
              <span className="text-xs tracking-wide text-brand-color-3 uppercase dark:text-brand-color-1">
                {heroData.badge.version}
              </span>
            </div>
            <span className="ml-2 text-xs text-foreground/80">
              {heroData.badge.text}
            </span>
          </Badge>
        </Link>
        <div className="mx-auto mt-4 max-w-lg">
          <h1 className="leading-tighter tracking-snug px-2 font-[times-new-roman] text-3xl font-medium text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {heroData.heading.prefix} {" "}<span className="text-brand-color-3 dark:text-brand-color-1">
              {heroData.heading.highlight}
            </span>{" "}{heroData.heading.suffix}
          </h1>
        </div>
        <p className="mt-6 max-w-sm text-center text-lg leading-snug text-muted-foreground">
          {heroData.description}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href={heroData.buttons.secondary.href}
            className="rounded-lg border bg-primary/10 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/20"
          >
            {heroData.buttons.secondary.label}
          </Link>
          <BrandButton
            href={heroData.buttons.primary.href}
            label={
              <div className="flex items-center gap-2">
                <Logo className="[--color:#09090b] dark:[--color:#09090b]" />
                <span className="font-medium">{heroData.buttons.primary.label}</span>
              </div>
            }
          />
        </div>

        {/* <div className="mt-10 flex items-center justify-center gap-2">
          <div className="inline-flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-muted-foreground" />
            ))}
          </div>
          <div className="h-6 w-[1.5px] bg-muted-foreground" />
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Backed by</span>
            <div className="inline-flex items-center gap-1 rounded-sm border border-dashed border-brand-color-1/20 bg-linear-to-r from-brand-color-3/10 dark:from-brand-color-1/10 to-transparent px-1 py-1">
              <Image
                src="/images/yc-logo.svg"
                alt="Y Combinator"
                width={18}
                height={18}
                className="rounded-xs object-contain grayscale-100 open:grayscale-0"
              />
              <span className=""> Combinator</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero
