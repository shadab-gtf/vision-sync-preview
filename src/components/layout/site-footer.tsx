import { ArrowUpRight, Github, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "Quick Start", href: "#quick-start" },
  { label: "CLI", href: "#cli" },
  { label: "Architecture", href: "#architecture" },
  { label: "Rollback", href: "#rollback" },
  { label: "GitHub", href: siteConfig.github },
  { label: "ArrowEdge", href: siteConfig.company.url }
] as const;

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-white">Vision Sync</p>
              <p className="text-sm text-muted-foreground">Built by {siteConfig.developer.name}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
            Documentation platform for deterministic frontend API synchronization, rollback-first generation, and safe AST-powered integration workflows.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {footerLinks.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <Link
                key={link.href}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-white"
              >
                {link.label}
                {external ? <ArrowUpRight className="h-3.5 w-3.5" /> : null}
              </Link>
            );
          })}
          <Link href={siteConfig.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-white">
            <Github className="h-4 w-4" />
            Source
          </Link>
        </div>
      </div>
    </footer>
  );
}
