import Link from "next/link"

type BrandButtonProps = {
  href: string
  label: React.ReactNode
  className?: string
}

const BrandButton = ({ href, label, className }: BrandButtonProps) => {
  return (
    <Link
      href={href}
      className={`bg-brand-color-3 rounded-lg p-0.75 shadow-accent hover:shadow-lg active:scale-[0.98] transition duration-200 inline-flex ${className ?? ""}`.trim()}
    >
      <span className="rounded-md bg-brand-gradient px-1.5 sm:px-3 py-1.5 sm:py-1.5 text-xs sm:text-sm text-black ring-1 ring-brand-color-2 text-shadow-md">
        {label}
      </span>
    </Link>
  )
}

export default BrandButton
