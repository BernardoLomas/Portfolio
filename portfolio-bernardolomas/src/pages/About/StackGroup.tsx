import StackCard from "./StackCard";

type Props = {
    title: string;
    items: { name: string; icon: any }[];
}

export default function StackGroup({ title, items }: Props) {
    return (
        <section className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
                {title}
            </h3>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
                {items.map((item) => (
                    <StackCard key={item.name} {...item} />
                ))}
            </div>
        </section>
    )
}