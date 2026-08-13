import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";
import { useLocale } from "../../hooks/useLocale";
import { localizedPath } from "../../config/site";
import Card from "../ui/Card";
import Button from "../ui/Button";
export default function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const locale = useLocale();
  const { t } = useTranslation();
  return (
    <Card
      as="article"
      className="group flex h-full flex-col overflow-hidden hover:-translate-y-0.5 hover:border-emerald-400/40 motion-reduce:transform-none"
    >
      <Link
        to={localizedPath(`/projects/${project.slug}`, locale)}
        className="block overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
      >
        <div className="aspect-video overflow-hidden bg-zinc-950">
          <img
            src={project.media[0]?.src}
            alt={project.media[0]?.alt[locale] ?? project.title}
            width="1280"
            height="720"
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025] motion-reduce:transform-none"
          />
        </div>
      </Link>
      <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-5"}`}>
        <div className="flex flex-wrap gap-2">
          {project.flagship && !compact && (
            <span className="chip bg-emerald-400 text-zinc-950">
              {t("projects.flagship")}
            </span>
          )}
          {project.status && (
            <span className="chip border border-amber-400/40 text-amber-300">
              {t(`projects.${project.status}`)}
            </span>
          )}{" "}
          {!compact && (
            <span className="chip border border-white/15 text-zinc-400">
              {t(`projects.filters.${project.category}`)}
            </span>
          )}
        </div>
        <Link
          to={localizedPath(`/projects/${project.slug}`, locale)}
          className="mt-3"
        >
          <h3 className="text-lg font-bold transition group-hover:text-emerald-300">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
          {project.summary[locale]}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, compact ? 3 : 4).map((tech) => (
            <li
              key={tech.en}
              className="rounded-md bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300"
            >
              {tech[locale]}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-2 pt-5">
          <Button
            to={localizedPath(`/projects/${project.slug}`, locale)}
            className="min-h-9 px-3 py-1.5"
          >
            {t("projects.view")}
          </Button>
          {!compact && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-2 py-2 text-sm font-semibold text-zinc-400 transition hover:text-emerald-300"
            >
              {t("projects.code")}
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
