import Seo from "../../components/seo/Seo";
import Hero from "./Hero";
import Highlights from "./Highlights";
import CallToAction from "./CallToAction";

export default function Home() {
  return (
    <>
        <Seo 
            title="Bernardo Lomas | Full Stack Developer"
            description="Desenvolvedor full stack"
        />

      <div className="space-y-24">
        <Hero />
        <Highlights />
        <CallToAction />
      </div>
    </>
  );
}
