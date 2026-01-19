type Item = {
  title: string;
  description: string;
};

type Props = {
  items: Item[];
  activeIndex: number;
};

export default function ExperienceTimeline({ items, activeIndex }: Props) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-white/15" />

      <div
        className="absolute left-4 top-0 w-px bg-emerald-400 transition-all duration-700 ease-out"
        style={{ height: `${activeIndex * 120}px` }}
      />

      <ul className="space-y-12">
        {items.map((item, index) => {
          const active = index === activeIndex;

          return (
            <li key={index} className="grid grid-cols-[32px_1fr] gap-6">
              <div className="relative flex justify-center">
                <span
                  className={`
                    h-6 w-6 rounded-full border-2 transition
                    ${
                      index <= activeIndex
                        ? "border-emerald-400 bg-emerald-400"
                        : "border-white/20 bg-zinc-950"
                    }
                  `}
                />
              </div>

              <div className="max-w-md">
                <h3
                  className={`text-lg font-semibold transition ${
                    active ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-1 text-sm transition ${
                    active ? "text-zinc-300" : "text-zinc-500"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
