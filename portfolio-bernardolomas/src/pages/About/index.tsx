import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import Bio from "./Bio";
import Metrics from "./Metrics";
import Process from "./Process";
import Stack from "./Stack";
import Video from "./Video";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("seo.about.title")}
        description={t("seo.about.description")}
        url="https://bernardolomas.dev/about"
      />

      <Section variant="first">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Bio />
            <Video />
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
          <Stack />
        </Container>
      </Section>
    </>
  );
}
