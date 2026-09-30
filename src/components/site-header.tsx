import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/90 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-6">
          <Link
            className="font-semibold tracking-[-0.02em] text-foreground"
            href={siteConfig.routes.unity}
          >
            {siteConfig.name}
          </Link>

          <nav aria-label="Primary navigation" className="flex items-center gap-4 text-sm sm:gap-6">
            <Link className="text-muted-foreground transition-colors hover:text-foreground" href={siteConfig.routes.unity}>
              Unity
            </Link>
            <Link className="text-muted-foreground transition-colors hover:text-foreground" href={siteConfig.routes.unlocked}>
              Work
            </Link>
            <a
              className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline"
              href={siteConfig.github}
              rel="noreferrer"
              target="_blank"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
