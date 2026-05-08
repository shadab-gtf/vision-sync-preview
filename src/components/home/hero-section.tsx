import { ArrowRight, Github, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { terminalSequences } from "@/data/home-content";
import { siteConfig } from "@/config/site";

export function HeroSection(): React.ReactElement {
  return (
    <section id="top" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="grid-mask absolute inset-0 -z-10 opacity-80" />
      <div className="container grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <Badge className="gap-2">
            <ShieldCheck className="h-3.5 w-3.5" />
            Safe frontend infrastructure tooling
          </Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            Vision Sync
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-xl leading-9 text-cyan-50/86 sm:text-2xl">
            Deterministic API synchronization for React and Next.js teams that care about safe generation, rollback, and developer-owned UI.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Generate typed clients, hooks, modules, and AST-safe integration previews from OpenAPI schemas without handing your codebase to unsafe automation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#quick-start">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={siteConfig.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <span className="block text-lg font-semibold text-white">0</span>
              hidden runtime wrappers
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <span className="block text-lg font-semibold text-white">100%</span>
              previewable writes
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <span className="block text-lg font-semibold text-white">AST</span>
              safe by boundary
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
          <TerminalWindow lines={terminalSequences.hero} className="mx-auto max-w-xl" />
        </div>
      </div>
    </section>
  );
}
