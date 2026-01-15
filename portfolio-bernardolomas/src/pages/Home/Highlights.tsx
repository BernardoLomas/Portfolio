import SkillsCarousel from "./SkillsCarousel";
import Container from "../../components/layout/Container";
import { hardSkills } from "../../data/hardskills";
import { softSkills } from "../../data/softskills";
import { motion } from "framer-motion";
import { stagger } from "../../components/motion/motion.presets";
import { useTranslation } from "react-i18next";

export default function Highlights() {

  const { t } = useTranslation();

  const translatedHardSkills = hardSkills.map((skill) => ({
    title: t(`hardSkills.${skill.key}.title`),
    description: t(`hardSkills.${skill.key}.description`),
  }));

  const translatedsoftSkills = softSkills.map((skill) => ({
    title: t(`softSkills.${skill.key}.title`),
    description: t(`softSkills.${skill.key}.description`),
  }));

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-10"
    >
      <Container>
        <div className="mx-auto max-w-8xl space-y-10">
          <header className="max-w-2xl space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-emerald-400">
              {t("skills.title")}
            </h2>
            <p className="text-zinc-300">{t("skills.subtitle")}</p>
          </header>

          <div className="grid gap-10 lg:grid-cols-2">
            <SkillsCarousel
              title={t("skills.hardTitle")}
              subtitle={t("skills.hardSubtitle")}
              items={translatedHardSkills}
            />

            <SkillsCarousel
              title={t("skills.softTitle")}
              subtitle={t("skills.softSubtitle")}
              items={translatedsoftSkills}
            />
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
