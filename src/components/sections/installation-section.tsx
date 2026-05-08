import { CodeBlock } from "@/components/docs/code-block";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/shared/section-shell";
import { packageManagers } from "@/data/home-content";

export function InstallationSection(): React.ReactElement {
  return (
    <SectionShell
      id="installation"
      eyebrow="Installation"
      title="Install once, preview before every write."
      description="Vision Sync works with npm, pnpm, yarn, and bun. The CLI is intentionally small and starts in safe mode."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {packageManagers.map((manager) => (
          <Card key={manager.name} className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">{manager.name}</h3>
              <span className="text-xs text-muted-foreground">recommended</span>
            </div>
            <CodeBlock code={manager.command} title={manager.name} />
          </Card>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-300/8 p-5 text-sm leading-7 text-cyan-50/82">
        Start with <code className="rounded bg-white/10 px-1.5 py-1">vision-sync init</code>. The setup flow detects your project and creates a conservative config with previews and rollback enabled.
      </div>
    </SectionShell>
  );
}
