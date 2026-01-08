import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { motion } from "framer-motion";
import { fadeInUp } from "../../components/motion/motion.presets";
import Hero from "./Hero";
import Highlights from "./Highlights";

export default function Home() {
  return (
    <>
      <Seo
        title="Bernardo Lomas | Full Stack Developer"
        description="Full Stack Developer focused on React, TypeScript and NodeJs"
      />

      <Section variant="hero">
        <Container>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <Hero />
          </motion.div>
        </Container>
      </Section>

      <Section variant="compact">
        <Container>
          <Highlights />
        </Container>
      </Section>
    </>
  );
}
