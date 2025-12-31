import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/motion";
import { metrics } from "../../data/metrics";

export default function Metrics() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {metrics.map((item) => (
        <motion.article
          key={item.label}
          variants={fadeUp}
          className="rounded-xl border border-white/10 bg-zinc-900/60 p-6"
        >
          <span className="text-4xl font-bold text-emerald-300">
            {item.value}
          </span>

          <h3 className="mt-2 text-lg font-semibold text-white">
            {item.label}
          </h3>

          <p className="mt-1 text-sm text-zinc-300">{item.description}</p>
        </motion.article>
      ))}
    </motion.section>
  );
}
