import { FeatureCard } from "@/components/shared/feature-card";
import { SectionShell } from "@/components/shared/section-shell";
import { philosophyCards } from "@/data/home-content";

export function PhilosophySection(): React.ReactElement {
  return (
    <SectionShell
      eyebrow="Core philosophy"
      title="Automation should earn trust before it writes code."
      description="Vision Sync is built around deterministic generation, reversible writes, and strict ownership boundaries."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {philosophyCards.map((item) => <FeatureCard key={item.title} item={item} />)}
      </div>
    </SectionShell>
  );
}
