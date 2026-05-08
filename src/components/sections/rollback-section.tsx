import { History, RotateCcw, ShieldCheck, Undo2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { SectionShell } from "@/components/shared/section-shell";

const rollbackLines = [
  "vision-sync history",
  "OK vs_20260508_0012 sync 348905a",
  "vision-sync rollback vs_20260508_0012",
  "OK Snapshot restored",
  "OK Project returned to previous state"
] as const;

export function RollbackSection(): React.ReactElement {
  return (
    <SectionShell
      id="rollback"
      eyebrow="Rollback engine"
      title="Generation should always have an undo path."
      description="Vision Sync creates snapshots before write transactions so teams can recover from interrupted or unwanted generated changes."
    >
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <TerminalWindow title="rollback" lines={rollbackLines} />
        <div className="grid gap-4 sm:grid-cols-2">
          <RollbackCard icon={<History className="h-5 w-5" />} title="History" text="List every snapshot created before safe write transactions." />
          <RollbackCard icon={<RotateCcw className="h-5 w-5" />} title="Restore" text="Restore the latest checkpoint or a specific snapshot id." />
          <RollbackCard icon={<ShieldCheck className="h-5 w-5" />} title="Safe writes" text="Commit only after conflicts, checksums, and ownership checks pass." />
          <RollbackCard icon={<Undo2 className="h-5 w-5" />} title="Crash recovery" text="Automatically restore from snapshot when a write transaction fails." />
        </div>
      </div>
    </SectionShell>
  );
}

interface RollbackCardProps {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly text: string;
}

function RollbackCard({ icon, title, text }: RollbackCardProps): React.ReactElement {
  return (
    <Card className="p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">{icon}</div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p>
    </Card>
  );
}
