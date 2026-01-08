import type { ReactNode } from "react"

type Props = {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className}: Props) {
    return (
        <div className={`rounded-xl border border-white/10 bg-zinc-900/60 p-6 transition-colors hover:border-emerald-400/40 ${className ?? ""}`}>
            {children}
        </div>
    )
}