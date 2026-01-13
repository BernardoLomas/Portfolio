import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/ui/SectionHeader";
import Bio from "./Bio";
import Metrics from "./Metrics";
import Process from "./Process";
import Stack from "./Stack";
import Experience from "./Experience";
import Video from "./Video";

export default function About() {
  return (
    <>
      <Seo title="About | Bernardo Lomas" description="More about my history" />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Bio />
            <Video />
          </div>
        </Container>
      </Section>

      <Section variant="tight">
        <Container>
          <Metrics />
        </Container>
      </Section>

      <Section variant="tight">
        <Container>
          <Process />
        </Container>
      </Section>

      <Section variant="default">
        <Container>
          <Stack />
        </Container>
      </Section>

      <Section variant="default">
        <Container>
          <SectionHeader
            title="Projects"
            subtitle="Selected projects showcasing my experience in full stack web developent" 
            align="center"
            />
          <Experience />
        </Container>
      </Section>
    </>
  );
}
