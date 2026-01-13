import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../components/motion/motion.presets";
import { process } from "../../data/process";

export default function Process() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-10"
    >
      <header className="max-w-2xl space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-emerald-400">
          From fundation to real impact
        </h2>
        <p className="text-zinc-300">
          My workflow is guided by a simple and effective cycle.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {process.map((step) => (
          <motion.article
            key={step.title}
            variants={fadeInUp}
            className="flex flex-col items-start gap-4 rounded-xl border border-white/10 bg-zinc-900/60 p-6 transition hover:border-emerald-400/40"
          >
            <img
              src={step.icon}
              className="h-10 w-15 transition [filter:brightness(0)_saturate(100%)_invert(75%)_sepia(81%)_saturate(364%)_hue-rotate(83deg)]"
            />

            <h3 className="text-xl font-semibold text-white">{step.title}</h3>

            <p className="text-sm text-zinc-300">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
