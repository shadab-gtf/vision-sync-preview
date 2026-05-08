import { ArrowRight, FileCode2, ShieldAlert, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FeatureCard } from "@/components/shared/feature-card";
import { SectionShell } from "@/components/shared/section-shell";
import { problemCards } from "@/data/home-content";

export function WhatIsSection(): React.ReactElement {
  return (
    <SectionShell
      id="what-is"
      eyebrow="What is Vision Sync?"
      title="API integration infrastructure, not a page rewriting tool."
      description="Vision Sync exists because frontend teams need generated API code they can trust. It keeps generated output isolated, visible, and reversible."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {problemCards.map((item) => <FeatureCard key={item.title} item={item} />)}
      </div>
      <Card className="mt-8 overflow-hidden p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
          <DiagramNode icon={<FileCode2 className="h-5 w-5" />} title="OpenAPI schema" text="Backend contract changes" />
          <ArrowRight className="hidden h-5 w-5 text-cyan-200 lg:block" />
          <DiagramNode icon={<Workflow className="h-5 w-5" />} title="Deterministic engine" text="Diff, validate, preview" />
          <ArrowRight className="hidden h-5 w-5 text-cyan-200 lg:block" />
          <DiagramNode icon={<ShieldAlert className="h-5 w-5" />} title="Safe frontend output" text="Generated boundaries only" />
        </div>
      </Card>
    </SectionShell>
  );
}

interface DiagramNodeProps {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly text: string;
}

function DiagramNode({ icon, title, text }: DiagramNodeProps): React.ReactElement {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
        {icon}
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
