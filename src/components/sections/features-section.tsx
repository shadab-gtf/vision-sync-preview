import { FeatureCard } from "@/components/shared/feature-card";
import { SectionShell } from "@/components/shared/section-shell";
import { featureCards } from "@/data/home-content";

export function FeaturesSection(): React.ReactElement {
  return (
    <SectionShell
      eyebrow="Features"
      title="Everything needed for safe frontend API synchronization."
      description="From OpenAPI parsing to rollback-safe writes, every subsystem is designed for production repositories."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((item) => <FeatureCard key={item.title} item={item} />)}
      </div>
    </SectionShell>
  );
}
