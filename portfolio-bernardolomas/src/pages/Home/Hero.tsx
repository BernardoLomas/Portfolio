import { Trans, useTranslation } from "react-i18next";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { SOCIAL_LINKS, localizedPath } from "../../config/site";
import { useLocale } from "../../hooks/useLocale";
import Button from "../../components/ui/Button";
export default function Hero() {
  const { t } = useTranslation();
  const locale = useLocale();
  return (
    <Section variant="first">
      <Container>
        <div className="relative grid items-center gap-10 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/30 p-6 sm:p-10 lg:grid-cols-[1.25fr_.75fr]">
          <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-400">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              <Trans
                i18nKey="hero.title"
                components={{ accent: <span className="text-emerald-300" /> }}
              />
            </h1>
            <p className="mt-6 max-w-3xl text-left text-lg leading-8 text-zinc-300 md:text-justify">
              <Trans
                i18nKey="hero.description"
                components={{
                  strong: <strong className="font-semibold text-emerald-300" />,
                }}
              />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" to={localizedPath("/projects", locale)}>
                {t("hero.projects")}
              </Button>
              <Button to={localizedPath("/about", locale)}>
                {t("hero.about")}
              </Button>
              <Button
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.reach")}
              </Button>
              <Button href={SOCIAL_LINKS.resume} download>
                {t("hero.resume")}
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-4 rounded-full bg-emerald-400/20 blur-2xl" />
            <img
              src="/images/FotoProfi.jpeg"
              alt={t("hero.photo")}
              width="600"
              height="600"
              fetchPriority="high"
              className="relative aspect-square rounded-3xl border-2 border-emerald-400/40 object-cover shadow-2xl shadow-emerald-950"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
