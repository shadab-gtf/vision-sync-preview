export const siteConfig = {
  name: "Vision Sync",
  tagline: "Deterministic frontend API synchronization for React and Next.js.",
  description:
    "Vision Sync is rollback-first infrastructure tooling for safe OpenAPI integration, AST-aware generated boundaries, and developer-owned UI architectures.",
  url: "https://vision-sync.arrowedge.in",
  github: "https://github.com/shadab-gtf/vision-sync",
  company: {
    name: "ArrowEdge",
    url: "https://www.arrowedge.in/"
  },
  developer: {
    name: "Shadab Choudhary"
  }
} as const;

export const navItems = [
  { label: "Why", href: "#what-is" },
  { label: "Install", href: "#installation" },
  { label: "CLI", href: "#cli" },
  { label: "Architecture", href: "#architecture" },
  { label: "Config", href: "#config" }
] as const;
