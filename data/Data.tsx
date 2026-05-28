import { Command, Cpu, Terminal, ToyBrick } from "lucide-react"
import Logo from "@/icons/Logo"

export const CompanyDetails = {
    title: "Zurik",
    logo: <Logo />,
    CTA: {
        label: "Get Started",
        href: "#get-started",
    }
}

export const navLinks = [
  {
    label: "Products",
    href: "#products",
    items: [
      {
        title: "Platform / SDK",
        description: "Unified APIs and tools for app teams.",
        href: "#platform",
        icon: ToyBrick,
        image: "https://i.pinimg.com/1200x/a6/a0/be/a6a0bef2aef40047403ae9ac198acb40.jpg",
      },
      {
        title: "Inference engine",
        description: "Low-latency execution tuned for production.",
        href: "#inference-engine",
        icon: Cpu,
        image: "https://i.pinimg.com/736x/85/90/39/859039f227a87066695ebd8a297b8064.jpg",
      },
      {
        title: "Model conversion",
        description: "Convert and optimize models in one flow.",
        href: "#model-conversion",
        icon: Command,
        image: "https://i.pinimg.com/736x/ff/e6/4b/ffe64bf8dcfc3f180840cfa4f657428c.jpg",
      },
      {
        title: "CLI tool",
        description: "Scriptable workflows for dev and CI.",
        href: "#cli-tool",
        icon: Terminal,
        image: "https://i.pinimg.com/1200x/5c/87/57/5c8757507f884ca715dbe8b0cb6ad78a.jpg",
      },
    ],
  },
  { label: "Docs", href: "#docs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Company", href: "#company" },
]

export default {
    CompanyDetails,
    navLinks,
}
