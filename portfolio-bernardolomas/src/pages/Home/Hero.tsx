import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeUp } from "../../utils/motion";

export default function Hero() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="flex min-h-[70vh] flex-col justify-center gap-8"
    >

      <section className="flex min-h-[70vh] flex-col justify-center gap-8">
        <header className="space-y-4">
          <span className="text-sm uppercase tracking-widest text-emerald-400">
            Full Stack Software Developer
          </span>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Transforming{" "}
            <span className="text-emerald-400">ideas</span> into {" "}
            <span className="text-emerald-400">code</span> and {" "}
            <span className="text-emerald-400">code</span> into {" "}
            <span className="text-emerald-400">solutions</span>
          </h1>

          <p className="max-w-2xl text-lg text-zinc-300">
            Full Stack developer focused on web-development with Node.Js, TypeScript and React.
          </p>
        </header>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white/40"
          >
            Reach out
          </Link>
        </div>

        <div className="flex gap-6 pt-8 text-sm text-zinc-400">
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.Js</span>
          <span>APIs REST</span>
        </div>
      </section>
    </motion.section>
  );
}
