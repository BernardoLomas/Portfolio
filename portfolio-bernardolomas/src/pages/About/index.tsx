import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import Seo from "../../components/seo/Seo";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import TechnologyCard from "../../components/technology/TechnologyCard";
import { technologies, engineeringSkills } from "../../data/skills";
import { useLocale } from "../../hooks/useLocale";
import SectionHeading from "../../components/ui/SectionHeading";
import Card from "../../components/ui/Card";
export default function About() {
  const { t } = useTranslation();
  const locale = useLocale();
  const [photoAvailable, setPhotoAvailable] = useState(true);
  return (
    <>
      <Seo
        title={t("seo.about.title")}
        description={t("seo.about.description")}
        path="/about"
      />
      <Section variant="first">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,.65fr)] lg:gap-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                {t("about.eyebrow")}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                <Trans
                  i18nKey="about.title"
                  components={{ accent: <span className="text-emerald-300" /> }}
                />
              </h1>
              <div className="mt-7 space-y-4 text-left text-lg leading-8 text-zinc-300 md:text-justify">
                <p>
                  <Trans
                    i18nKey="about.intro1"
                    components={{
                      strong: (
                        <strong className="font-semibold text-emerald-300" />
                      ),
                    }}
                  />
                </p>
                <p>{t("about.intro2")}</p>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border-2 border-emerald-400/35 bg-zinc-900 shadow-2xl shadow-emerald-950/70">
              {photoAvailable && (
                <img
                  src="/images/about-personal.webp"
                  alt={t("about.photoAlt")}
                  width="640"
                  height="800"
                  onError={() => setPhotoAvailable(false)}
                  className="h-full w-full object-cover object-center"
                />
              )}
              {!photoAvailable && (
                <div aria-hidden="true" className="h-full w-full bg-zinc-900" />
              )}
            </div>
          </div>
        </Container>
      </Section>
      <Section variant="alt">
        <Container>
          <SectionHeading
            eyebrow={t("about.foundation")}
            title={
              <Trans
                i18nKey="about.technologies"
                components={{ accent: <span className="text-emerald-300" /> }}
              />
            }
            description={t("about.technologiesDescription")}
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.map((technology) => (
              <TechnologyCard key={technology.name} technology={technology} />
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow={t("about.foundation")}
            title={
              <Trans
                i18nKey="about.engineering"
                components={{ accent: <span className="text-emerald-300" /> }}
              />
            }
            description={t("about.engineeringDescription")}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringSkills.map((skill) => (
              <Card
                key={skill.en}
                className="flex items-center gap-3 p-4 hover:border-emerald-400/30"
              >
                <img
                  src="/icons/settings.svg"
                  alt=""
                  className="h-5 w-5 emerald-icon"
                />
                <span className="text-sm font-medium text-zinc-300">
                  {skill[locale]}
                </span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
