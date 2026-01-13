import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/ui/SectionHeader";
import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects | Bernardo Lomas"
        description="Full Stack projects developed with React, TypeScript and NodeJs"
      />

      <Section variant="first">
        <Container>
          <SectionHeader
            title="Projects"
            subtitle="Selected projects showcasing my experience in full stack web developent"
          />
          <ProjectsGrid />
        </Container>
      </Section>
    </>
  );
}
