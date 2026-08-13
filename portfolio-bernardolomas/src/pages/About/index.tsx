import { useTranslation } from "react-i18next";
import Seo from "../../components/seo/Seo";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import TechnologyGroup from "../../components/technology/TechnologyGroup";
import { skillGroups } from "../../data/skills";
import { useLocale } from "../../hooks/useLocale";
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
            <div className="mt-7 space-y-4 text-lg leading-8 text-zinc-300">
              <p>{t("about.intro1")}</p>
              <p>{t("about.intro2")}</p>
            </div>
          </div>
        </Container>
      </Section>
      <Section variant="alt">
        <Container>
          <h2 className="text-3xl font-bold">{t("about.foundation")}</h2>
          <p className="mt-3 max-w-3xl text-zinc-400">
            {t("about.foundationDescription")}
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {skillGroups.map((g) => (
              <TechnologyGroup
                key={g.key}
                title={g.title[locale]}
                items={g.items}
                secondary={"secondary" in g && g.secondary}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
