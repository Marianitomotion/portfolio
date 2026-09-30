import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "UNLOCKED Case Study",
  description: "Technical case study foundation for UNLOCKED, a Unity / C# mobile game.",
};

const metadataItems = [
  ["Role", "Freelance Unity / C# Developer"],
  ["Responsibility", "Sole Unity/Game Developer"],
  ["Platforms", "Android · iOS"],
  ["Status", "Published"],
] as const;

export default function UnlockedPage() {
  return (
    <main>
      <section className="border-b border-border py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-accent">Case study · foundation</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">UNLOCKED</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Technical case-study route with the approved information architecture. Product screenshots, diagrams and final narrative will be integrated in subsequent phases.
            </p>
          </div>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {metadataItems.map(([label, value]) => (
              <div className="bg-surface p-5" key={label}>
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</dt>
                <dd className="mt-2 font-medium leading-6">{value}</dd>
              </div>
            ))}
          </dl>

          <Link className="mt-8 inline-flex min-h-11 items-center rounded-md border border-border-strong bg-surface px-5 font-medium transition-colors hover:bg-surface-muted" href="/unity">
            ← Back to Unity profile
          </Link>
        </Container>
      </section>
    </main>
  );
}
