import { useRef, useState, type KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";
import { useLocale } from "../../hooks/useLocale";
import Card from "../ui/Card";
type Tab = "highlights" | "challenges" | "learnings";
const tabs: Tab[] = ["highlights", "challenges", "learnings"];
const icons: Record<Tab, string> = {
  highlights: "/icons/key.svg",
  challenges: "/icons/puzzle.svg",
  learnings: "/icons/book.svg",
};
export default function EngineeringNotes({ project }: { project: Project }) {
  const [active, setActive] = useState<Tab>("highlights");
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const { t } = useTranslation();
  const locale = useLocale();
  const onKey = (event: KeyboardEvent, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? tabs.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) %
            tabs.length;
    setActive(tabs[next]);
    refs.current[next]?.focus();
  };
  return (
    <Card className="overflow-hidden">
      <div
        role="tablist"
        aria-label={t("caseStudy.tabsLabel")}
        className="flex overflow-x-auto border-b-2 border-white/10"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(node) => {
              refs.current[index] = node;
            }}
            id={`tab-${tab}`}
            role="tab"
            aria-selected={active === tab}
            aria-controls={`panel-${tab}`}
            tabIndex={active === tab ? 0 : -1}
            onClick={() => setActive(tab)}
            onKeyDown={(event) => onKey(event, index)}
            className={`flex min-w-fit flex-1 items-center justify-center gap-2 px-4 py-4 text-sm font-semibold transition ${active === tab ? "bg-emerald-400/10 text-emerald-300" : "text-zinc-400 hover:bg-white/5 hover:text-white"}`}
          >
            <img src={icons[tab]} alt="" className="h-5 w-5 emerald-icon" />
            {t(`caseStudy.${tab}`)}
          </button>
        ))}
      </div>
      <div
        key={active}
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="journey-enter p-6 sm:p-8"
      >
        <ul className="space-y-3">
          {project[active][locale].map((note) => (
            <li key={note} className="flex gap-3 text-zinc-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
