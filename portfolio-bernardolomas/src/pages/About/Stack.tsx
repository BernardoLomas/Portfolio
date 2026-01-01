import { stackData } from "../../data/stacks";
import StackGroup from "./StackGroup";

export default function Stack() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Tech Stack</h2>

      <StackGroup
        title="Technologies that i work with"
        items={stackData.main}
      />

      <StackGroup
        title="Currently improving"
        items={stackData.improving}
      />

      <StackGroup
        title="Planning to learn"
        items={stackData.future}
      />
    </section>
  );
}
