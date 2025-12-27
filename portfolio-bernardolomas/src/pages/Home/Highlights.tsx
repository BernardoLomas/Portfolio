import { hardSkills } from "../../data/hardskills";
import { softSkills } from "../../data/softskills";

export default function Highlights() {
  return (
    <section className="space-y-10">
      <header className="max-w-2xl space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Hard Skills</h2>
        <p className="text-zinc-300">
          Pilares técnicos que norteiam meus projetos e decisões como
          desenvolvedor.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hardSkills.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-white/10 bg-zinc-900/60 p-6"
          >
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="max-w-2xl space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Soft Skills</h2>
        <p className="text-zinc-300">
          Pilares técnicos que norteiam meus projetos e decisões como
          desenvolvedor.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {softSkills.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-white/10 bg-zinc-900/60 p-6"
          >
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
