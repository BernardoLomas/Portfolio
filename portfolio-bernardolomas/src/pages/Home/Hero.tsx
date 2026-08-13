import { useTranslation } from "react-i18next";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { SOCIAL_LINKS, localizedPath } from "../../config/site";
import { useLocale } from "../../hooks/useLocale";
import { Link } from "react-router-dom";
export default function Hero() {
  const { t } = useTranslation();
  const locale = useLocale();
  return (
    <Section variant="first">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-400">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              {t("hero.description")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-black"
                to={localizedPath("/projects", locale)}
              >
                {t("hero.projects")}
              </Link>
              <Link
                className="rounded-xl border border-white/15 px-5 py-3 text-sm font-bold"
                to={localizedPath("/about", locale)}
              >
                {t("hero.about")}
              </Link>
              <a
                className="rounded-xl border border-white/15 px-5 py-3 text-sm font-bold"
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.reach")}
              </a>
              <a
                className="rounded-xl border border-emerald-400/30 px-5 py-3 text-sm font-bold text-emerald-300"
                href={SOCIAL_LINKS.resume}
              >
                {t("hero.resume")}
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-sm">
            <img
              src="/images/FotoProfi.jpeg"
              alt={t("hero.photo")}
              width="600"
              height="600"
              fetchPriority="high"
              className="aspect-square rounded-3xl border border-emerald-400/30 object-cover shadow-2xl shadow-emerald-950"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
