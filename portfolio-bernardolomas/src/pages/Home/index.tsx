import Hero from "./Hero"
import Highlights from "./Highlights";
import CallToAction from "./CallToAction";

export default function Home() {
    return (
        <div className="space-y-24">
            <Hero />
            <Highlights />
            <CallToAction />
        </div>
    );
}