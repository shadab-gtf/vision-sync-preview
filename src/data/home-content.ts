import type { CommandItem, FeatureItem, IntegrationLevel, QuickStartStep } from "@/types/content";

export const problemCards: readonly FeatureItem[] = [
  {
    title: "Frontend API drift",
    description: "Schemas evolve, endpoints change, and handcrafted clients silently fall behind backend contracts.",
    icon: "GitCompareArrows"
  },
  {
    title: "Unsafe generators",
    description: "Traditional generators can overwrite files, ignore architecture, and create noisy diffs developers stop trusting.",
    icon: "TriangleAlert"
  },
  {
    title: "AST risk",
    description: "Code transforms are powerful, but without strict boundaries they can mutate business logic or handcrafted UI.",
    icon: "Code2"
  }
] as const;

export const philosophyCards: readonly FeatureItem[] = [
  {
    title: "Deterministic generation",
    description: "The same schema and config produce the same inspectable output every time.",
    icon: "Workflow"
  },
  {
    title: "Rollback-first architecture",
    description: "Snapshots are created before writes so every generation has a clear recovery path.",
    icon: "RotateCcw"
  },
  {
    title: "Developer-owned UI",
    description: "Pages, animations, design systems, and business logic remain immutable by default.",
    icon: "LockKeyhole"
  },
  {
    title: "Compile-time output",
    description: "Vision Sync prefers static generated files over runtime reflection or hidden wrappers.",
    icon: "PackageCheck"
  },
  {
    title: "Transparent transforms",
    description: "Every transformation is previewable, explainable, diffable, and permission-gated.",
    icon: "Eye"
  },
  {
    title: "Zero-runtime overhead",
    description: "Generated clients and hooks are small, direct, tree-shakeable, and easy to delete.",
    icon: "Gauge"
  }
] as const;

export const featureCards: readonly FeatureItem[] = [
  {
    title: "AST-safe transforms",
    description: "Uses ts-morph traversal, deterministic node targeting, import deduplication, and compiler validation.",
    icon: "Code2"
  },
  {
    title: "Rollback engine",
    description: "Creates checkpoints before write transactions and restores safely when generation is interrupted.",
    icon: "RotateCcw"
  },
  {
    title: "Preview mode",
    description: "Shows affected files, reasons, and compact diff previews before touching the filesystem.",
    icon: "Eye"
  },
  {
    title: "Incremental generation",
    description: "Regenerates only changed schema regions instead of rewriting an entire frontend project.",
    icon: "RefreshCcw"
  },
  {
    title: "Schema diffing",
    description: "Compares operation checksums to classify added, changed, unchanged, and removed endpoints.",
    icon: "GitCompareArrows"
  },
  {
    title: "Generated boundaries",
    description: "Generated files and regions are clearly marked with visible ownership markers.",
    icon: "Layers3"
  },
  {
    title: "OpenAPI support",
    description: "Reads JSON and YAML OpenAPI schemas and emits typed clients, hooks, and modules.",
    icon: "FileCode2"
  },
  {
    title: "Watch mode",
    description: "Watches local schemas and safely regenerates affected integrations as contracts change.",
    icon: "Activity"
  },
  {
    title: "Safe write system",
    description: "Routes writes through conflict detection, atomic writes, checksums, and rollback snapshots.",
    icon: "ShieldCheck"
  },
  {
    title: "Compiler validation",
    description: "Generated and transformed TypeScript must validate before changes can be committed.",
    icon: "CheckCircle2"
  },
  {
    title: "Enterprise reliability",
    description: "Built for monorepos, large schemas, strict boundaries, and reviewable infrastructure workflows.",
    icon: "Boxes"
  },
  {
    title: "Protected regions",
    description: "Keeps custom components, cinematic layouts, and manual business logic off limits by default.",
    icon: "LockKeyhole"
  }
] as const;

export const packageManagers = [
  { name: "npm", command: "npm install vision-sync" },
  { name: "pnpm", command: "pnpm add vision-sync" },
  { name: "yarn", command: "yarn add vision-sync" },
  { name: "bun", command: "bun add vision-sync" }
] as const;

export const quickStartSteps: readonly QuickStartStep[] = [
  {
    step: "01",
    title: "Install package",
    description: "Add Vision Sync to your frontend workspace as infrastructure tooling.",
    command: "npm install vision-sync",
    why: "This adds the CLI and deterministic generator without changing your application runtime.",
    output: ["vision-sync added", "CLI available", "No source files modified"]
  },
  {
    step: "02",
    title: "Initialize project",
    description: "Let the CLI detect your framework, package manager, and API architecture.",
    command: "npx vision-sync init",
    why: "The generated config starts conservative: previews, rollback, and safe mode are enabled.",
    output: ["Next.js detected", "TypeScript detected", "Safe mode enabled", "vision.config.ts created"]
  },
  {
    step: "03",
    title: "Configure schema",
    description: "Point Vision Sync at your OpenAPI document from a local file or URL.",
    command: "vision-sync sync --schema ./openapi.json --preview",
    why: "Preview mode validates the schema and shows planned files without writing anything.",
    output: ["Schema validated", "42 endpoints discovered", "18 entities detected"]
  },
  {
    step: "04",
    title: "Run sync",
    description: "Generate typed clients, hooks, and optional modules inside isolated output folders.",
    command: "vision-sync sync --yes",
    why: "Writes go through conflict checks, snapshots, atomic commits, and checksum validation.",
    output: ["Snapshot created", "types.ts generated", "client.ts generated", "hooks.ts generated"]
  },
  {
    step: "05",
    title: "Preview changes",
    description: "Use preview mode anytime before applying a schema update.",
    command: "vision-sync sync --preview",
    why: "Developers can review diffs before generated code changes enter a branch.",
    output: ["Files to modify", "Diff preview shown", "No files modified"]
  },
  {
    step: "06",
    title: "Rollback changes",
    description: "Restore the latest checkpoint if generated output needs to be reverted.",
    command: "vision-sync rollback",
    why: "Rollback is built into the workflow so teams can trust generation in production repos.",
    output: ["Snapshot restored", "Affected files recovered", "Project returned to prior state"]
  }
] as const;

export const cliCommands: readonly CommandItem[] = [
  { command: "vision-sync init", description: "Create a safe default vision.config.ts with guided setup." },
  { command: "vision-sync sync", description: "Preview and apply deterministic generated integrations." },
  { command: "vision-sync watch", description: "Watch a local OpenAPI schema and regenerate safely." },
  { command: "vision-sync rollback", description: "Restore the latest rollback snapshot." },
  { command: "vision-sync history", description: "List rollback snapshots." },
  { command: "vision-sync restore", description: "Restore a specific snapshot by id." },
  { command: "vision-sync sync --preview", description: "Preview planned changes without writing files." }
] as const;

export const integrationLevels: readonly IntegrationLevel[] = [
  {
    level: "Level 1",
    title: "Hooks + Types",
    safety: "Safest default",
    capabilities: ["TypeScript types", "Fetch clients", "TanStack Query hooks", "Generated files only"],
    recommended: "Best for teams adopting Vision Sync for the first time."
  },
  {
    level: "Level 2",
    title: "Generated Modules",
    safety: "Additive",
    capabilities: ["Everything in Level 1", "Endpoint modules", "Tag-based grouping", "No page rewrites"],
    recommended: "Best for larger apps that want generated integration modules."
  },
  {
    level: "Level 3",
    title: "AST-Assisted Preview",
    safety: "Permission-gated",
    capabilities: ["Generated region targeting", "Import deduplication", "Conflict checks", "Compiler validation"],
    recommended: "Best for platform teams ready to review AST-assisted integration previews."
  },
  {
    level: "Level 4",
    title: "Advanced Planning",
    safety: "Preview only",
    capabilities: ["Integration planning", "Boundary analysis", "Diff review", "No forced writes"],
    recommended: "Best for enterprise repos with strict ownership and review processes."
  }
] as const;

export const terminalSequences = {
  hero: [
    "npx vision-sync init",
    "OK Next.js detected",
    "OK TypeScript detected",
    "OK Safe mode enabled",
    "OK Rollback snapshots enabled",
    "OK Ready to sync APIs"
  ],
  init: [
    "vision-sync init",
    "OK App Router detected",
    "OK TanStack Query detected",
    "? Select generation strategy: Conservative Safe Mode",
    "OK Configuration created"
  ],
  sync: [
    "vision-sync sync --preview",
    "OK Schema validated successfully",
    "OK 42 endpoints discovered",
    "OK Files to modify: 3",
    "OK No files were modified"
  ],
  watch: [
    "vision-sync watch --schema ./openapi.json",
    "OK Watching OpenAPI schema",
    "API Change Detected: GET /properties",
    "OK Regenerated affected files only",
    "OK No unsafe changes detected"
  ],
  rollback: [
    "vision-sync rollback",
    "OK Snapshot found: vs_20260508_0012",
    "OK Restored src/generated/vision/types.ts",
    "OK Project returned to previous state"
  ]
} as const;

export const configExample = `import { defineConfig } from "vision-sync";

export default defineConfig({
  schema: {
    type: "file",
    path: "./openapi.json"
  },
  output: {
    baseDir: "src/generated/vision",
    typesFile: "types.ts",
    clientFile: "client.ts",
    hooksFile: "hooks.ts",
    modulesDir: "modules"
  },
  safety: {
    safeMode: true,
    readonlyMode: false,
    previewMode: true,
    dryRunByDefault: true,
    rollback: true,
    rollbackRetention: 20,
    checksumValidation: true,
    atomicWrites: true,
    protectedFolders: [
      "app",
      "pages",
      "components",
      "src/app",
      "src/components",
      "protected"
    ]
  },
  integration: {
    level: 1,
    mode: "conservative",
    astEnabled: false,
    astPreviewOnly: true,
    transformationPermissions: [
      "ensure-import",
      "replace-generated-region"
    ],
    ignoredComponents: [
      "Hero",
      "AnimatedLanding",
      "CinematicLayout"
    ]
  },
  generators: {
    queryLibrary: "auto",
    emitTypes: true,
    emitClient: true,
    emitHooks: true,
    emitModules: false
  }
});`;
