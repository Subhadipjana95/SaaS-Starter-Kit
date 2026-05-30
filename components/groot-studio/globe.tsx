"use client"

import createGlobe from "cobe"
import type { ReactNode } from "react"
import { useEffect, useId, useMemo, useRef, useState } from "react"

type RgbColor = [number, number, number]
export type GlobeMarker = {
  id: string
  location: [number, number]
  size?: number
  label: ReactNode
  color?: RgbColor
}

type GlobeProps = {
  markers: GlobeMarker[]
  className?: string
  orbitText?: string
  startLocation?: [number, number]
  baseTheta?: number
  rotationSpeed?: number
  springStrength?: number
  springDamping?: number
  focusEase?: number
}

const DEFAULT_ORBIT_TEXT = "ZURIK WEB NETWORK"

const GLOBE_R = 0.8
const GLOBE_MARKER_ELEVATION = 0.01
const DEFAULT_BASE_THETA = 0.28
const DEFAULT_ROTATION_SPEED = 0.0022
const DEFAULT_SPRING_STRENGTH = 0.06
const DEFAULT_SPRING_DAMPING = 0.62
const DEFAULT_FOCUS_EASE = 0.08
const DEFAULT_START_LOCATION: [number, number] = [19.07, 72.87]

const hexToRgb01 = (value: string): RgbColor => {
  const normalized = value.trim()

  if (!normalized) return [1, 1, 1]

  if (normalized.startsWith("#")) {
    const hex = normalized.slice(1)
    if (hex.length === 3) {
      return [0, 1, 2].map((index) => Number.parseInt(`${hex[index]}${hex[index]}`, 16) / 255) as RgbColor
    }
    if (hex.length === 6) {
      return [0, 2, 4].map((offset) => Number.parseInt(hex.slice(offset, offset + 2), 16) / 255) as RgbColor
    }
  }

  const rgbMatch = normalized.match(/rgba?\(([^)]+)\)/i)
  if (rgbMatch) {
    const channels = rgbMatch[1].split(",").slice(0, 3).map((c) => Number.parseFloat(c.trim()))
    if (channels.length === 3 && channels.every((n) => Number.isFinite(n))) {
      return [channels[0] / 255, channels[1] / 255, channels[2] / 255]
    }
  }

  return [1, 1, 1]
}

const readBrandColor = (name: string): RgbColor => {
  if (typeof window === "undefined") return [1, 1, 1]
  const value = getComputedStyle(document.documentElement).getPropertyValue(name)
  return hexToRgb01(value)
}

const toRadians = (value: number) => (value * Math.PI) / 180

const latLonTo3D = ([lat, lon]: [number, number]): [number, number, number] => {
  const latRad = toRadians(lat)
  const lonRad = toRadians(lon) - Math.PI

  const cosLat = Math.cos(latRad)
  return [
    -cosLat * Math.cos(lonRad),
    Math.sin(latRad),
    cosLat * Math.sin(lonRad),
  ]
}

const applyRotation = (point: [number, number, number], phi: number, theta: number) => {
  const cx = Math.cos(theta)
  const cy = Math.cos(phi)
  const sx = Math.sin(theta)
  const sy = Math.sin(phi)

  const aspect = 1

  const rx = cy * point[0] + sy * point[2]
  const ry = sy * sx * point[0] + cx * point[1] - cy * sx * point[2]
  const rz = -sy * cx * point[0] + sx * point[1] + cy * cx * point[2]

  return [rx / aspect, ry, rz] as [number, number, number]
}

const projectMarker = (location: [number, number], phi: number, theta: number) => {
  const position = latLonTo3D(location)
  const elevatedPosition: [number, number, number] = [
    position[0] * (GLOBE_R + GLOBE_MARKER_ELEVATION),
    position[1] * (GLOBE_R + GLOBE_MARKER_ELEVATION),
    position[2] * (GLOBE_R + GLOBE_MARKER_ELEVATION),
  ]
  const rotated = applyRotation(elevatedPosition, phi, theta)
  const visible = rotated[2] >= 0 || rotated[0] * rotated[0] + rotated[1] * rotated[1] >= GLOBE_R * GLOBE_R

  return {
    x: (rotated[0] + 1) / 2,
    y: (-rotated[1] + 1) / 2,
    visible,
  }
}

export default function Globe({
  markers,
  className,
  orbitText,
  startLocation = DEFAULT_START_LOCATION,
  baseTheta = DEFAULT_BASE_THETA,
  rotationSpeed = DEFAULT_ROTATION_SPEED,
  springStrength = DEFAULT_SPRING_STRENGTH,
  springDamping = DEFAULT_SPRING_DAMPING,
  focusEase = DEFAULT_FOCUS_EASE,
}: GlobeProps) {
  const ringPathId = useId().replace(/:/g, "")
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const pointerStartX = useRef<number | null>(null)
  const targetDrag = useRef(0)
  const currentDrag = useRef(0)
  const dragVelocity = useRef(0)
  const basePhi = useRef(0.3)
  const currentFocusPhi = useRef(0)
  const targetFocusPhi = useRef(0)
  const currentFocusTheta = useRef(0)
  const targetFocusTheta = useRef(0)
  const labelRefs = useRef<Array<HTMLDivElement | null>>([])
  const [diameter, setDiameter] = useState(0)
  const [isDark, setIsDark] = useState(false)
  const [areMarkersReady, setAreMarkersReady] = useState(false)
  const markersReadyRef = useRef(false)

  const ringLabel = useMemo(() => {
    const base = (orbitText ?? DEFAULT_ORBIT_TEXT).trim() || DEFAULT_ORBIT_TEXT
    return `${Array.from({ length: 8 }, () => base).join(" • ")} • `
  }, [orbitText])

  const getAngles = () => {
    const phi = basePhi.current + currentDrag.current + currentFocusPhi.current
    const theta = baseTheta + currentFocusTheta.current
    return { phi, theta }
  }

  const syncFocus = (location: [number, number], immediate = false) => {
    const [lat, lon] = location
    const targetPhi = -toRadians(lon) - Math.PI / 2
    const targetTheta = toRadians(lat)

    targetFocusPhi.current = targetPhi - basePhi.current - currentDrag.current
    targetFocusTheta.current = targetTheta - baseTheta

    if (immediate) {
      currentFocusPhi.current = targetFocusPhi.current
      currentFocusTheta.current = targetFocusTheta.current
    }
  }

  const focusLocation = (location: [number, number]) => {
    syncFocus(location)
  }

  useEffect(() => {
    const sync = () => setIsDark(document.documentElement.classList.contains("dark"))
    sync()
    const mo = new MutationObserver(sync)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => mo.disconnect()
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => {
      const rect = el.getBoundingClientRect()
      setDiameter(Math.floor(Math.min(rect.width, rect.height)))
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || diameter <= 0) return

    setAreMarkersReady(false)
    markersReadyRef.current = false
    syncFocus(startLocation, true)

    const primary = readBrandColor("--brand-color-3")
    const glow = readBrandColor(isDark ? "--brand-color-3" : "--brand-color-2")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const mapSamples = reduced ? 3000 : diameter < 300 ? 4000 : diameter < 600 ? 12000 : 22000

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: diameter * 2,
      height: diameter * 2,
      phi: basePhi.current + currentDrag.current + currentFocusPhi.current,
      theta: baseTheta,
      dark: isDark ? 1 : 0,
      diffuse: 1.35,
      mapSamples,
      mapBrightness: 3.5,
      mapBaseBrightness: 0.02,
      baseColor: [1, 1, 1],
      markerColor: primary,
      markerElevation: 0.01,
      glowColor: glow,
      markers: markers.map((marker) => ({
        location: marker.location,
        size: marker.size ?? 0.03,
        id: marker.id,
        color: marker.color,
      })),
      arcs:
        markers.length > 1
          ? markers.map((marker, index) => ({
              from: marker.location,
              to: markers[(index + 1) % markers.length].location,
            }))
          : [],
      arcColor: primary,
      arcWidth: 0.4,
      arcHeight: 0.4,
    })

    const updateLabelLayout = (phi: number, theta: number) => {
      markers.forEach((marker, index) => {
        const node = labelRefs.current[index]
        if (!node) return

        const { x, y, visible } = projectMarker(marker.location, phi, theta)
        const isBackFacing = !visible

        node.style.left = `${x * 100}%`
        node.style.top = `${y * 100}%`
        node.style.opacity = isBackFacing ? "0" : "1"
        node.style.transform = `translate(-50%, -120%) scale(${isBackFacing ? 0.96 : 1})`
        node.style.pointerEvents = isBackFacing ? "none" : "auto"
      })

      if (!markersReadyRef.current) {
        markersReadyRef.current = true
        setAreMarkersReady(true)
      }
    }

    const onDown = (e: PointerEvent) => {
      pointerStartX.current = e.clientX
      targetDrag.current = currentDrag.current
      dragVelocity.current = 0
      const target = e.currentTarget as HTMLElement | null
      if (target) target.setPointerCapture(e.pointerId)
    }

    const onMove = (e: PointerEvent) => {
      if (pointerStartX.current === null) return
      const delta = e.clientX - pointerStartX.current
      targetDrag.current = delta / 200
    }

    const onUp = (e: PointerEvent) => {
      pointerStartX.current = null
      dragVelocity.current = 0
      const target = e.currentTarget as HTMLElement | null
      if (target) {
        try {
          target.releasePointerCapture(e.pointerId)
        } catch {
          // Ignored release errors when the pointer is no longer captured.
        }
      }
    }

    canvas.addEventListener("pointerdown", onDown)
    canvas.addEventListener("pointermove", onMove)
    canvas.addEventListener("pointerup", onUp)
    canvas.addEventListener("pointercancel", onUp)
    canvas.addEventListener("pointerleave", onUp)

    const intersection = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          if (frameRef.current !== null) {
            window.cancelAnimationFrame(frameRef.current)
            frameRef.current = null
          }
        } else if (frameRef.current === null && !reduced) {
          frameRef.current = window.requestAnimationFrame(animate)
        }
      })
    })

    if (containerRef.current) {
      intersection.observe(containerRef.current)
    }

    function animate() {
      basePhi.current += rotationSpeed

      const dragForce = (targetDrag.current - currentDrag.current) * springStrength
      dragVelocity.current = (dragVelocity.current + dragForce) * springDamping
      currentDrag.current += dragVelocity.current

      currentFocusPhi.current += (targetFocusPhi.current - currentFocusPhi.current) * focusEase
      currentFocusTheta.current += (targetFocusTheta.current - currentFocusTheta.current) * focusEase

      const { phi, theta } = getAngles()
      globe.update({ phi, theta })

      updateLabelLayout(phi, theta)

      frameRef.current = window.requestAnimationFrame(animate)
    }

    if (!reduced) {
      frameRef.current = window.requestAnimationFrame(animate)
    } else {
      const { phi, theta } = getAngles()
      globe.update({ phi, theta })
      updateLabelLayout(phi, theta)
    }

    return () => {
      canvas.removeEventListener("pointerdown", onDown)
      canvas.removeEventListener("pointermove", onMove)
      canvas.removeEventListener("pointerup", onUp)
      canvas.removeEventListener("pointercancel", onUp)
      canvas.removeEventListener("pointerleave", onUp)
      intersection.disconnect()

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }

      globe.destroy()
    }
  }, [diameter, isDark, markers])

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto aspect-square w-full max-w-200 ${className ?? ""}`}
    >
      <canvas ref={canvasRef} aria-hidden="true" className="relative z-0 h-full w-full select-none touch-none" />

      <div className="pointer-events-none absolute inset-0 z-10 perspective-[600px]">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full transform-[translateY(-12%)_rotateX(60deg)_rotateZ(64deg)] origin-[50%_50%]"
          aria-hidden="true"
        >
          <defs>
            <path
              id={ringPathId}
              d="M 50,50 m -41,0 a 41,41 0 1,1 82,0 a 41,41 0 1,1 -82,0"
            />
          </defs>
          <g className="origin-center motion-safe:animate-[spin_reverse_60s_linear_infinite]">
            <text
              fill= {isDark ? "var(--brand-color-1)" : "var(--brand-color-2)"}
              stroke= {isDark ? "var(--brand-color-1)" : "var(--brand-color-2)"}
              strokeWidth="0.1"
              textRendering="geometricPrecision"
              fontSize="1.2"
              fontWeight="300"
              letterSpacing="1.15"
              opacity="0.65"
            >
              <textPath href={`#${ringPathId}`} startOffset="0%">
                {ringLabel}
              </textPath>
            </text>
          </g>
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        {markers.map((marker, index) => (
          <div
            key={marker.id}
            ref={(node) => {
              labelRefs.current[index] = node
            }}
            onClick={() => focusLocation(marker.location)}
            onKeyDown={(event) => {
              if (event.key !== "Enter" && event.key !== " ") return
              event.preventDefault()

              focusLocation(marker.location)
            }}
            className="pointer-events-auto absolute"
            role="button"
            tabIndex={0}
            style={{
              opacity: areMarkersReady ? 1 : 0,
              transform: "translate(-50%, -120%) scale(0.96)",
              transition: "opacity 220ms ease, transform 220ms ease",
              willChange: "transform, top, left, opacity",
            }}
          >
            {marker.label}
          </div>
        ))}
      </div>
    </div>
  )
}
