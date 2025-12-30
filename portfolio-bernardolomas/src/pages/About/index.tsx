import Seo from "../../components/seo/Seo";
import Bio from "./Bio";
import Stack from "./Stack";
import Experience from "./Experience";

export default function About() {
  return (
    <>
      <Seo
        title="Bernardo Lomas | Full Stack Developer"
        description="Desenvolvedor full stack"
      />
      <div className="space-y-24">
        <Bio />
        <Stack />
        <Experience />
      </div>
    </>
  );
}
