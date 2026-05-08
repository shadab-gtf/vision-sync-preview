import { CheckCircle2, Eye, LockKeyhole, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/shared/section-shell";
import { siteConfig } from "@/config/site";

const trustItems = [
  { icon: CheckCircle2, title: "Predictable tooling", text: "Same schema, same config, same output." },
  { icon: Eye, title: "No hidden magic", text: "Diffs, generated markers, and rollback history are visible." },
  { icon: LockKeyhole, title: "Safe generation", text: "Developer-owned UI stays protected by default." },
  { icon: Sparkles, title: "Enterprise reliability", text: "Compiler validation and atomic writes guard every transaction." }
] as const;

export function TrustSection(): React.ReactElement {
  return (
    <SectionShell
      eyebrow="Developer trust"
      title="The tool should feel careful before it feels powerful."
      description="Vision Sync is built for teams that want automation without losing architectural control."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </Card>
          );
        })}
      </div>
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.045] p-8 text-center shadow-panel">
        <h3 className="text-2xl font-semibold text-white">Make frontend API integration safe enough to automate.</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
          Vision Sync gives developers the speed of generation with the reviewability of infrastructure-grade tooling.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild>
            <Link href={siteConfig.github} target="_blank" rel="noreferrer">View GitHub Repository</Link>
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
