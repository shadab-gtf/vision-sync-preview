import { ArrowRight, BookOpenCheck, Code2, RotateCcw, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";

const pathItems = [
  {
    icon: BookOpenCheck,
    title: "Start with the mental model",
    text: "Vision Sync owns generated boundaries. Your UI, styling, animations, and business logic stay developer-owned.",
    href: "#architecture"
  },
  {
    icon: ShieldCheck,
    title: "Use preview mode first",
    text: "Every new schema should be reviewed with --preview so the team sees exactly which files would change.",
    href: "#quick-start"
  },
  {
    icon: Code2,
    title: "Import generated primitives",
    text: "Use generated types, clients, and hooks like normal TypeScript modules. No app-wide runtime wrapper is required.",
    href: "#config"
  },
  {
    icon: RotateCcw,
    title: "Keep rollback close",
    text: "Before accepting generated changes, know how to inspect history and restore the latest snapshot.",
    href: "#rollback"
  }
] as const;

export function DeveloperPathSection(): React.ReactElement {
  return (
    <SectionShell
      eyebrow="Developer guide"
      title="Read the docs in the order developers actually need."
      description="The page is structured as a learning path: trust model first, commands second, architecture before automation."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {pathItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="p-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Read {index + 1}</p>
                  <h3 className="mt-2 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                  <Button asChild variant="ghost" size="sm" className="mt-3 px-0 text-cyan-100 hover:bg-transparent">
                    <Link href={item.href}>
                      Jump to section
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}
