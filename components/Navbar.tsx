
import Link  from "next/link"
import { Button } from "@/components/ui/button";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { GraduationCap } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  return (
    <header
      className="fixed top-0 z-40 mx-auto h-14 w-full pt-4 transition-all sm:h-16 sm:pt-6"
      style={{ opacity: 0 }}
    >
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-0 h-20 bg-gradient-to-b from-background via-background/50 to-transparent sm:h-24"></div>
      <div className="relative z-10 container flex items-center justify-between px-3 sm:px-4 md:px-6">
        <div
          className="flex items-center gap-2 sm:gap-3"
          style={{ opacity: 0 }}
        >
          <div className="gradient-primary flex h-7 w-7 items-center justify-center rounded-sm sm:h-8 sm:w-8">
            <GraduationCap className="h-5 w-5 text-secondary sm:h-6 sm:w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#979797] sm:text-2xl">
              NextRef.
            </h1>
          </div>
        </div>
        <div
          className="absolute left-1/2 mt-2 hidden -translate-x-1/2 items-center space-x-4 rounded-lg border bg-secondary px-3 py-[8px] sm:flex md:space-x-8 md:px-5 md:py-[10px]"
          style={{ opacity: 0 }}
        >
          <Link
            href="/"
            className="md:text-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="md:text-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </div>

        <div
          className="flex items-center gap-2 sm:gap-3"
          style={{ opacity: 0 }}
        >
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
