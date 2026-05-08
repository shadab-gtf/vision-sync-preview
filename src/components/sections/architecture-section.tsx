import { ArrowDown, Code2, FolderLock, FolderSync, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";
import { SectionShell } from "@/components/shared/section-shell";

const generatedRegion = `// @vision-generated-start
export interface Property {
  readonly id: string;
  readonly title: string;
}
// @vision-generated-end`;

export function ArchitectureSection(): React.ReactElement {
  return (
    <SectionShell
      id="architecture"
      eyebrow="Architecture"
      title="Generated code lives in explicit boundaries."
      description="Vision Sync separates developer-owned code, protected folders, generated files, and temporary recovery state."
    >
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="p-6">
          <div className="space-y-4">
            <BoundaryRow icon={<FolderLock className="h-5 w-5" />} title="developer-owned / protected" text="Pages, handcrafted UI, business logic, layouts, animations." tone="red" />
            <ArrowDown className="ml-5 h-5 w-5 text-muted-foreground" />
            <BoundaryRow icon={<ShieldCheck className="h-5 w-5" />} title="safe integration engine" text="Diff analysis, conflict detection, compiler validation, snapshots." tone="cyan" />
            <ArrowDown className="ml-5 h-5 w-5 text-muted-foreground" />
            <BoundaryRow icon={<FolderSync className="h-5 w-5" />} title="src/generated/vision" text="Types, clients, hooks, modules, and generated regions." tone="green" />
          </div>
        </Card>
        <div className="space-y-5">
          <CodeBlock code={generatedRegion} language="ts" title="generated boundary" />
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">AST transforms are never global rewrites.</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  When AST integration is enabled, Vision Sync targets explicit generated regions, deduplicates imports, validates syntax, and rejects unsafe conflicts before the write queue can commit.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}

interface BoundaryRowProps {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly text: string;
  readonly tone: "red" | "cyan" | "green";
}

function BoundaryRow({ icon, title, text, tone }: BoundaryRowProps): React.ReactElement {
  const toneClass = {
    red: "border-red-300/15 bg-red-300/8 text-red-100",
    cyan: "border-cyan-300/15 bg-cyan-300/8 text-cyan-100",
    green: "border-emerald-300/15 bg-emerald-300/8 text-emerald-100"
  }[tone];

  return (
    <div className={`rounded-2xl border p-5 ${toneClass}`}>
      <div className="flex items-start gap-4">
        <div className="mt-1">{icon}</div>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}
