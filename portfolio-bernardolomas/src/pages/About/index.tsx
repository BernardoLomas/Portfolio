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
  return (
    <>
      <Seo
        title={t("seo.about.title")}
        description={t("seo.about.description")}
        path="/about"
      />
      <Section variant="first">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
              {t("about.eyebrow")}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              {t("about.title")}
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
        </Container>
      </Section>
      <Section variant="alt">
        <Container>
          <SectionHeading
            eyebrow={t("about.foundation")}
            title={t("about.technologies")}
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
            title={t("about.engineering")}
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
