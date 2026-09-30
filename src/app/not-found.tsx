import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-accent">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            The requested portfolio route does not exist.
          </p>
          <Link
            className="mt-8 inline-flex min-h-11 items-center rounded-md bg-accent px-5 font-medium text-white transition-colors hover:bg-accent-hover"
            href={siteConfig.routes.unity}
          >
            Back to Unity profile
          </Link>
        </div>
      </Container>
    </main>
  );
}
