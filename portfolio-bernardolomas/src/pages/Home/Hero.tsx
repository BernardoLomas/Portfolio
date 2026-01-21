import { motion } from "framer-motion";
import { fadeInUp } from "../../components/motion/motion.presets";
import { useTranslation, Trans } from "react-i18next";
import HeroImage from "./HeroImage";
import Button from "../../components/ui/Button";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="grid gap-10 text-center lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-20 lg:text-left"
    >
      <div className="max-w-xl space-y-8 lg:ml-auto">
        <span className="text-sm uppercase tracking-widest text-emerald-400 space-x-8">
          {t("hero.role")}
        </span>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <Trans
            i18nKey="hero.title"
            components={{
              1: <span className="text-emerald-400" />,
            }}
          />
        </h1>

        <p className="text-base font-semibold text-zinc-300 sm:text-lg">
          <Trans
            i18nKey="hero.description"
            components={{
              1: <span className="text-emerald-400" />,
            }}
          />
        </p>

        <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
          <Button to="/projects" variant="primary">
            {t("hero.projects")}
          </Button>

          <Button to="/about">
            {t("hero.about")}
          </Button>

          <a
            href="https://www.linkedin.com/in/bernardolomas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-emerald-400/40"
          >
            {t("hero.contact")}
          </a>

          <a
            href="/cv/Bernardo_Lomas_CV.pdf"
            download
            className="inline-flex items-center justify-center rounded-md border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-emerald-400/40"
          >
            {t("hero.download")}
          </a>
        </div>
      </div>
      <HeroImage />
    </motion.section>
  );
}
