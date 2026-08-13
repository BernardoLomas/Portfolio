import { useTranslation } from "react-i18next";
import Hero from "./Hero";
import Seo from "../../components/seo/Seo";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import ProjectCard from "../../components/projects/ProjectCard";
import { projects } from "../../data/projects";
import { useLocale } from "../../hooks/useLocale";
import { localizedPath, SITE_URL, SOCIAL_LINKS } from "../../config/site";
import ProfessionalJourney from "../../components/home/ProfessionalJourney";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
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
          <ProfessionalJourney />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow={t("featured.eyebrow")}
              title={t("featured.title")}
              description={t("featured.description")}
            />
            <Button to={localizedPath("/projects", locale)}>
              {t("featured.all")}
            </Button>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:max-w-5xl">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
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
