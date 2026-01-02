import Seo from "../../components/seo/Seo";
import Bio from "./Bio";
import Metrics from "./Metrics";
import Process from "./Process";
import Stack from "./Stack";
import Experience from "./Experience";

export default function About() {
  return (
    <>
      <Seo title="About | Bernardo Lomas" description="More about my history" />
      <div className="space-y-10">
        <Bio />
        <Metrics />
        <Process />
        <Stack />
        <Experience />
      </div>
    </>
  );
}
