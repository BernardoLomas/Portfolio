import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projects, type Localized } from "../../data/projects";
import { useLocale } from "../../hooks/useLocale";
import Seo from "../../components/seo/Seo";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { localizedPath } from "../../config/site";
import NotFound from "../NotFound";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import TechnologyCard from "../../components/technology/TechnologyCard";
import EngineeringNotes from "../../components/projects/EngineeringNotes";
const iconFor = (name: string) =>
  name === "C#"
    ? "/icons/csharp.svg"
    : name === "TypeScript"
      ? "/icons/typescript.svg"
      : name === "React"
        ? "/icons/react.svg"
        : name === "JavaScript"
          ? "/icons/javascript.svg"
          : "/icons/backend.svg";
export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const locale = useLocale();
  const { t } = useTranslation();
  if (!project) return <NotFound />;
  const backend = Object.entries(project.backend ?? {}).filter(([, value]) =>
    Boolean(value)
  );
  const localized = (value: string | Localized) =>
    typeof value === "string" ? value : value[locale];
  return (
    <>
      <Seo
        title={`${project.title} | Bernardo Lomas`}
        description={project.summary[locale]}
        path={`/projects/${project.slug}`}
      />
      <Section variant="first" className="pb-10">
        <Container>
          <Link
            to={localizedPath("/projects", locale)}
            className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
          >
            {t("caseStudy.back")}
          </Link>
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="chip border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                  {t(`projects.filters.${project.category}`)}
                </span>
                {project.status && (
                  <span className="chip border border-amber-400/40 text-amber-300">
                    {t(`projects.${project.status}`)}
                  </span>
                )}
              </div>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg leading-8 text-zinc-300">
                {project.summary[locale]}
              </p>
              <div className="mt-6 flex gap-3">
                <Button
                  variant="primary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("projects.code")}
                </Button>
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.live")}
                  </Button>
                )}
              </div>
            </div>
            <img
              src={project.media[0]?.src}
              alt={project.media[0]?.alt[locale] ?? project.title}
              width="1280"
              height="720"
              className="aspect-video w-full rounded-2xl border-2 border-white/10 bg-zinc-900 object-cover"
            />
          </div>
        </Container>
      </Section>
      <Section variant="alt" className="py-12">
        <Container>
          <h2 className="mb-6 text-2xl font-bold">{t("caseStudy.overview")}</h2>
          <Card className="divide-y-2 divide-white/10 p-6 sm:p-8">
            <article className="pb-6">
              <h3 className="text-xl font-semibold text-emerald-300">
                {t("caseStudy.context")}
              </h3>
              <p className="mt-3 text-left leading-7 text-zinc-300 md:text-justify">
                {project.context[locale]}
              </p>
            </article>
            <article className="pt-6">
              <h3 className="text-xl font-semibold text-emerald-300">
                {t("caseStudy.approach")}
              </h3>
              <p className="mt-3 text-left leading-7 text-zinc-300 md:text-justify">
                {project.approach[locale]}
              </p>
            </article>
          </Card>
        </Container>
      </Section>
      <Section className="py-12">
        <Container>
          <h2 className="mb-6 text-2xl font-bold">
            {t("caseStudy.breakdown")}
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-emerald-300">
                {t("caseStudy.stack")}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {project.stack.map((tech) => (
                  <TechnologyCard
                    key={tech.en}
                    compact
                    technology={{ name: tech[locale], icon: iconFor(tech.en) }}
                  />
                ))}
              </div>
            </div>
            {backend.length > 0 && (
              <div>
                <h3 className="mb-4 text-lg font-semibold text-emerald-300">
                  {t("caseStudy.backend")}
                </h3>
                <Card className="grid gap-5 p-5 sm:grid-cols-2">
                  {backend.map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        {t(`caseStudy.${key}`)}
                      </dt>
                      <dd className="mt-1 text-sm text-zinc-200">
                        {localized(value!)}
                      </dd>
                    </div>
                  ))}
                </Card>
              </div>
            )}
          </div>
        </Container>
      </Section>
      <Section variant="alt" className="py-12">
        <Container>
          <h2 className="mb-6 text-2xl font-bold">{t("caseStudy.notes")}</h2>
          <EngineeringNotes project={project} />
        </Container>
      </Section>
    </>
  );
}
function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
      <h2 className="text-2xl font-bold text-emerald-300">{title}</h2>
      <div className="mt-4 leading-7 text-zinc-300">{children}</div>
    </article>
  );
}
function List({ title, items }: { title: string; items: string[] }) {
  return (
    <Block title={title}>
      <ul className="space-y-3">
        {items.map((x) => (
          <li key={x} className="flex gap-3">
            <span aria-hidden="true" className="text-emerald-400">
              ▹
            </span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </Block>
  );
}
