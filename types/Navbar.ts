import React from "react"

export type MenuItem = {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  image: string
}

export type NavLink =
  | {
      label: string
      href: string
      items?: never
    }
  | {
      label: string
      href: string
      items: readonly MenuItem[]
    }

export default {}
