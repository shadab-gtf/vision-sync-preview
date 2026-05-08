import { HeroSection } from "@/components/home/hero-section";
import { DeveloperPathSection } from "@/components/sections/developer-path-section";
import { WhatIsSection } from "@/components/sections/what-is-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { InstallationSection } from "@/components/sections/installation-section";
import { QuickStartSection } from "@/components/sections/quick-start-section";
import { CliExperienceSection } from "@/components/sections/cli-experience-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { FolderStructureSection } from "@/components/sections/folder-structure-section";
import { ConfigSection } from "@/components/sections/config-section";
import { IntegrationLevelsSection } from "@/components/sections/integration-levels-section";
import { RollbackSection } from "@/components/sections/rollback-section";
import { WatchModeSection } from "@/components/sections/watch-mode-section";
import { ErrorExperienceSection } from "@/components/sections/error-experience-section";
import { TrustSection } from "@/components/sections/trust-section";

export function HomePage(): React.ReactElement {
  return (
    <main>
      <HeroSection />
      <DeveloperPathSection />
      <WhatIsSection />
      <PhilosophySection />
      <FeaturesSection />
      <InstallationSection />
      <QuickStartSection />
      <CliExperienceSection />
      <ArchitectureSection />
      <FolderStructureSection />
      <ConfigSection />
      <IntegrationLevelsSection />
      <RollbackSection />
      <WatchModeSection />
      <ErrorExperienceSection />
      <TrustSection />
    </main>
  );
}
