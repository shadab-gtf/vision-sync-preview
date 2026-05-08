import { CheckCircle2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  readonly title?: string;
  readonly lines: readonly string[];
  readonly className?: string;
}

export function TerminalWindow({ title = "vision-sync", lines, className }: TerminalWindowProps): React.ReactElement {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 shadow-panel", className)}>
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-3 py-3 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="flex min-w-0 items-center gap-2 truncate text-xs text-muted-foreground">
          <Terminal className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{title}</span>
        </div>
      </div>
      <div className="space-y-3 p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm">
        {lines.map((line, index) => {
          const isSuccess = line.startsWith("OK ");
          return (
            <div
              key={`${line}-${index}`}
              className={cn("terminal-line flex items-start gap-2", isSuccess ? "text-emerald-200" : "text-cyan-100")}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {isSuccess ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <span className="text-cyan-400">$</span>}
              <span className="min-w-0 break-words">{isSuccess ? line.replace("OK ", "") : line}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
