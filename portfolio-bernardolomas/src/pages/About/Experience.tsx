import { experiences } from "../../data/experiences";

export default function Experience() {
    return (
        <section className="space-y-6">
            <div className="space-y-6">
                {experiences.map((exp) => (
                    <article
                        key={exp.role}
                        className="rounded-xl border border-white/10 bg-zinc-900/60 p-6"
                    >
                        <header className="mb-2 flex flex-col gap-1">
                            <h3 className="text-lg font-semibold">
                                {exp.role}
                            </h3>
                            <span className="text-sm tex-zinc-400">
                                {exp.company} - {exp.period}
                            </span>
                        </header>

                        <p className="text-sm text-zinc-400">
                            {exp.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}