import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = {
  title: string;
  description: string;
};

type Props = {
  title: string;
  subtitle: string;
  items: Skill[];
};

export default function SkillsCarousel({ title, subtitle, items }: Props) {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % items.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  const current = items[index];

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-emerald-400">{title}</h3>
        <p className="text-sm text-zinc-400">{subtitle}</p>
      </div>

      <div className="overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.article
            key={current.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              rounded-xl
              border
              border-white/10
              bg-zinc-900/60
              p-6
            "
          >
            <h4 className="mb-2 text-lg font-semibold text-emerald-400">
              {current.title}
            </h4>
            <p className="text-sm text-zinc-300">
              {current.description}
            </p>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="
            rounded-full
            border
            border-white/10
            px-4
            py-1.5
            text-xs
            text-zinc-300
            transition
            hover:border-emerald-400/40
            hover:text-emerald-400
          "
        >
          ← Prev
        </button>

        <button
          onClick={next}
          className="
            rounded-full
            border
            border-white/10
            px-4
            py-1.5
            text-xs
            text-zinc-300
            transition
            hover:border-emerald-400/40
            hover:text-emerald-400
          "
        >
          Next →
        </button>
      </div>
    </div>
  );
}
