import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/90 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4 sm:gap-6">
          <Link
            className="flex min-w-0 items-center gap-2.5 font-semibold tracking-[-0.02em] text-foreground"
            href={siteConfig.routes.unity}
          >
            <Image
              alt=""
              aria-hidden="true"
              className="h-8 w-8 shrink-0 rounded-md"
              height={32}
              priority
              src="/LogoApp.png"
              width={32}
            />
            <span className="truncate">{siteConfig.name}</span>
          </Link>

          <nav aria-label="Primary navigation" className="flex shrink-0 items-center gap-3 text-sm sm:gap-6">
            <Link className="text-muted-foreground transition-colors hover:text-foreground" href={siteConfig.routes.unity}>
              Unity
            </Link>
            <Link className="text-muted-foreground transition-colors hover:text-foreground" href={siteConfig.routes.unlocked}>
              Work
            </Link>
            <a
              className="hidden min-h-9 items-center justify-center rounded-md bg-foreground px-4 font-medium text-white transition-colors hover:bg-[#2a2f36] sm:inline-flex"
              href={siteConfig.github}
              rel="noopener noreferrer"
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
