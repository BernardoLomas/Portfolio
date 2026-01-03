import Seo from "../../components/seo/Seo";
import Hero from "./Hero";
import Highlights from "./Highlights";
import CallToAction from "./CallToAction";

export default function Home() {
  return (
    <>
        <Seo 
            title="Bernardo Lomas | Full Stack Developer"
            description="Full Stack Developer focused on React, TypeScript and NodeJs"
        />

      <div className="space-y-7">
        <Hero />
        <Highlights />
        <CallToAction />
      </div>
    </>
  );
}
