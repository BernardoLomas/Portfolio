import Card from "../../components/ui/Card"

type Item = {
  name: string;
  icon: string;
};

type Props = {
  item: Item;
}

export default function StackCard({ item }: Props) {
  return (
    <Card className="aspect-square flex flex-col items-center justify-center gap-4 rounded-2xl text-center transition hover:scale-[1.03]">
      <img
        src={item.icon}
        alt={item.name}
        className="h-20 w-15 transition [filter:brightness(0)_saturate(100%)_invert(75%)_sepia(81%)_saturate(364%)_hue-rotate(83deg)]"
      />

      <span className="text-sm font-semibold text-emerald-400">
        {item.name}
      </span>
    </Card>
  );
}
