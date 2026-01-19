import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Item = {
  title: string;
  image: string;
};

type Props = {
  items: Item[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 200 : -200,
    opacity: 0,
  }),
};

export default function ExperienceCarousel({
  items,
  activeIndex,
  setActiveIndex,
}: Props) {
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % items.length;
      }
      return prev === 0 ? items.length - 1 : prev - 1;
    });
  };

  const current = items[activeIndex];

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className="relative h-80 w-full overflow-hidden rounded-2xl border border-white/10">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={activeIndex}
            src={current.image}
            alt={current.title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        <button
          onClick={() => paginate(-1)}
          className="
            absolute
            left-3
            top-1/2
            z-10
            -translate-y-1/2
            rounded-full
            bg-black/30
            p-2
            text-white
            backdrop-blur-sm
            transition
            hover:text-emerald-400
          "
        >
          ←
        </button>

        <button
          onClick={() => paginate(1)}
          className="
            absolute
            right-3
            top-1/2
            z-10
            -translate-y-1/2
            rounded-full
            bg-black/30
            p-2
            text-white
            backdrop-blur-sm
            transition
            hover:text-emerald-400
          "
        >
          →
        </button>
      </div>

      <h4 className="text-center text-lg font-semibold text-emerald-400">
        {current.title}
      </h4>
    </div>
  );
}
