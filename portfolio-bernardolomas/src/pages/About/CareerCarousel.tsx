import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { careerMoments } from "../../data/career";

export default function CareerCarousel() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % careerMoments.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? careerMoments.length - 1 : prev - 1
    );

  const current = careerMoments[index];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.image}
            src={current.image}
            alt={current.title}
            className="h-56 w-full object-cover sm:h-64"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </AnimatePresence>


        <button
          onClick={prev}
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-zinc-950/70
            px-3
            py-1.5
            text-xs
            text-zinc-200
            backdrop-blur
            transition
            hover:text-emerald-400
          "
        >
          ←
        </button>


        <button
          onClick={next}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-zinc-950/70
            px-3
            py-1.5
            text-xs
            text-zinc-200
            backdrop-blur
            transition
            hover:text-emerald-400
          "
        >
          →
        </button>
      </div>


      <h3 className="text-sm font-semibold text-emerald-400">
        {current.title}
      </h3>
    </div>
  );
}
