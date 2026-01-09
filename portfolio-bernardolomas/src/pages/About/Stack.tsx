import SectionHeader from "../../components/ui/SectionHeader";
import StackGroup from "./StackGroup";
import { main, improving, learning } from "../../data/stacks";

export default function Stack() {
  return (
    <div className="space-y-20">
      <div>
        <SectionHeader
          title="Main"
          subtitle="Technologies that i work with confidently in real projects"
          align="center"
        />
        <StackGroup items={main} />
      </div>

      <div>
        <SectionHeader
          title="Improving"
          subtitle="Technologies i actively use and deepen my knowledge"
          align="center"
        />
        <StackGroup items={improving} />
      </div>

      <div>
        <SectionHeader
          title="Learning"
          subtitle="Technologies that i plan to explore in the near future"
          align="center"
        />
        <StackGroup items={learning} />
      </div>
    </div>
  );
}
