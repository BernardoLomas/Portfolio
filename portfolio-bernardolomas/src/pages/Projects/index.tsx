import { useTranslation } from "react-i18next";
import Seo from "../../components/seo/Seo";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import ProjectsGrid from "./ProjectsGrid";
export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title={t("seo.projects.title")}
        description={t("seo.projects.description")}
        path="/projects"
      />
      <Section variant="first">
        <Container>
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
            {t("projects.eyebrow")}
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            {t("projects.title")}
          </h1>
          <p className="mb-10 mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            {t("projects.description")}
          </p>
          <ProjectsGrid />
        </Container>
      </Section>
    </>
  );
}
