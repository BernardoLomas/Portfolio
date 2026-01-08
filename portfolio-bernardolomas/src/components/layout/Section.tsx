import type { ReactNode } from "react"

type Props = {
    children: ReactNode;
    className?: string;
    variant?: "default" | "compact" | "hero";
}

export default function Section({ children, className, variant = "default"}: Props) {
    const variants = {
        default: "py-16 sm:py-20 lg:py-24",
        compact: "py-12 sm:py-16 lg:py-20",
        hero: "py-12 sm:py-16 lg:py-20"
    }
    return(
        <section className={`${variants[variant]} ${className ?? ""}`}>
            {children}
        </section>
    )
}