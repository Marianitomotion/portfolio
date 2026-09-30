import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Unity / C# Developer",
  description: "Unity / C# candidate profile for Mariano Rivas.",
};

export default function UnityPage() {
  return (
    <main>
      <section className="border-b border-border py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-accent">Unity track · foundation</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">Unity / C# Developer</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              The route, visual tokens, responsive container and navigation shell are ready. Final candidate copy and production evidence are intentionally deferred to the next build phase.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 font-medium text-white transition-colors hover:bg-accent-hover" href="/work/unlocked">
                Open UNLOCKED foundation
              </Link>
              <a className="inline-flex min-h-11 items-center rounded-md border border-border-strong bg-surface px-5 font-medium text-foreground transition-colors hover:bg-surface-muted" href="https://github.com/Marianitomotion" rel="noreferrer" target="_blank">
                GitHub ↗
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Core", "Unity 6.x · C#"],
              ["Workflow", "Rider · Git / GitHub"],
              ["Production", "Unity IAP"],
              ["Platforms", "Android · iOS"],
            ].map(([label, value]) => (
              <div className="rounded-lg border border-border bg-surface p-5" key={label}>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
                <p className="mt-2 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
