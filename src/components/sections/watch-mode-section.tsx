import { Activity, FileCode2, RefreshCcw, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/shared/section-shell";

const steps = [
  { icon: FileCode2, label: "Schema changes", text: "GET /properties added" },
  { icon: RefreshCcw, label: "Affected files", text: "hooks + types regenerated" },
  { icon: ShieldCheck, label: "Safety checks", text: "no unsafe writes detected" }
] as const;

export function WatchModeSection(): React.ReactElement {
  return (
    <SectionShell
      eyebrow="Watch mode"
      title="Real-time schema sync without losing safety."
      description="Watch mode monitors a local OpenAPI file, validates changes, and regenerates only affected integrations."
    >
      <Card className="overflow-hidden p-4 sm:p-6">
        <div className="mb-6 flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-cyan-100">
          <Activity className="h-5 w-5 shrink-0" />
          <code className="min-w-0 break-words">vision-sync watch --schema ./openapi.json</code>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="watch-step relative rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">{step.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                <div className="watch-progress mt-5 h-1 rounded-full bg-cyan-300" style={{ animationDelay: `${220 + index * 140}ms` }} />
              </div>
            );
          })}
        </div>
      </Card>
    </SectionShell>
  );
}
