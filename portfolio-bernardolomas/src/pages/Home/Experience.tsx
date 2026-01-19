import { useState } from "react";
import { useTranslation } from "react-i18next";
import { homeExperience } from "../../data/experiences";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceCarousel from "./ExperienceCarousel";

export default function ExperienceSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = homeExperience.map((item) => ({
    title: t(`homeExperience.${item.key}.title`),
    description: t(`homeExperience.${item.key}.description`),
    image: item.image,
  }));

  return (
    <section className="space-y-12">
      <header className="mx-auto max-w-2xl space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          {t("homeExperience.title")}
        </h2>
        <p className="text-zinc-300">
          {t("homeExperience.subtitle")}
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <ExperienceTimeline
          items={items}
          activeIndex={activeIndex}
        />

        <ExperienceCarousel
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </section>
  );
}
