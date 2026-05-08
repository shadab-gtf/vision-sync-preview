import { CheckCircle2 } from "lucide-react";
import { CodeBlock } from "@/components/docs/code-block";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/shared/section-shell";
import { quickStartSteps } from "@/data/home-content";

export function QuickStartSection(): React.ReactElement {
  return (
    <SectionShell
      id="quick-start"
      eyebrow="Quick start"
      title="A beginner-friendly path from install to rollback."
      description="Each step explains what to run, what happens, and why it matters for safety."
      align="left"
    >
      <div className="space-y-5">
        {quickStartSteps.map((step) => (
          <Card key={step.step} className="overflow-hidden p-4 sm:p-5 lg:p-6">
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-start">
              <div>
                <span className="text-sm font-semibold text-cyan-200">STEP {step.step}</span>
                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Why this matters</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.why}</p>
                </div>
              </div>
              <div className="space-y-4">
                <CodeBlock code={step.command} title="command" />
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 font-mono text-xs text-emerald-200 sm:text-sm">
                  {step.output.map((line) => (
                    <div key={line} className="flex gap-2 py-1">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                      <span className="min-w-0 break-words">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
