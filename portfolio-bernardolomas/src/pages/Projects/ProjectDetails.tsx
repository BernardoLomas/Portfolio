import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return null;

  return (
    <>
      <Seo
        title={`${project.title} | Bernardo Lomas`}
        description={project.shortDescription}
      />

      <Section variant="first">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* LEFT COLUMN */}
            <div className="space-y-10">
              {/* MEDIA CARD */}
              <div className="rounded-2xl border-2 border-white/10 bg-zinc-900/60 p-4">
                <div className="w-full h-[300px] rounded-xl bg-black/40 flex items-center justify-center">
                  <span className="text-zinc-400">Project Media Carousel</span>
                </div>
              </div>

              {/* TECH STACK CARD */}
              <div className="rounded-2xl border-2 border-white/10 bg-zinc-900/60 p-6">
                <h2 className="text-xl font-semibold mb-4 text-emerald-400 flex items-center gap-2">
                  ⚙️ Tech Stack
                </h2>

                <ul className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border-2 border-white/10 bg-zinc-950/60 px-3 py-1 text-sm transition hover:border-emerald-400/40"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* KEY HIGHLIGHTS CARD */}
              <div className="rounded-2xl border-2 border-white/10 bg-zinc-900/60 p-6">
                <h2 className="text-xl font-semibold mb-4 text-emerald-400 flex items-center gap-2">
                  ✨ Key Highlights
                </h2>

                <ul className="space-y-3 text-zinc-300">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-10">
              {/* SUMMARY CARD */}
              <div className="rounded-2xl border-2 border-white/10 bg-zinc-900/60 p-8">
                <h1 className="text-3xl font-bold text-emerald-400 mb-4">
                  {project.title}
                </h1>

                <p className="text-zinc-300 leading-relaxed text-justify">
                  {project.longDescription}
                </p>
              </div>

              {/* CHALLENGES CARD */}
              <div className="rounded-2xl border-2 border-white/10 bg-zinc-900/60 p-6">
                <h2 className="text-xl font-semibold mb-4 text-emerald-400 flex items-center gap-2">
                  🧩 Challenges
                </h2>

                <ul className="space-y-3 text-zinc-300">
                  {project.challenges.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span className="text-emerald-400">●</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LEARNINGS CARD */}
              <div className="rounded-2xl border-2 border-white/10 bg-zinc-900/60 p-6">
                <h2 className="text-xl font-semibold mb-4 text-emerald-400 flex items-center gap-2">
                  📚 Learnings
                </h2>

                <ul className="space-y-3 text-zinc-300">
                  {project.learnings.map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="text-emerald-400">▹</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
