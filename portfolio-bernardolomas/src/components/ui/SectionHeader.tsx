type Props = {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export default function SectionHeader({ title, subtitle, align = "left" }: Props) {
    return (
        <header className={`max-w-2xl space-y-2 ${align === "center" ? "mx-auto text-center" : ""}`}>
            <h2 className="text-3xl font-bold tracking-tight text-emerald-400">
                {title}
            </h2>

            {subtitle && (
                <p className="text-zinc-300">
                    {subtitle}
                </p>
            )}
        </header>
    )
}