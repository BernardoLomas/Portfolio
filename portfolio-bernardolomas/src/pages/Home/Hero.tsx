import { useState } from "react";
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeInUpSoft } from "../../utils/motion"
import HeroImage from "./HeroImage";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      variants={fadeInUpSoft}
      initial="hidden"
      animate="visible"
      className="flex min-h-[70vh] flex-col-reverse items-center gap-16 lg:flex-row lg:items-center lg:justify-between"
    >

      <section className="max-w-xl space-y-8">
        <header>
          <span className="text-sm uppercase tracking-widest text-emerald-400">
            Full Stack Software Developer
          </span>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Transforming{" "}
            <span className="text-emerald-400">ideas</span> into {" "}
            <span className="text-emerald-400">code</span> and {" "}
            <span className="text-emerald-400">code</span> into {" "}
            <span className="text-emerald-400">solutions</span>
          </h1>

          <p className="max-w-2xl text-lg font-semibold text-zinc-300">
            Full Stack developer focused on web-development with{" "}
            <span className="text-emerald-400">TypeScript, Nest.Js, React.Js</span> and {" "}
            <span className="text-emerald-400">Node.Js</span>
          </p>
        </header>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-md border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-emerald-400/40"
          >
            Projects
          </Link>

          <Link
            to="/About"
            className="rounded-md border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-emerald-400/40"
          >
            Stack
          </Link>

          <Link
            to="/contact"
            className="rounded-md border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-emerald-400/40"
          >
            Reach out
          </Link>
        </div>
      </section>

      <HeroImage onOpen={() => setOpen(true)} />
    </motion.section>
  );
}
