type CaseMediaProps = {
  src: string;
  label: string;
  caption: string;
  portrait?: boolean;
};

export function CaseMedia({
  src,
  label,
  caption,
  portrait = false,
}: CaseMediaProps) {
  return (
    <figure className={portrait ? "mx-auto w-full max-w-[260px]" : "w-full"}>
      <div
        aria-label={label}
        role="img"
        className={
          portrait
            ? "aspect-[820/1775] overflow-hidden rounded-media border border-border bg-surface-muted bg-cover bg-center shadow-[0_18px_50px_rgba(18,21,26,0.07)]"
            : "aspect-[16/10] overflow-hidden rounded-media border border-border bg-surface-muted bg-cover bg-center shadow-[0_18px_50px_rgba(18,21,26,0.07)]"
        }
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18,21,26,0.01), rgba(18,21,26,0.18)), url("${src}")`,
        }}
      >
        <div className="flex h-full items-end p-4">
          <span className="rounded-md border border-white/25 bg-black/50 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm">
            {label}
          </span>
        </div>
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
