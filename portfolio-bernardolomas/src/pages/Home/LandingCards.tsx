import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import { landingPages } from "../../data/landingPages";

export default function LandingCards() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Atuações"
        subtitle="Escolha a landing page que melhor representa a frente profissional que você quer conhecer."
        align="center"
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {landingPages.map((page) => (
          <Card key={page.slug} className="flex flex-col gap-5">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                {page.accent}
              </span>
              <h3 className="text-xl font-bold text-white">{page.title}</h3>
              <p className="text-sm leading-6 text-zinc-300">{page.summary}</p>
            </div>
            <div className="mt-auto">
              <Button to={`/${page.slug}`} variant="primary">
                Conhecer frente
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
