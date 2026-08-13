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
        <div
          aria-label={t("projects.filtersLabel")}
          className="mb-8 flex flex-wrap gap-2"
        >
          {(["all", ...categories] as const).map((x) => (
            <button
              type="button"
              aria-pressed={filter === x}
              key={x}
              onClick={() => setFilter(x)}
              className={`rounded-xl border-2 px-4 py-2 font-semibold transition hover:-translate-y-0.5 motion-reduce:transform-none ${filter === x ? "border-emerald-400 bg-emerald-400 text-black" : "border-white/10 bg-zinc-900/60 hover:border-emerald-400/50"}`}
            >
              {t(`projects.filters.${x}`)}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
