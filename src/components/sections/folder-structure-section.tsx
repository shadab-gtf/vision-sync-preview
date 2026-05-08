import { FolderTree } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/shared/section-shell";

const tree = `my-app/
├─ app/
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ sections/
│  └─ ui/
├─ lib/
│  └─ api/
├─ src/
│  └─ generated/
│     └─ vision/
│        ├─ types.ts
│        ├─ client.ts
│        ├─ hooks.ts
│        └─ modules/
├─ .vision/
│  ├─ cache/
│  └─ snapshots/
├─ openapi.json
└─ vision.config.ts`;

export function FolderStructureSection(): React.ReactElement {
  return (
    <SectionShell
      eyebrow="Folder structure"
      title="Clear ownership by directory."
      description="Generated output is easy to inspect, easy to review, and easy to remove."
    >
      <Card className="overflow-hidden">
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-5 py-4">
          <FolderTree className="h-5 w-5 text-cyan-200" />
          <span className="text-sm font-medium text-white">production project layout</span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-cyan-50/90">
          {tree}
        </pre>
      </Card>
    </SectionShell>
  );
}
