import { Babel } from "@/components/icons/Babel";
import { UXAnaRangel } from "@/components/icons/Rangel";
import { Salesforce } from "@/components/icons/Salesforce";
import { Sky } from "@/components/icons/sky";
import { JetBrains } from "@/components/icons/JetBrains";

export const heroData = {
  alertBanner: {
    productName: "Zurik Agent",
    href: "#",
    statusText: "is live now.",
    ctaPrefix: "Apply",
    promoCode: "ZURF10",
    promoText: "to avail 10,000 free credits.",
  },
  badge: {
    version: "v1.0.0",
    text: "For fast moving engineering teams",
    href: "#get-started",
  },
  heading: {
    prefix: "Build",
    highlight: "Autonomous",
    suffix: "Agents with Ease",
  },
  description: "The most powerful serverless platform for building AI agents. Build. Deploy. Scale.",
  buttons: {
    primary: {
      label: "Start for Free",
      href: "#get-started",
    },
    secondary: {
      label: "Explore Docs",
      href: "#explore-docs",
    },
  },
};

export const logos = [
  { src: <Sky className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 opacity-60 grayscale" /> },
  { src: <UXAnaRangel className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 opacity-60 grayscale" /> },
  { src: <Salesforce className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 opacity-60 grayscale" /> },
  { src: <JetBrains className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 opacity-60 grayscale" /> },
  { src: <Babel className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 opacity-60 grayscale" /> },
];

