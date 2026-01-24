import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import ProjectsGrid from "./ProjectsGrid";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title={t("seo.projects.title")}
        description={t("seo.projects.description")}
        url="https://bernardolomas.dev/projects"
      />

      <Section variant="first">
        <Container>
          <ProjectsGrid />
        </Container>
      </Section>
    </>
  );
}
