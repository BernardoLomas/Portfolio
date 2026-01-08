import { useState } from "react";
import { motion } from "framer-motion"
import { fadeInUp } from "../../components/motion/motion.presets";
import HeroImage from "./HeroImage";
import Button from "../../components/ui/Button";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="flex min-h-[70vh] flex-col-reverse items-center gap-16 lg:flex-row lg:items-center lg:justify-between"
    >

      <div className="max-w-xl space-y-8">
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


        <div className="flex flex-wrap gap-4">
          <Button to="/projects">Projects</Button>
          <Button to="/about">Stack</Button>
          <Button to="/contact">Reach out</Button>
        </div>
      </div>

      <HeroImage onOpen={() => setOpen(true)} />
    </motion.section>
  );
}
