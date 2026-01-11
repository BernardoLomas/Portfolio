import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { careerMoments } from "../../data/career";

export default function CareerCarousel() {
    const [index, setIndex] = useState(0);
    
    const next = () =>
        setIndex((prev) => (prev + 1) % careerMoments.length)
    const prev = () =>
        setIndex((prev) =>   
            prev === 0 ? careerMoments.length - 1 : prev - 1
    )

    const current = careerMoments[index];

    return (
        <div className="mt-16 flex flex-col items-center gap-6">
            <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl">
                <AnimatePresence mode ="wait">
                    <motion.img
                        key={current.image}
                        src={current.image}
                        alt={current.title}
                        className="h-64 w-full object-cover sm:h-80"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                </AnimatePresence>
            </div>

            <div className="max-w-xl text-center space-y-2">
                <h3 className="text-lg font-semibold text-emerald-400">
                    {current.title}
                </h3>
                <p className="text-sm text-zinc-300">
                    {current.description}
                </p>
            </div>

            <div className="flex-gap-4">
                <button
                    onClick={prev}
                    className="text-sm text-zinc-400 hover:text-emerald-400"
                >
                    Prev
                </button>
                <button
                    onClick={next}
                    className="text-sm text-zinc-400 hover:text-emerald-400"
                >
                    Next
                </button>
            </div>
        </div>
    )


}
