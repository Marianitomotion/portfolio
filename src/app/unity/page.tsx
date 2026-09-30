import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unity / C# Developer",
  description:
    "Unity / C# developer profile for Mariano Rivas, focused on production mobile development, gameplay systems, localization, Unity IAP and Android/iOS delivery.",
};

const snapshot = [
  ["Engine", "Unity 6.x"],
  ["Language", "C#"],
  ["Workflow", "Rider · Git / GitHub"],
  ["Production", "Unity IAP · Android · iOS"],
] as const;

const developmentAreas = [
  {
    title: "Gameplay & Application Systems",
    items: [
      "Player control and level generation",
      "Navigation and application flow",
      "Character selection and tutorial",
      "Stats, pause, audio and play restrictions",
    ],
  },
  {
    title: "Production Systems",
    items: [
      "Six-language visual localization",
      "Unity IAP subscription flow",
      "Entitlement and subscription state",
      "Persistence and development QA tooling",
    ],
  },
  {
    title: "Mobile Production",
    items: [
      "Android and iOS production builds",
      "TestFlight and device QA",
      "Google Play and App Store submissions",
      "Platform-specific release fixes",
    ],
  },
  {
    title: "Maintenance & Evolution",
    items: [
      "Bug fixing and refactoring",
      "Build and dependency updates",
      "Post-launch system changes",
      "Technical documentation and release references",
    ],
  },
] as const;

const engineeringPrinciples = [
  {
    title: "Production-first",
    body: "Changes are evaluated against software that is already published and must keep working.",
  },
  {
    title: "Incremental integration",
    body: "New systems are introduced in controlled steps so behavior can be validated before wider rollout.",
  },
  {
    title: "Separation of concerns",
    body: "Gameplay, localization, purchasing and platform responsibilities stay deliberately decoupled.",
  },
  {
    title: "Traceable delivery",
    body: "Git history, release references, QA and technical documentation support production work.",
  },
  {
    title: "AI-assisted implementation",
    body: "AI-generated implementation is integrated, debugged, validated on-device and owned through release.",
  },
] as const;

const primaryButton =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 font-medium text-white transition-colors hover:bg-accent-hover";
const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-border-strong bg-surface px-5 font-medium text-foreground transition-colors hover:bg-surface-muted";
const textLink =
  "font-medium text-foreground underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:text-accent";
const storeButton =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-foreground px-5 font-medium text-white transition-colors hover:bg-[#2a2f36]";

export default function UnityPage() {
  return (
    <main>
      <section className="border-b border-border py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
              Mariano Rivas · Unity track
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Unity / C# Developer
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
              I build and maintain production Unity software for mobile platforms,
              from gameplay systems and monetization to localization, QA and store
              releases.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link className={primaryButton} href={siteConfig.routes.unlocked}>
                View UNLOCKED case study
              </Link>
              <a
                className={secondaryButton}
                href={siteConfig.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub ↗
              </a>
            </div>

            <p className="mt-7 font-mono text-sm text-muted-foreground">
              Remote · Unity 6.x · C# · Android · iOS · Production
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-surface py-8">
        <Container>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {snapshot.map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-2 font-medium leading-6">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Featured work
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                UNLOCKED
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                A 2D mobile game developed as an external freelance developer for
                MullenLowe Interamérica for Fundación La Merced.
              </p>

              <dl className="mt-8 grid gap-5 border-y border-border py-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Role
                  </dt>
                  <dd className="mt-2 font-medium">
                    Freelance Unity / C# Developer
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Responsibility
                  </dt>
                  <dd className="mt-2 font-medium">Sole Unity/Game Developer</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Platforms
                  </dt>
                  <dd className="mt-2 font-medium">Android · iOS</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Timeline
                  </dt>
                  <dd className="mt-2 font-medium">
                    Apr–Sep 2025 · post-launch evolution
                  </dd>
                </div>
              </dl>

              <p className="mt-7 leading-7 text-muted-foreground">
                I was responsible for the Unity/C# implementation, gameplay and
                application systems, production localization, Unity IAP, mobile
                builds, store submissions and continued maintenance after launch.
              </p>

              <ul className="mt-7 grid gap-3 text-sm leading-6 sm:grid-cols-2">
                {[
                  "Unity/C# product development",
                  "Gameplay and application systems",
                  "Localization for six languages",
                  "Unity IAP and mobile production",
                ].map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link className={primaryButton} href={siteConfig.routes.unlocked}>
                  Technical case study
                </Link>
                <a
                  className={storeButton}
                  href={siteConfig.stores.googlePlay}
                  rel="noreferrer"
                  target="_blank"
                >
                  Google Play ↗
                </a>
                <a
                  className={storeButton}
                  href={siteConfig.stores.appStore}
                  rel="noreferrer"
                  target="_blank"
                >
                  App Store ↗
                </a>
              </div>
            </div>

            <figure>
              <div
                aria-label="UNLOCKED main menu preview"
                className="mx-auto aspect-[820/1775] w-full max-w-[260px] overflow-hidden rounded-media border border-border bg-surface-muted bg-cover bg-center shadow-[0_20px_60px_rgba(18,21,26,0.08)]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(18,21,26,0.03), rgba(18,21,26,0.16)), url('/media/unlocked/main-menu.webp')",
                }}
              >
                <div className="flex h-full items-end p-5">
                  <div className="rounded-md border border-white/30 bg-black/45 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm">
                    UNLOCKED · Main menu
                  </div>
                </div>
              </div>
              <figcaption className="mx-auto mt-3 max-w-[260px] text-sm leading-6 text-muted-foreground">
                Selected production gameplay image. The local asset is synced
                separately from the private UNLOCKED repository.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            description="The portfolio view stays broad here; the UNLOCKED case study provides the deeper technical evidence."
            eyebrow="Unity development"
            title="Production scope across the full application"
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {developmentAreas.map((area) => (
              <article className="bg-surface p-6 sm:p-8" key={area.title}>
                <h3 className="text-xl font-semibold tracking-[-0.025em]">
                  {area.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                  {area.items.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              description="The emphasis is not on isolated features, but on delivering changes safely into a real product."
              eyebrow="Engineering approach"
              title="From implementation to production responsibility"
            />

            <div className="divide-y divide-border border-y border-border">
              {engineeringPrinciples.map((principle, index) => (
                <article className="grid gap-3 py-6 sm:grid-cols-[5rem_1fr] sm:gap-6" key={principle.title}>
                  <p className="font-mono text-xs font-medium text-accent">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="font-semibold">{principle.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">
                      {principle.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            description="The strongest claims on this page point to evidence that can be inspected independently."
            eyebrow="Evidence"
            title="Published product, technical depth and public work"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              className="group rounded-lg border border-border bg-background p-5 transition-colors hover:border-border-strong"
              href={siteConfig.routes.unlocked}
            >
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Case study
              </p>
              <p className="mt-3 font-semibold group-hover:text-accent">
                UNLOCKED technical case
              </p>
            </Link>
            <a
              className="group rounded-lg border border-border bg-background p-5 transition-colors hover:border-border-strong"
              href={siteConfig.stores.googlePlay}
              rel="noreferrer"
              target="_blank"
            >
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Production
              </p>
              <p className="mt-3 font-semibold group-hover:text-accent">
                Google Play ↗
              </p>
            </a>
            <a
              className="group rounded-lg border border-border bg-background p-5 transition-colors hover:border-border-strong"
              href={siteConfig.stores.appStore}
              rel="noreferrer"
              target="_blank"
            >
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Production
              </p>
              <p className="mt-3 font-semibold group-hover:text-accent">
                App Store ↗
              </p>
            </a>
            <a
              className="group rounded-lg border border-border bg-background p-5 transition-colors hover:border-border-strong"
              href={siteConfig.github}
              rel="noreferrer"
              target="_blank"
            >
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Technical identity
              </p>
              <p className="mt-3 font-semibold group-hover:text-accent">
                GitHub ↗
              </p>
            </a>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="rounded-lg border border-border bg-accent-soft p-7 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Availability
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Open to remote Unity / C# opportunities
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                Roles where production Unity development, mobile delivery and
                AI-assisted implementation are useful parts of the same workflow.
              </p>
            </div>
            <div className="mt-7 flex shrink-0 flex-wrap gap-3 lg:mt-0">
              <Link className={primaryButton} href={siteConfig.routes.unlocked}>
                Review UNLOCKED
              </Link>
              <a
                className={secondaryButton}
                href={siteConfig.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
