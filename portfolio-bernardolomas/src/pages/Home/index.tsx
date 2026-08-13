import { Trans, useTranslation } from "react-i18next";
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
              title={
                <Trans
                  i18nKey="featured.title"
                  components={{ accent: <span className="text-emerald-300" /> }}
                />
              }
              description={t("featured.description")}
            />
            <Button to={localizedPath("/projects", locale)}>
              {t("featured.all")}
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
