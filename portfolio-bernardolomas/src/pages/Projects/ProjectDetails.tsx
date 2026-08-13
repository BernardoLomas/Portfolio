import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";
import { useLocale } from "../../hooks/useLocale";
import Seo from "../../components/seo/Seo";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import TechnologyGroup from "../../components/technology/TechnologyGroup";
import { localizedPath } from "../../config/site";
import NotFound from "../NotFound";
export default function ProjectDetails() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  const locale = useLocale();
  const { t } = useTranslation();
  if (!p) return <NotFound />;
  const backend = Object.entries(p.backend ?? {}).filter(([, v]) => Boolean(v));
  return (
    <>
      <Seo
        title={`${p.title} | Bernardo Lomas`}
        description={p.summary[locale]}
        path={`/projects/${p.slug}`}
      />
      <Section variant="first">
        <Container>
          <Link
            to={localizedPath("/projects", locale)}
            className="text-sm font-semibold text-emerald-400"
          >
            ← {t("caseStudy.back")}
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase text-emerald-300">
                  {t(`projects.filters.${p.category}`)}
                </span>
                {p.status && (
                  <span className="rounded-full border border-amber-400/40 px-3 py-1 text-xs font-semibold text-amber-300">
                    {t(`projects.${p.status}`)}
                  </span>
                )}
              </div>
              <h1 className="mt-5 text-4xl font-bold sm:text-5xl">{p.title}</h1>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                {p.summary[locale]}
              </p>
              <div className="mt-7 flex gap-3">
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-5 py-3 font-semibold text-black"
                >
                  {t("projects.code")}
                </a>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/15 px-5 py-3 font-semibold"
                  >
                    {t("projects.live")}
                  </a>
                )}
              </div>
            </div>
            <img
              src={p.media[0]?.src}
              alt={p.media[0]?.alt[locale] ?? p.title}
              width="1280"
              height="720"
              className="aspect-video w-full rounded-2xl border border-white/10 bg-zinc-900 object-cover"
            />
          </div>
        </Container>
      </Section>
      <Section variant="alt">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Block title={t("caseStudy.context")}>
              <p>{p.context[locale]}</p>
            </Block>
            <Block title={t("caseStudy.approach")}>
              <p>{p.approach[locale]}</p>
            </Block>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <TechnologyGroup title={t("caseStudy.stack")} items={p.stack} />
            {backend.length > 0 && (
              <Block title={t("caseStudy.backend")}>
                <dl className="grid gap-4 sm:grid-cols-2">
                  {backend.map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-semibold text-emerald-300">
                        {t(`caseStudy.${key}`)}
                      </dt>
                      <dd className="mt-1 text-zinc-300">{value}</dd>
                    </div>
                  ))}
                </dl>
              </Block>
            )}
            <List
              title={t("caseStudy.highlights")}
              items={p.highlights[locale]}
            />
            <List
              title={t("caseStudy.challenges")}
              items={p.challenges[locale]}
            />
            <List
              title={t("caseStudy.learnings")}
              items={p.learnings[locale]}
            />
          </div>
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
