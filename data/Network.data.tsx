import { BrainCog, Database, ServerIcon, ShieldCheck, Workflow, MapPin, Navigation } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { GlobeMarker } from "@/components/groot-studio/globe"

const IconMarker = ({
  icon: Icon,
  title,
  tone,
}: {
  icon: LucideIcon
  title: string
  tone: string
}) => (
  <div
    className={`flex h-5 sm:h-10 w-5 sm:w-10 items-center justify-center rounded-full border border-brand-color-2 bg-background transition-transform duration-200 ${tone}`}
    title={title}
    aria-label={title}
  >
    <Icon className="h-3 sm:h-5 w-3 sm:w-5 stroke-1 sm:stroke-[1.5]" />
  </div>
)

export const networkHeading = {
  title: "ZURIK WEB NETWORK",
}

export const networkMarkers: GlobeMarker[] = [
  {
    id: "sf-core",
    location: [37.78, -122.44],
    size: 0.034,
    label: (
      <div className="flex -space-x-3">
        <IconMarker icon={Workflow} title="Automation" tone="bg-background text-brand-color-2" />
        <IconMarker icon={ServerIcon} title="Compute" tone="bg-brand-color-3 text-black" />
      </div>
    ),
  },
  {
    id: "nyc-secure",
    location: [40.71, -74.01],
    size: 0.03,
    label: (
      <div className="flex -space-x-3">
        <IconMarker icon={ShieldCheck} title="Security" tone="bg-background text-brand-color-2" />
        <IconMarker icon={Database} title="Data" tone="bg-brand-color-1 text-black" />
      </div>
    ),
  },
  {
    id: "london-ops",
    location: [51.51, -0.13],
    size: 0.03,
    label: (
      <div className="flex -space-x-3">
        <IconMarker icon={Workflow} title="Operations" tone="bg-brand-color-1 text-black" />
      </div>
    ),
  },
  {
    id: "tokyo-platform",
    location: [35.68, 139.65],
    size: 0.034,
    label: (
      <div className="flex -space-x-4">
        <IconMarker icon={BrainCog} title="Core platform" tone="bg-brand-color-1 text-black" />
        <IconMarker icon={ServerIcon} title="Services" tone="bg-background text-brand-color-1" />
        <IconMarker icon={Database} title="Storage" tone="bg-brand-color-2 text-black" />
      </div>
    ),
  },
  {
    id: "dubai-trust",
    location: [25.2, 55.27],
    size: 0.032,
    label: (
      <div className="flex -space-x-3">
        <IconMarker icon={ShieldCheck} title="Trust" tone="bg-brand-color-1 text-black" />
        <IconMarker icon={BrainCog} title="Growth" tone="bg-background text-brand-color-2" />
      </div>
    ),
  },
  {
    id: "sydney-scale",
    location: [-33.87, 151.21],
    size: 0.032,
    label: (
      <div className="flex -space-x-3">
        <IconMarker icon={Database} title="Storage" tone="bg-brand-color-2 text-black" />
        <IconMarker icon={BrainCog} title="Compute" tone="bg-brand-color-3 text-black" />
      </div>
    ),
  },
  {
    id: "india-mumbai",
    location: [19.07, 72.87],
    size: 0.032,
    label: (
      <div className="flex -space-x-3">
        <IconMarker icon={BrainCog} title="Mumbai - AI" tone="bg-brand-color-1 text-black" />
      </div>
    ),
  },
  {
    id: "africa-lagos",
    location: [6.52, 3.37],
    size: 0.032,
    label: (
      <div className="flex -space-x-3">
        <IconMarker icon={Database} title="Lagos - Data" tone="bg-brand-color-2 text-black" />
      </div>
    ),
  },
  {
    id: "africa-nairobi",
    location: [-1.29, 36.82],
    size: 0.032,
    label: (
      <div className="flex -space-x-3">
        <IconMarker icon={BrainCog} title="Nairobi - AI" tone="bg-brand-color-1 text-black" />
      </div>
    ),
  },
  {
    id: "saopaulo",
    location: [-23.55, -46.63],
    size: 0.032,
    label: (
      <div className="flex -space-x-3">
        <IconMarker icon={Database} title="São Paulo - Data" tone="bg-brand-color-2 text-black" />
      </div>
    ),
  },
  {
    id: "bogota",
    location: [4.71, -74.07],
    size: 0.032,
    label: (
      <div className="flex -space-x-3">
        <IconMarker icon={ServerIcon} title="Bogotá - Services" tone="bg-background text-brand-color-1" />
      </div>
    ),
  },
]

export const networkCards = [
  {
    id: "card-1",
    icon: MapPin,
    title: "Run everywhere",
    description:
      "Security, connectivity, and code run in 335+ cities around the world, within 50ms of 95% of the world's population.",
  },
  {
    id: "card-2",
    icon: Navigation,
    title: "Run anywhere",
    description:
      "Our network is close to your users, applications, and sites. It optimizes all your traffic for low latency.",
  },
  {
    id: "card-3",
    icon: ServerIcon,
    title: "Run at massive scale",
    description: "No more capacity planning. Ever—elastic, predictable performance for heavy workloads.",
  },
]

export default {
  networkHeading,
  networkMarkers,
}