"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { ThemeToggler } from "@/components/utilities/theme-toggler"
import BrandButton from "@/components/ui/BrandButton"
import { cn } from "@/lib/utils"
import { navLinks, CompanyDetails } from "@/data/Navbar.data"
import type { NavLink, MenuItem } from "@/types/Navbar"

function hasItems(
  link: NavLink
): link is Extract<NavLink, { items: readonly MenuItem[] }> {
  return "items" in link
}

const Navbar = () => {
  const [productsOpen, setProductsOpen] = React.useState(false)
  const closeTimerRef = React.useRef<number | null>(null)

  const openProducts = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    setProductsOpen(true)
  }

  const closeProducts = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
    }

    closeTimerRef.current = window.setTimeout(() => {
      setProductsOpen(false)
      closeTimerRef.current = null
    }, 120)
  }

  React.useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  return (
    <header className="fixed top-3 left-1/2 z-50 w-[90%] -translate-x-1/2 rounded-lg border border-border bg-muted/40 backdrop-blur-md md:top-0 md:left-0 md:w-full md:translate-x-0 md:rounded-none md:border-x-0 md:border-t-0 md:border-b md:bg-background">
      <nav className="relative mx-auto flex h-11 w-full max-w-6xl items-center justify-between px-1.25 sm:px-0 md:h-16">
        {/* Logo + Title */}
        <Link
          href="/"
          className="tracking-snug ml-1 flex items-center gap-2 text-lg font-semibold text-foreground sm:ml-0 sm:text-xl"
        >
          {CompanyDetails.logo}
          <span>{CompanyDetails.title}</span>
        </Link>

        {/* Navigation Links */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-3 md:flex">
          {navLinks.map((link) =>
            hasItems(link) ? (
              <div
                key={link.label}
                className="group relative py-2"
                onMouseEnter={openProducts}
                onMouseLeave={closeProducts}
                onFocusCapture={openProducts}
                onBlurCapture={closeProducts}
              >
                <button
                  type="button"
                  aria-expanded={productsOpen}
                  className={cn(
                    "flex items-center gap-1 rounded-lg border border-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors",
                    "hover:border-border/80 hover:bg-muted/50 hover:text-foreground",
                    productsOpen &&
                      "border-border/80 bg-muted/50 text-foreground shadow-sm"
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <div
                  className={cn(
                    "pointer-events-none absolute top-[calc(100%-0.1rem)] left-1/3 w-[min(42rem,80vw)] origin-top -translate-x-1/3 rounded-xl border border-border/70 bg-background/95 p-2 opacity-0 shadow-2xl shadow-black/5 backdrop-blur-xl transition-all duration-200 ease-out",
                    productsOpen
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "scale-95"
                  )}
                >
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {link.items.map((item: MenuItem) => {
                      const Icon = item.icon

                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group/item flex min-h-30 gap-3 rounded-lg border border-border/80 bg-muted/40 p-1.5 transition-all duration-200 hover:bg-muted/50 hover:shadow-sm"
                        >
                          <div className="relative w-32 shrink-0 self-stretch overflow-hidden rounded-lg border border-border/60 bg-background/80">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover object-center transition-transform duration-300"
                              sizes="96px"
                            />
                          </div>
                          <div className="min-w-0 flex-1 p-2">
                            <div className="mb-2 flex items-center gap-2">
                              <div className="inline-flex rounded-md border border-border/70 bg-muted/60 p-1 text-muted-foreground transition-colors group-hover/item:border-brand-color-1/30 group-hover/item:text-brand-color-1/70">
                                <Icon className="h-4 w-4" />
                              </div>
                              <p className="text-sm font-semibold text-foreground">
                                {item.title}
                              </p>
                            </div>
                            <p className="mt-1 ml-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-lg border border-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors",
                  "hover:border-border/80 hover:bg-muted/50 hover:text-foreground hover:shadow-sm"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Theme Toggler + CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggler
            direction="vertical"
            duration={550}
            className="scale-[0.9] bg-background/40 px-1 text-brand-color-1 dark:text-brand-color-3 active:scale-95 sm:scale-100 sm:bg-muted/80"
            defaultTheme="dark"
          />
          <BrandButton
            href={CompanyDetails.CTA.href}
            label={CompanyDetails.CTA.label}
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
