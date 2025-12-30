import Seo from "../../components/seo/Seo";
import ProjectCard from "../../components/ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <>
      <Seo
        title="Bernardo Lomas | Full Stack Developer"
        description="Desenvolvedor full stack"
      />
      <section className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="max-w-2xl text-zinc-300">
            Some Projects that i developed to practice arch and different
            stacks.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
