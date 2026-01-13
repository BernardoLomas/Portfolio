import { motion } from "framer-motion";
import { fadeInUp } from "../../components/motion/motion.presets";
import HeroImage from "./HeroImage";
import Button from "../../components/ui/Button";

export default function Hero() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="grid gap-20 text-center lg:grid-cols-2 lg:items-center lg:justify-center lg:text-left"
    >
      <div className="max-w-xl space-y-8 lg:ml-auto">

        <span className="text-sm uppercase tracking-widest text-emerald-400 space-x-8">
          Full Stack Software Developer
        </span>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Transforming <span className="text-emerald-400">ideas</span> into{" "}
          <span className="text-emerald-400">code</span> and{" "}
          <span className="text-emerald-400">code</span> into{" "}
          <span className="text-emerald-400">solutions</span>
        </h1>

        <p className="text-base font-semibold text-zinc-300 sm:text-lg">
          Full Stack developer focused on web-development with{" "}
          <span className="text-emerald-400">
            TypeScript, Nest.Js, React.Js
          </span>{" "}
          and <span className="text-emerald-400">Node.Js</span>
        </p>

        <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
          <Button to="/projects" variant="primary">Projects</Button>
          <Button to="/about">About me</Button>
          <a
            href="https://www.linkedin.com/in/bernardolomas/"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center justify-center rounded-md border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-emerald-400/40"
          >
            Reach out
          </a>
          <a
            href="/cv/Bernardo_Lomas_CV.pdf"
            download
            className="inline-flex items-center justify-center rounded-md border border-white/50 px-6 py-3 text-sm font-semibold transition hover:border-emerald-400/40"
          >
            Download CV
          </a>
        </div>
      </div>
      <HeroImage />
    </motion.section>
  );
}
