import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";
import { useLocale } from "../../hooks/useLocale";
import { localizedPath } from "../../config/site";
export default function ProjectCard({ project }: { project: Project }) {
  const locale = useLocale();
  const { t } = useTranslation();
  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-zinc-900/60 ${project.flagship ? "border-emerald-400/40" : "border-white/10"}`}
    >
      <Link
        to={localizedPath(`/projects/${project.slug}`, locale)}
        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
      >
        <div className="aspect-video overflow-hidden bg-zinc-950">
          <img
            src={project.media[0]?.src}
            alt={project.media[0]?.alt[locale] ?? project.title}
            width="1280"
            height="720"
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
          />
        </div>
        <div className="space-y-4 p-5">
          <div className="flex flex-wrap items-center gap-2">
            {project.flagship && (
              <span className="rounded-full bg-emerald-400 px-2.5 py-1 text-xs font-bold text-black">
                {t("projects.flagship")}
              </span>
            )}
            {project.status && (
              <span className="rounded-full border border-amber-400/40 px-2.5 py-1 text-xs font-semibold text-amber-300">
                {t(`projects.${project.status}`)}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold group-hover:text-emerald-300">
            {project.title}
          </h3>
          <p className="text-sm leading-6 text-zinc-300">
            {project.summary[locale]}
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((x) => (
              <li
                key={x}
                className="rounded bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300"
              >
                {x}
              </li>
            ))}
          </ul>
          <span className="inline-block text-sm font-semibold text-emerald-400">
            {t("projects.view")} →
          </span>
        </div>
      </Link>
      <div className="border-t border-white/10 px-5 py-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-zinc-300 hover:text-white"
        >
          {t("projects.code")} ↗
        </a>
      </div>
    </article>
  );
}
