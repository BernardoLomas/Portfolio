import { stacks } from "../../data/stacks";

export default function Stack() {
    return (
        <section className="space-y-8">
            <h2 className="text-2xl font-semibold">
                Stacks, Practices and Learning
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
                {stacks.map((group) => (
                    <article
                        key={group.title}
                        className="rounded-xl border border-white/10 bg-zinc-900/60 p-6"
                    >
                        <h3 className="mb-3 text-lg font-semibold">
                            {group.title}
                        </h3>

                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}