export type IconName =
  | "ShieldCheck"
  | "RefreshCcw"
  | "Code2"
  | "DatabaseZap"
  | "Boxes"
  | "Eye"
  | "GitCompareArrows"
  | "FileCode2"
  | "Terminal"
  | "Activity"
  | "LockKeyhole"
  | "Gauge"
  | "Workflow"
  | "Layers3"
  | "Sparkles"
  | "RotateCcw"
  | "PackageCheck"
  | "TriangleAlert"
  | "CheckCircle2"
  | "Cpu";

export interface FeatureItem {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface QuickStartStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly command: string;
  readonly why: string;
  readonly output: readonly string[];
}

export interface IntegrationLevel {
  readonly level: string;
  readonly title: string;
  readonly safety: string;
  readonly capabilities: readonly string[];
  readonly recommended: string;
}

export interface CommandItem {
  readonly command: string;
  readonly description: string;
}
