import { ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/shared/section-shell";
import { integrationLevels } from "@/data/home-content";

export function IntegrationLevelsSection(): React.ReactElement {
  return (
    <SectionShell
      eyebrow="Integration levels"
      title="Choose exactly how much automation your team wants."
      description="Vision Sync never forces aggressive automation. Start conservative and move up only when the team is ready."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {integrationLevels.map((item) => (
          <Card key={item.level} className="flex h-full flex-col p-5">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-cyan-200">{item.level}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm font-medium text-emerald-200">{item.safety}</p>
            <ul className="mt-5 flex-1 space-y-3 text-sm text-muted-foreground">
              {item.capabilities.map((capability) => (
                <li key={capability} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-cyan-50/75">{item.recommended}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
