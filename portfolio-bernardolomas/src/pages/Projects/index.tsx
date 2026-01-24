import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects | Bernardo Lomas"
        description="Full Stack projects"
      />

      <Section variant="first">
        <Container>
          <ProjectsGrid />
        </Container>
      </Section>
    </>
  );
}
