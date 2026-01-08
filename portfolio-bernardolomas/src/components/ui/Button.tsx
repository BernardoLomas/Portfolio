import { Link } from "react-router-dom"
import type { ReactNode } from "react"

type Props = {
    children: ReactNode;
    to?: string;
    variant?: "primary" | "outline";
}

export default function Button({ children, to, variant = "outline"}: Props) {
    const base = "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition"
    const styles = {
        primary: 
            "bg-white text-zinc-900 hover:bg-zinc-200",
        outline:
            "border border-white/50 hover:border-emerald-400/40",
    };

    if(to) {
        return (
            <Link to={to} className={`${base} ${styles[variant]}`}>
                {children}
            </Link>
        );
    }

    return (
        <button className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    )
}