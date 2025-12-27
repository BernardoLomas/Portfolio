import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Projeto não encontrado!</h1>
        <Link to="/projects" className="text-zinc-300 hover:text-white">
          Voltar para projetos
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <Link to="/projects" className="text-sm text-zinc-400 hover:text-white">
          Voltar
        </Link>

        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>

        <p className="max-w-2xl text-zinc-300">{project.longDescription}</p>
      </header>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Stack utilizada</h2>

        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border-white/10 px-3 py-1 text-sm text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/10 px-4 py-2 text-sm hover:border-white/20"
          >
            GitHub
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/10 px-4 py-2 text-sm hover:border-white/20"
          >
            Live Demo
          </a>
        )}
      </div>
    </section>
  );
}
