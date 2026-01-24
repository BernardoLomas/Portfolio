import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

interface Props {
  media: MediaItem[];
}

export default function ProjectMediaCarousel({ media }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

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
    <div className="relative w-full overflow-hidden rounded-xl border-2 border-emerald-400/40">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {media.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt || ""}
                  className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover rounded-xl"
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

      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-emerald-400 transition hover:bg-black/70"
      >
        ←
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-emerald-400 transition hover:bg-black/70"
      >
        →
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {media.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`
                            h-2 w-2 rounded-full transition
                            ${
                              index === selectedIndex
                                ? "bg-emerald-400"
                                : "bg-white/30 hover:bg-white/50"
                            }
                        `}
          />
        ))}
      </div>
    </div>
  );
}
