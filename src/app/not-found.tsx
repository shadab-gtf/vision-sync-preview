import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound(): React.ReactElement {
  return (
    <main className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">The documentation page you requested does not exist.</p>
      <Button asChild className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
    </main>
  );
}
