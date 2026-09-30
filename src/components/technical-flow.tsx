type FlowStep = {
  title: string;
  detail?: string;
};

type TechnicalFlowProps = {
  label: string;
  steps: readonly FlowStep[];
};

export function TechnicalFlow({ label, steps }: TechnicalFlowProps) {
  return (
    <figure className="rounded-lg border border-border bg-surface p-5 sm:p-6">
      <figcaption className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </figcaption>

      <div className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row xl:items-stretch">
        {steps.map((step, index) => (
          <div className="contents" key={step.title}>
            <div className="min-w-0 flex-1 rounded-md border border-border bg-background p-4">
              <p className="font-mono text-[11px] font-medium text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm font-semibold leading-5">{step.title}</p>
              {step.detail ? (
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {step.detail}
                </p>
              ) : null}
            </div>

            {index < steps.length - 1 ? (
              <>
                <div
                  aria-hidden="true"
                  className="flex h-5 items-center justify-center text-border-strong md:hidden"
                >
                  ↓
                </div>
                <div
                  aria-hidden="true"
                  className="hidden w-5 shrink-0 items-center justify-center text-border-strong xl:flex"
                >
                  →
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </figure>
  );
}
