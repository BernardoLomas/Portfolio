import type { ReactNode } from "react"

type Props = {
    children: ReactNode;
    className?: string;
    variant?: "hero" | "default" | "compact" | "tight" | "first";
}

export default function Section({ children, className, variant = "default"}: Props) {
    const variants = {
        hero: "py-12 sm:py-16 lg:py-20",
        default: "py-14 sm:py-16 lg:py-20",
        compact: "py-10 sm:py-12 lg:py-14",
        tight: "py-8 sm:py-10 lg:py-12",
        first: "pt-6 pb-12 sm:pb-16 lg:pb-20"
    }
    return(
        <section className={`${variants[variant]} ${className ?? ""}`}>
            {children}
        </section>
    )
}