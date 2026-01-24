import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Experience from "./Experience";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Seo
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        url="https://bernardolomas.dev"
      />

      <Section variant="first">
        <Container>
          <Hero />
        </Container>
      </Section>

      <Section>
        <Container>
          <Experience />
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
