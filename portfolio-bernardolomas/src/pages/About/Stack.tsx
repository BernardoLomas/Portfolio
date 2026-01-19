import SectionHeader from "../../components/ui/SectionHeader";
import StackGroup from "./StackGroup";
import { main, improving, learning } from "../../data/stacks";
import { useTranslation } from "react-i18next";

export default function Stack() {
  const { t } = useTranslation();

  return (
    <div className="space-y-20">
      <div>
        <SectionHeader
          title={t("stack.groups.main.title")}
          subtitle={t("stack.groups.main.subtitle")}
          align="center"
        />
        <StackGroup items={main} />
      </div>

      <div>
        <SectionHeader
          title={t("stack.groups.improving.title")}
          subtitle={t("stack.groups.improving.subtitle")}
          align="center"
        />
        <StackGroup items={improving} />
      </div>

      <div>
        <SectionHeader
          title={t("stack.groups.learning.title")}
          subtitle={t("stack.groups.learning.subtitle")}
          align="center"
        />
        <StackGroup items={learning} />
      </div>
    </div>
  );
}
