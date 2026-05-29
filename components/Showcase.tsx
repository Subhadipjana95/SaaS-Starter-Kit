"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

const Showcase = () => {
  const areaRef = useRef<HTMLDivElement | null>(null)
  const mockupRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)

  const targetRef = useRef({
    x: 0,
    y: 0,
    rotX: 0,
    rotY: 0,
    cursorX: 0,
    cursorY: 0,
    opacity: 0,
    spotX: 50,
    spotY: 50,
  })

  const currentRef = useRef({
    x: 0,
    y: 0,
    rotX: 0,
    rotY: 0,
    cursorX: 0,
    cursorY: 0,
    opacity: 0,
    spotX: 50,
    spotY: 50,
  })

  useEffect(() => {
    const area = areaRef.current
    const mockup = mockupRef.current
    const cursor = cursorRef.current

    if (!area || !mockup || !cursor) {
      return
    }

    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)")
    const finePointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)")

    if (reducedMotionMedia.matches || !finePointerMedia.matches) {
      return
    }

    const animate = () => {
      const current = currentRef.current
      const target = targetRef.current

      current.x += (target.x - current.x) * 0.12
      current.y += (target.y - current.y) * 0.12
      current.rotX += (target.rotX - current.rotX) * 0.12
      current.rotY += (target.rotY - current.rotY) * 0.12
      current.cursorX += (target.cursorX - current.cursorX) * 0.18
      current.cursorY += (target.cursorY - current.cursorY) * 0.18
      current.opacity += (target.opacity - current.opacity) * 0.2
      current.spotX += (target.spotX - current.spotX) * 0.14
      current.spotY += (target.spotY - current.spotY) * 0.14

      mockup.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) rotateX(${current.rotX}deg) rotateY(${current.rotY}deg)`
      mockup.style.setProperty("--spot-x", `${current.spotX}%`)
      mockup.style.setProperty("--spot-y", `${current.spotY}%`)

      cursor.style.transform = `translate3d(${current.cursorX}px, ${current.cursorY}px, 0)`
      cursor.style.opacity = `${current.opacity}`

      frameRef.current = window.requestAnimationFrame(animate)
    }

    frameRef.current = window.requestAnimationFrame(animate)

    const handleMove = (event: MouseEvent) => {
      const rect = area.getBoundingClientRect()
      const mockupRect = mockup.getBoundingClientRect()

      const localX = event.clientX - rect.left
      const localY = event.clientY - rect.top

      const centerX = mockupRect.left + mockupRect.width / 2
      const centerY = mockupRect.top + mockupRect.height / 2
      const dx = (event.clientX - centerX) / (mockupRect.width / 2)
      const dy = (event.clientY - centerY) / (mockupRect.height / 2)

      targetRef.current.x = clamp(dx * 10, -10, 10)
      targetRef.current.y = clamp(dy * 8, -8, 8)
      targetRef.current.rotX = clamp(-dy * 2.2, -2.2, 2.2)
      targetRef.current.rotY = clamp(dx * 3.2, -3.2, 3.2)
      targetRef.current.cursorX = localX - 36
      targetRef.current.cursorY = localY - 36
      targetRef.current.opacity = 1
      targetRef.current.spotX = clamp(((event.clientX - mockupRect.left) / mockupRect.width) * 100, 10, 90)
      targetRef.current.spotY = clamp(((event.clientY - mockupRect.top) / mockupRect.height) * 100, 8, 92)
    }

    const handleLeave = () => {
      targetRef.current.x = 0
      targetRef.current.y = 0
      targetRef.current.rotX = 0
      targetRef.current.rotY = 0
      targetRef.current.opacity = 0
      targetRef.current.spotX = 50
      targetRef.current.spotY = 50
    }

    area.addEventListener("pointermove", handleMove)
    area.addEventListener("mouseleave", handleLeave)

    return () => {
      area.removeEventListener("pointermove", handleMove)
      area.removeEventListener("mouseleave", handleLeave)
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <section className="relative isolate w-full overflow-hidden bg-background px-4 py-6 sm:py-12 text-center sm:px-8">

      <div className="relative mx-auto max-w-3xl">
        <h2 className="mt-4 px-2 font-medium text-2xl leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl opacity-80">
          Build your <span className="text-brand-color-3 dark:text-brand-color-1">Own Agency</span>
        </h2>
      </div>

      <div
        ref={areaRef}
        className="group relative mx-auto mt-4 sm:mt-10 w-full max-w-7xl"
      >
        <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(248,181,66,0.12),transparent_70%)] blur-2xl" />

        <div
          ref={mockupRef}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          className="relative overflow-hidden rounded-lg sm:rounded-2xl bg-muted p-1 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)]"
        >
          <Image
            src="/P1.png"
            alt="Dark product dashboard showcase"
            width={2048}
            height={1372}
            priority
            className="h-auto w-full select-none rounded-lg sm:rounded-xl ring-2 ring-border object-cover"
          />
        </div>

        <div
          ref={cursorRef}
          className="pointer-events-none absolute left-0 top-0 z-20 h-18 w-18 opacity-0"
        >
        </div>
      </div>
    </section>
  )
}

export default Showcase