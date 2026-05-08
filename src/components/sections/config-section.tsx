import { Settings2 } from "lucide-react";
import { CodeBlock } from "@/components/docs/code-block";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/shared/section-shell";
import { configExample } from "@/data/home-content";

const configNotes = [
  ["schema", "Local file or remote OpenAPI URL."],
  ["output", "Generated code location and file names."],
  ["safety", "Preview mode, rollback, protected folders, atomic writes."],
  ["integration", "Automation level and AST transformation permissions."],
  ["generators", "Types, clients, hooks, modules, and query-library behavior."]
] as const;

export function ConfigSection(): React.ReactElement {
  return (
    <SectionShell
      id="config"
      eyebrow="Configuration"
      title="A safe control plane for generated integration code."
      description="The config file makes every boundary explicit: what can be generated, where it can be written, and how rollback should behave."
      align="left"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <CodeBlock code={configExample} language="ts" title="vision.config.ts" />
        <div className="space-y-4">
          {configNotes.map(([key, value]) => (
            <Card key={key} className="p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <Settings2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-cyan-100">{key}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
