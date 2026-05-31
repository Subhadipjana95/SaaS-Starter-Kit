import { logos } from "@/data/Hero.data"


const TrustedBrands = () => {
    return (
        <div className="flex w-full py-3 border-t border-dashed justify-between pl-6 pr-4">
            <p className="max-w-48 text-muted-foreground text-sm text-wrap">
                Trusted by Leading Companies around the World
            </p>
            <div className="flex flex-1 items-center justify-end gap-4">
                {logos.map((logo, idx) => (
                    <div key={idx} className="bg-muted/30 backdrop-blur-sm px-3 py-1.5 border border-dashed rounded flex items-center justify-center transition-all duration-300 [&_svg]:h-7 [&_svg]:w-auto group">
                        {logo.src}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrustedBrands


/* bg-brand-color-3/5 backdrop-blur-sm px-3 py-1.5 border border-dashed rounded */