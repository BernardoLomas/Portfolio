import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/ui/SectionHeader"
import Bio from "./Bio";
import Metrics from "./Metrics";
import Process from "./Process";
import Stack from "./Stack";
import Experience from "./Experience";
import CareerCarousel from "./CareerCarousel";

export default function About() {
  return (
    <>
      <Seo title="About | Bernardo Lomas" description="More about my history" />
      <div className="space-y-10">

        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Bio />
              <CareerCarousel />
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <Metrics />
          </Container>
        </Section>

        <Section>
          <Container>
            <Process />
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeader
              title="Tech Stack"
              subtitle="Technologies that i work with, improving and planning to learn"
            />
            <Stack />
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeader
              title="Experience"
              subtitle="Academic, professional and leadership experiences"
            />
            <Experience />
          </Container>
        </Section>
      </div>
    </>
  );
}
