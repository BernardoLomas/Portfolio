import { Navigate, useParams } from "react-router-dom";
import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import { getLandingPage } from "../../data/landingPages";

export default function LandingPage() {
  const { slug = "" } = useParams();
  const page = getLandingPage(slug);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Seo
        title={`${page.title} | Bernardo Lomas`}
        description={page.summary}
        url={`https://bernardolomas.dev/${page.slug}`}
      />

      <Section variant="first">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              {page.accent}
            </span>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                {page.eyebrow}
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mx-auto max-w-3xl text-lg font-semibold text-zinc-300">
                {page.summary}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/bernardolomas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                {page.primaryCta}
              </a>
              <Button to="/">Voltar ao início</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {page.highlights.map((highlight) => (
              <Card key={highlight}>
                <p className="text-sm leading-6 text-zinc-300">{highlight}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="alt">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader title={page.servicesTitle} subtitle="Uma landing page dedicada para comunicar posicionamento, oferta e contexto de cada frente profissional." />
            <div className="grid gap-4">
              {page.services.map((service) => (
                <Card key={service}>
                  <p className="text-zinc-300">{service}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-6">
            <SectionHeader title={page.stackTitle} align="center" />
            <div className="flex flex-wrap justify-center gap-3">
              {page.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
