import { TerminalWindow } from "@/components/terminal/terminal-window";
import { SectionShell } from "@/components/shared/section-shell";
import { cliCommands, terminalSequences } from "@/data/home-content";

export function CliExperienceSection(): React.ReactElement {
  return (
    <SectionShell
      id="cli"
      eyebrow="CLI experience"
      title="Simple commands with infrastructure-grade feedback."
      description="The command surface stays small. The output stays human-readable. The workflow stays safe."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <TerminalWindow title="init" lines={terminalSequences.init} />
        <TerminalWindow title="sync" lines={terminalSequences.sync} />
        <TerminalWindow title="watch" lines={terminalSequences.watch} />
        <TerminalWindow title="rollback" lines={terminalSequences.rollback} />
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
        <div className="grid grid-cols-[0.9fr_1.2fr] border-b border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
          <span>Command</span>
          <span>Description</span>
        </div>
        {cliCommands.map((item) => (
          <div key={item.command} className="grid grid-cols-1 gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[0.9fr_1.2fr]">
            <code className="text-sm text-cyan-100">{item.command}</code>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
