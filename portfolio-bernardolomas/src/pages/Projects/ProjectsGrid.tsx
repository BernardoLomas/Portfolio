import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import type { ProjectType } from "../../data/projects";

const filters: { label: string; value: ProjectType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Flagship", value: "flagship" },
  { label: "Fullstack", value: "fullstack" },
  { label: "Backend", value: "backend" },
  { label: "Academic", value: "academic" },
];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`
              rounded-xl
              px-4
              py-2
              text-md
              font-bold
              transition
              ${
                activeFilter === filter.value
                  ? "bg-emerald-400 text-black"
                  : "border-2 border-white/10 bg-zinc-900/60 text-zinc-300 hover:border-emerald-400/40"
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
