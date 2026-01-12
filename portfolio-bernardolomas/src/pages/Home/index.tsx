import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import Hero from "./Hero";
import Highlights from "./Highlights";

export default function Home() {
  return (
    <>
      <Seo
        title="Bernardo Lomas | Full Stack Developer"
        description="Full Stack Developer focused on React, TypeScript and NodeJs"
      />

      <Section variant="first">
        <Container>
            <Hero />
        </Container>
      </Section>

      <Section>
        <Container>
          <Highlights />
        </Container>
      </Section>
    </>
  );
}
