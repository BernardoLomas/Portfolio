import { Link } from "react-router-dom"

export default function CallToAction() {
    return (
        <section className="rounded-2xl border border-white/10 bg-zinc-900/60 p-10">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight">
                    Lets build something together?
                </h2>

                <p className="tex-zinc-300">
                    I specialize in bridging the gap between big ideas and functional code. 
                    Let’s collaborate to transform your vision into a powerful solution and build something extraordinary together.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to="/contact"
                        className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                    >
                        Open contacts
                    </Link>

                    <a
                        href="https://github.com/BernardoLomas"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white/40"
                    >
                        Github
                    </a>
                </div>
            </div>
        </section>
    )
}