import { useState } from "react";
import { useTranslation } from "react-i18next";
import { experiences } from "../../data/experience";
import { useLocale } from "../../hooks/useLocale";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
export default function ProfessionalJourney() {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  const locale = useLocale();
  const item = experiences[active];
  const select = (i: number) =>
    setActive((i + experiences.length) % experiences.length);
  return (
    <div>
      <SectionHeading
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
        description={t("experience.description")}
      />
      <div className="mt-10 overflow-x-auto pb-3">
        <div className="relative flex min-w-[620px] justify-between px-4 before:absolute before:left-10 before:right-10 before:top-3 before:h-0.5 before:bg-white/15">
          {experiences.map((entry, index) => (
            <button
              key={`${entry.organization.en}-${index}`}
              type="button"
              onClick={() => select(index)}
              aria-label={`${t("experience.select")}: ${entry.organization[locale]}`}
              aria-current={active === index ? "step" : undefined}
              className="group relative z-10 flex w-32 flex-col items-center gap-3 text-center"
            >
              <span
                className={`h-6 w-6 rounded-full border-4 border-zinc-950 transition ${active === index ? "bg-emerald-400 ring-4 ring-emerald-400/20" : "bg-zinc-600 group-hover:bg-emerald-500"}`}
              />
              <span
                className={`text-sm font-semibold ${active === index ? "text-emerald-300" : "text-zinc-400"}`}
              >
                {entry.label[locale]}
              </span>
            </button>
          ))}
        </div>
      </div>
      <Card key={active} className="journey-enter mt-6 p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              {t(`experience.${item.category}`)}
            </span>
            <h3 className="mt-4 text-2xl font-bold">{item.role[locale]}</h3>
            <p className="mt-1 font-semibold text-emerald-300">
              {item.organization[locale]}
            </p>
            <p className="mt-4 text-left leading-7 text-zinc-300 md:text-justify">
              {item.description[locale]}
            </p>
            <ul className="mt-5 grid gap-3 text-sm text-zinc-400 sm:grid-cols-2">
              {item.points[locale].map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => select(active - 1)}
              aria-label={t("experience.previous")}
              className="icon-button"
            >
              <Icon name="arrow-left" />
            </button>
            <button
              type="button"
              onClick={() => select(active + 1)}
              aria-label={t("experience.next")}
              className="icon-button"
            >
              <Icon name="arrow-right" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
