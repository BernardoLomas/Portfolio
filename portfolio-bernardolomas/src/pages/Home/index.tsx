import { useTranslation } from "react-i18next";
import Hero from "./Hero";
import Seo from "../../components/seo/Seo";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import ProjectCard from "../../components/projects/ProjectCard";
import { projects } from "../../data/projects";
import { experiences } from "../../data/experience";
import { useLocale } from "../../hooks/useLocale";
import { Link } from "react-router-dom";
import { localizedPath, SITE_URL, SOCIAL_LINKS } from "../../config/site";
export default function Home() {
  const { t } = useTranslation();
  const locale = useLocale();
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bernardo Lomas",
    url: SITE_URL,
    jobTitle:
      locale === "pt"
        ? "Desenvolvedor de Software Júnior"
        : "Junior Software Developer",
    sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
    alumniOf: { "@type": "CollegeOrUniversity", name: "PUC Minas" },
  };
  return (
    <>
      <Seo
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        path="/"
        jsonLd={person}
      />
      <Hero />
      <Section variant="alt">
        <Container>
          <Header
            eyebrow={t("featured.eyebrow")}
            title={t("featured.title")}
            description={t("featured.description")}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <Link
            to={localizedPath("/projects", locale)}
            className="mt-7 inline-block font-semibold text-emerald-400"
          >
            {t("featured.all")} →
          </Link>
        </Container>
      </Section>
      <Section>
        <Container>
          <Header
            eyebrow={t("experience.eyebrow")}
            title={t("experience.title")}
            description={t("experience.description")}
          />
          <ol className="relative mt-10 border-l border-emerald-400/30 pl-7 lg:grid lg:grid-cols-2 lg:gap-6 lg:border-l-0 lg:pl-0">
            {experiences.map((x, i) => (
              <li
                key={`${x.organization}-${i}`}
                className="relative mb-6 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 lg:mb-0"
              >
                <span className="absolute -left-[2.15rem] top-7 h-3 w-3 rounded-full bg-emerald-400 lg:hidden" />
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-semibold text-emerald-300">
                    {t(`experience.${x.category}`)}
                  </span>
                  {x.period && (
                    <time className="text-xs text-zinc-400">{x.period}</time>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-bold">{x.role[locale]}</h3>
                <p className="font-semibold text-emerald-300">
                  {x.organization}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {x.description[locale]}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  {x.points[locale].slice(0, 4).map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section variant="alt">
        <Container>
          <div className="rounded-3xl border border-emerald-400/20 bg-zinc-900/60 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold">{t("cta.title")}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-300">
              {t("cta.description")}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-black"
              >
                {t("cta.linkedin")}
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="rounded-xl border border-white/15 px-5 py-3 font-semibold"
              >
                {t("cta.email")}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
function Header({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      <p className="mt-3 leading-7 text-zinc-400">{description}</p>
    </div>
  );
}
