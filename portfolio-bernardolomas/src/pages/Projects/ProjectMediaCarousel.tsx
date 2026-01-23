import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type MediaItem = {
    type: "image" | "video";
    src: string;
    alt?: string;
}

interface Props {
    media: MediaItem[];
}

export default function ProjectMediaCarousel({ media }: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative w-full overflow-hidden rounded-xl">
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                    {media.map((item, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_100%] min-w-0 relative"
                        >
                            {item.type === "image" ? (
                                <img
                                    src={item.src}
                                    alt={item.alt || ""}
                                    className="w-full h-[300px] object-cover rounded-xl"
                                    loading="lazy"
                                />
                            ) : (
                                <video
                                    src={item.src}
                                    controls
                                    className="w-full h-[300px] object-cover rounded-xl"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {media.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`
                            h-2 w-2 rounded-full transition
                            ${index === selectedIndex
                                ? "bg-emerald-400"
                                : "bg-white/30 hover:bg-white/50"}
                        `}
                    />
                ))}
            </div>
        </div>
    );
}