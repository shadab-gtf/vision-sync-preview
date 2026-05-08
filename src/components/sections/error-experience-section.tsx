import { TriangleAlert } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/shared/section-shell";

export function ErrorExperienceSection(): React.ReactElement {
  return (
    <SectionShell
      eyebrow="Error experience"
      title="Errors explain the risk and the fix."
      description="Vision Sync avoids cryptic compiler dumps for safety failures. The CLI tells developers what happened, why it stopped, and what to do next."
    >
      <Card className="mx-auto max-w-3xl overflow-hidden">
        <div className="border-b border-red-300/15 bg-red-300/8 px-6 py-4 text-red-100">
          <div className="flex items-center gap-3 font-semibold">
            <TriangleAlert className="h-5 w-5" />
            Unsafe transformation prevented
          </div>
        </div>
        <div className="space-y-5 p-6 text-sm leading-7">
          <ErrorBlock label="Reason" text="Protected component boundary detected." />
          <ErrorBlock label="Suggested Fix" text="Move integration target into generated region." />
          <ErrorBlock label="Result" text="No files were modified." />
        </div>
      </Card>
    </SectionShell>
  );
}

interface ErrorBlockProps {
  readonly label: string;
  readonly text: string;
}

function ErrorBlock({ label, text }: ErrorBlockProps): React.ReactElement {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">{label}</p>
      <p className="mt-2 text-muted-foreground">{text}</p>
    </div>
  );
}
