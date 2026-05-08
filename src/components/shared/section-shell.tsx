import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  readonly id?: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly align?: "left" | "center";
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "center"
}: SectionShellProps): React.ReactElement {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", className)}>
      <div className="container">
        <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center")}>
          <Badge>{eyebrow}</Badge>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
