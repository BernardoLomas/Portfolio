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
          <div className="grid grid-cols-2 gap-24 space-y-4 max-w-6xl">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-emerald-400">{project.title}</h1>
              <p className="text-zinc-300 text-justify">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-4 text-emerald-400">Tech Stack</h2>
              <ul className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-xl border-2 border-white/10 bg-zinc-900/60 p-4 py-1 transition hover:border-emerald-400/40"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-4xl font-bold mb-4 text-emerald-400">Key Highlights</h2>
          <ul className="list-disc space-y-2 pl-6 text-zinc-300">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-semibold mb-4">Challenges & Learnings</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold">Challenges</h3>
              <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                {project.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Learnings</h3>
              <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                {project.learnings.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
