import { ArrowUpRight, Github, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/config/site";

export function SiteHeader(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/72 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="#top" className="flex items-center gap-3" aria-label="Vision Sync home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="font-semibold text-white">Vision Sync</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href={siteConfig.company.url} target="_blank" rel="noreferrer">
              ArrowEdge
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href={siteConfig.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
