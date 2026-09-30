import type { Metadata } from "next";
import Link from "next/link";
import { CaseMedia } from "@/components/case-media";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TechnicalFlow } from "@/components/technical-flow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "UNLOCKED — Unity / C# Case Study",
  description:
    "Production case study for UNLOCKED: Unity 6.x, C#, six-language visual localization, Unity IAP, Android/iOS delivery, Git release workflow and AI-assisted implementation.",
};

const metadataItems = [
  ["Role", "Freelance Unity / C# Developer"],
  ["Responsibility", "Sole Unity/Game Developer"],
  ["Platforms", "Android · iOS"],
  ["Status", "Published · maintained"],
] as const;

const textLink =
  "font-medium text-foreground underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:text-accent";
const externalButton =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-foreground px-5 font-medium text-white transition-colors hover:bg-[#2a2f36]";

const localizationArchitecture = [
  { title: "Device / user language", detail: "System detection or manual selection" },
  { title: "Locale manager", detail: "LocalizationManager · current locale + persistence" },
  { title: "Localization DB", detail: "LocalizationDatabase · visual asset config" },
  { title: "Stable key", detail: "Scene components resolve by key" },
  { title: "Localized image", detail: "LocalizedImage · runtime UI component" },
  { title: "UI output", detail: "Image or SpriteRenderer" },
] as const;

const localizationFallback = [
  { title: "Current language" },
  { title: "Spanish fallback", detail: "es-ES" },
  { title: "Original asset", detail: "Final safe fallback" },
] as const;

const iapFlow = [
  { title: "Google Play / App Store", detail: "Platform storefront" },
  { title: "Unity IAP", detail: "Purchase and entitlement integration" },
  { title: "Subscription state", detail: "Unknown · NotSubscribed · Subscribed" },
  { title: "GameManager", detail: "Application-level access decisions" },
  { title: "App flow", detail: "Locked / available content" },
] as const;

const releaseFlow = [
  { title: "Work / maintenance", detail: "Feature or production fix" },
  { title: "master", detail: "Canonical project state" },
  { title: "QA + platform build", detail: "Device and build validation" },
  { title: "release/android or release/ios", detail: "Platform release reference" },
  { title: "Store submission", detail: "Google Play or TestFlight / App Store" },
] as const;

const aiFlow = [
  { title: "Requirement / problem" },
  { title: "Technical direction", detail: "Constraints, prompts and acceptance criteria" },
  { title: "ChatGPT-generated C#", detail: "Implementation generated with AI" },
  { title: "Unity integration", detail: "Scenes, assets, packages and project context" },
  { title: "Compile / runtime feedback", detail: "Real project behavior" },
  { title: "Debugging + iteration", detail: "Corrections and integration decisions" },
  { title: "Device QA + release", detail: "Human validation and production ownership" },
] as const;

export default function UnlockedPage() {
  return (
    <main>
      <section className="border-b border-border py-10 sm:py-12 lg:py-14">
        <Container>
          <Link className={textLink} href={siteConfig.routes.unity}>
            ← Unity profile
          </Link>

          <div className="mt-7 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Production case study · Unity / C#
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                UNLOCKED
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
                A published 2D mobile game developed in Unity for Android and iOS,
                with post-launch technical evolution across localization,
                subscriptions, platform delivery and maintenance.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className={externalButton}
                  href={siteConfig.stores.googlePlay}
                  rel="noreferrer"
                  target="_blank"
                >
                  Google Play ↗
                </a>
                <a
                  className={externalButton}
                  href={siteConfig.stores.appStore}
                  rel="noreferrer"
                  target="_blank"
                >
                  App Store ↗
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[220px]">
              <CaseMedia
                caption="Current production product identity and mobile UI."
                label="UNLOCKED · Main menu"
                portrait
                src="/media/unlocked/main-menu.webp"
              />
            </div>
          </div>

          <dl className="mt-7 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {metadataItems.map(([label, value]) => (
              <div className="bg-surface p-5" key={label}>
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-2 font-medium leading-6">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="01 · Context & role"
            title="External developer with end-to-end Unity responsibility"
            description="MullenLowe Interamérica conceived the game for Fundación La Merced and hired me as the external freelance developer responsible for the Unity implementation and mobile production."
          />

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-3">
            <article className="bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Creative concept
              </p>
              <h3 className="mt-3 text-xl font-semibold">MullenLowe Interamérica</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Game concept and creative direction for the initiative.
              </p>
            </article>
            <article className="bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Organization
              </p>
              <h3 className="mt-3 text-xl font-semibold">Fundación La Merced</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Product context and published project beneficiary.
              </p>
            </article>
            <article className="bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Unity development
              </p>
              <h3 className="mt-3 text-xl font-semibold">Mariano Rivas</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Sole Unity/Game Developer: implementation, integration, mobile
                builds, store submission, maintenance and technical evolution.
              </p>
            </article>
          </div>

          <div className="mt-10 max-w-3xl border-l-2 border-accent pl-5 text-lg leading-8 text-muted-foreground">
            Initial development ran from April to September 2025, followed by
            continued maintenance and a substantial technical update during 2026.
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="02 · Product & systems"
            title="A complete mobile application, not an isolated gameplay prototype"
            description="The production scope included gameplay and application flow as well as the systems required to ship and maintain the product on two mobile platforms."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["Gameplay", "Player control, level behavior and core game systems."],
                ["Application flow", "Splash, menus, character selection, tutorial, gameplay, stats and restrictions."],
                ["Production systems", "Localization, subscription access, persistence and QA utilities."],
                ["Mobile lifecycle", "Android/iOS builds, device validation, store releases and maintenance."],
              ].map(([title, body]) => (
                <article className="rounded-lg border border-border bg-background p-5" key={title}>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <CaseMedia
                caption="Production gameplay evidence."
                label="Gameplay"
                portrait
                src="/media/unlocked/hero-gameplay.webp"
              />
              <CaseMedia
                caption="Character-selection flow inside the production build."
                label="Character selection"
                portrait
                src="/media/unlocked/character-selection.webp"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="03 · Localization deep dive"
            title="Six-language visual localization with detection, persistence and fallback"
            description="The 2026 update introduced a custom localization layer for visual UI assets without coupling localized presentation to gameplay or purchasing logic."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["6", "languages"],
              ["System", "language detection"],
              ["PlayerPrefs", "selection persistence"],
              ["es-ES", "fallback locale"],
            ].map(([value, label]) => (
              <div className="rounded-lg border border-border bg-surface p-5" key={label}>
                <p className="text-2xl font-semibold tracking-[-0.03em]">{value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <TechnicalFlow
              label="D01 · Localization architecture"
              steps={localizationArchitecture}
            />
          </div>

          <div className="mt-10">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                Same application state, localized visual layer
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                The UI resolves localized sprite assets through stable keys. That
                allows the presentation layer to change language while gameplay
                state and purchase logic remain independent.
              </p>
            </div>

            <div className="mt-8 grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <CaseMedia
                caption="User-facing selector for Spanish, English, French, German, Italian and Portuguese."
                label="Six-language selector"
                portrait
                src="/media/unlocked/language-selection.webp"
              />
              <CaseMedia
                caption="Fatigue restriction screen in Spanish."
                label="es-ES"
                portrait
                src="/media/unlocked/fatigue-es.webp"
              />
              <CaseMedia
                caption="The same restriction state in German."
                label="de-DE"
                portrait
                src="/media/unlocked/fatigue-de.webp"
              />
            </div>
          </div>

          <div className="mt-10">
            <TechnicalFlow
              label="D02 · Localization fallback"
              steps={localizationFallback}
            />
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
            Supported locales: Spanish (es-ES), English (en-US), French (fr-FR),
            German (de-DE), Italian (it-IT) and Portuguese (pt-PT).
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="04 · Unity IAP deep dive"
            title="Subscription access integrated into the production application flow"
            description="UNLOCKED uses Unity Purchasing for a monthly subscription across the published Android and iOS versions, including entitlement state, purchase lifecycle and restore behavior."
          />

          <div className="mt-10">
            <TechnicalFlow label="D03 · Subscription / entitlement flow" steps={iapFlow} />
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                {[
                  ["State model", "Unknown · NotSubscribed · Subscribed"],
                  ["Lifecycle", "Purchase, pending, deferred, cancel and failure handling"],
                  ["Restore", "iOS restore path and entitlement refresh"],
                  ["Validation", "Android local receipt validation plus platform-specific iOS handling"],
                ].map(([title, body]) => (
                  <article className="bg-background p-5 sm:p-6" key={title}>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                  </article>
                ))}
              </div>

              <p className="mt-6 max-w-3xl leading-7 text-muted-foreground">
                The current architecture does not use a backend receipt-validation
                service. The case study therefore treats entitlement handling as a
                client/platform integration, without presenting it as server-side
                verification.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[360px]">
              <CaseMedia
                caption="Subscription purchase surface from the production application."
                label="Subscription"
                portrait
                src="/media/unlocked/subscription.webp"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="05 · Android & iOS production"
            title="Build, device QA and store delivery on both mobile platforms"
            description="My role extended through platform build configuration and release submission rather than ending at the Unity Editor."
          />

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
            <article className="bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">
                Android
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Google Play production</h3>
              <ul className="mt-5 space-y-3 leading-7 text-muted-foreground">
                <li>Android App Bundle production builds.</li>
                <li>Gradle, R8/ProGuard and billing-related release fixes.</li>
                <li>Signing material kept outside the repository.</li>
                <li>Device QA and direct Google Play submission.</li>
              </ul>
            </article>

            <article className="bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">
                iOS
              </p>
              <h3 className="mt-3 text-2xl font-semibold">TestFlight & App Store</h3>
              <ul className="mt-5 space-y-3 leading-7 text-muted-foreground">
                <li>iOS production builds and device testing.</li>
                <li>StoreKit-related subscription flow validation.</li>
                <li>TestFlight distribution and release QA.</li>
                <li>Direct App Store Connect submission and publication.</li>
              </ul>
            </article>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-accent-soft p-5 sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
              Current production reference
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              Project version 1.4 · Android versionCode 10 · iOS minimum target 15.0.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="06 · Git & release workflow"
            title="Simple release references instead of unnecessary pipeline complexity"
            description="The project uses a canonical master branch plus platform release references. Publishing is a structured manual process, not an automated CI/CD pipeline."
          />

          <div className="mt-10">
            <TechnicalFlow label="D04 · Git / release workflow" steps={releaseFlow} />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["master", "Canonical project state"],
              ["release/android", "Android production reference"],
              ["release/ios", "iOS production reference"],
            ].map(([branch, purpose]) => (
              <div className="rounded-lg border border-border bg-background p-5" key={branch}>
                <p className="font-mono text-sm font-medium text-accent">{branch}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{purpose}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="07 · AI-assisted development"
            title="AI-generated implementation directed through a real production loop"
            description="ChatGPT was used throughout development to generate the C# implementation. The professional evidence is the ability to direct that output through integration, debugging, validation, mobile QA and release."
          />

          <div className="mt-10">
            <TechnicalFlow label="D05 · AI-assisted development loop" steps={aiFlow} />
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
            <article className="bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                AI contribution
              </p>
              <h3 className="mt-3 text-xl font-semibold">Implementation generation</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                ChatGPT generated the project&apos;s C# scripts from requirements,
                technical direction, project context and iterative feedback.
              </p>
            </article>
            <article className="bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Developer responsibility
              </p>
              <h3 className="mt-3 text-xl font-semibold">Production ownership</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                I directed the implementation, integrated it into Unity, resolved
                compile/runtime issues, tested behavior on devices, iterated against
                requirements and owned the production releases and maintenance.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="08 · Technical documentation"
            title="Private implementation, public evidence"
            description="The source repository and internal documentation remain private. The portfolio exposes sanitized architecture and workflow evidence instead of proprietary code or raw internal files."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h3 className="text-xl font-semibold">Internal documentation covers</h3>
              <ul className="mt-5 space-y-3 leading-7 text-muted-foreground">
                <li>Branching and platform release workflow.</li>
                <li>Localization architecture and usage.</li>
                <li>Unity IAP subscription integration.</li>
                <li>Scene overview and application structure.</li>
                <li>Script/system overview for maintenance.</li>
              </ul>

              <div className="mt-7 rounded-lg border border-border bg-background p-5">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Confidentiality boundary
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  No client source code, signing material, credentials, internal
                  product identifiers or raw private documentation is published.
                </p>
              </div>
            </div>

            <CaseMedia
              caption="Sanitized Unity Editor workspace used as secondary technical evidence."
              label="Unity 6.x project"
              src="/media/unlocked/unity-editor.webp"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="09 · Result & evidence"
            title="Published on Android and iOS, then evolved after launch"
            description="The strongest evidence is a real product that reached both stores and continued to receive technical work after its initial release."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Apr–Sep 2025", "Initial production development"],
              ["Android + iOS", "Published platforms"],
              ["2026", "Major localization and subscription update"],
              ["Ongoing", "Maintenance and technical evolution"],
            ].map(([value, label]) => (
              <div className="rounded-lg border border-border bg-surface p-5" key={label}>
                <p className="font-semibold">{value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-border bg-accent-soft p-7 sm:p-9 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Verify the product
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                UNLOCKED is publicly available on both mobile stores
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Source code remains private. Store listings, selected product
                media and sanitized technical diagrams provide the public evidence.
              </p>
            </div>

            <div className="mt-7 flex shrink-0 flex-wrap gap-3 lg:mt-0">
              <a
                className={externalButton}
                href={siteConfig.stores.googlePlay}
                rel="noreferrer"
                target="_blank"
              >
                Google Play ↗
              </a>
              <a
                className={externalButton}
                href={siteConfig.stores.appStore}
                rel="noreferrer"
                target="_blank"
              >
                App Store ↗
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <Link className={textLink} href={siteConfig.routes.unity}>
              ← Back to Unity / C# profile
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
