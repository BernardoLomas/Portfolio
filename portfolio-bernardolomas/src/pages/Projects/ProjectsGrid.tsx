import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { projects, type ProjectCategory } from "../../data/projects";
import ProjectCard from "../../components/projects/ProjectCard";
export default function ProjectsGrid() {
  const { t } = useTranslation();
  const categories = useMemo(
    () => [...new Set(projects.map((p) => p.category))],
    []
  );
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const show = projects.length >= 4 && categories.length > 1;
  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  return (
    <div>
      {show && (
        <div aria-label="Project filters" className="mb-8 flex flex-wrap gap-2">
          {(["all", ...categories] as const).map((x) => (
            <button
              type="button"
              aria-pressed={filter === x}
              key={x}
              onClick={() => setFilter(x)}
              className={`rounded-xl px-4 py-2 font-semibold ${filter === x ? "bg-emerald-400 text-black" : "border border-white/10"}`}
            >
              {t(`projects.filters.${x}`)}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
