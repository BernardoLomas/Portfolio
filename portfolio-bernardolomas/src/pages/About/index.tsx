import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import Bio from "./Bio";
import Metrics from "./Metrics";
import Process from "./Process";
import Stack from "./Stack";
import Video from "./Video";

export default function About() {
  return (
    <>
      <Seo title="About | Bernardo Lomas" description="More about my history" />

      <Section variant="compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Bio />
            <Video />
          </div>
        </Container>
      </Section>

      <Section variant="first">
        <Container>
          <Metrics />
        </Container>
      </Section>

      <Section variant="first">
        <Container>
          <Process />
        </Container>
      </Section>

      <Section variant="first">
        <Container>
          <Stack />
        </Container>
      </Section>
    </>
  );
}
