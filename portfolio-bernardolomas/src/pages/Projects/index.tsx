import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/ui/SectionHeader";
import ProjectsGrid from "./ProjectsGrid";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title="Projects | Bernardo Lomas"
        description="Full Stack projects developed with React, TypeScript and NodeJs"
      />

      <Section variant="first">
        <Container>
          <SectionHeader
            title={t("projects.title")}
            subtitle={t("projects.subtitle")}
          />
          <ProjectsGrid />
        </Container>
      </Section>
    </>
  );
}
