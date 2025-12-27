import Hero from "./Hero"
import Highlights from "./Highlights";

export default function Home() {
    return (
        <div className="space-y-24">
            <Hero />
            <Highlights />
        </div>
    );
}