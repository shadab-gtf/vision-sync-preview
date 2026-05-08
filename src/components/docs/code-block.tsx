import { cn } from "@/lib/utils";

interface CodeBlockProps {
  readonly code: string;
  readonly language?: string;
  readonly title?: string;
  readonly className?: string;
}

export function CodeBlock({ code, language = "bash", title, className }: CodeBlockProps): React.ReactElement {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-panel", className)}>
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
          {title ? <span className="ml-2 text-xs text-muted-foreground">{title}</span> : null}
        </div>
        <span className="text-xs text-muted-foreground">{language}</span>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap break-words p-4 text-xs leading-7 text-cyan-50/90 sm:p-5 sm:text-sm">
        <code data-language={language}>{code}</code>
      </pre>
    </div>
  );
}
