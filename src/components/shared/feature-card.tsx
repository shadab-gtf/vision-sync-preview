import type { FeatureItem } from "@/types/content";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { iconMap } from "@/components/shared/icon-map";

interface FeatureCardProps {
  readonly item: FeatureItem;
}

export function FeatureCard({ item }: FeatureCardProps): React.ReactElement {
  const Icon = iconMap[item.icon];

  return (
    <Card className="group h-full transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
      <CardHeader>
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-200/35 group-hover:bg-cyan-300/15">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
