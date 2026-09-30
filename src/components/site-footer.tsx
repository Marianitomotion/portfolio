import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted-foreground">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p>Unity / C# · Android · iOS · Production</p>
        </div>
      </Container>
    </footer>
  );
}
