export function PageHeader({
  eyebrow,
  title,
  lead,
  index,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Page number shown as a quiet editorial marker, e.g. "02". */
  index?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative pb-12 pt-[calc(var(--header-h)+3rem)] lg:pb-20 lg:pt-[calc(var(--header-h)+5.5rem)]">
        <div className="hero-in max-w-4xl">
          <p className="t-eyebrow flex items-center gap-3 text-muted">
            {index && <span className="tabular-nums text-red">{index}</span>}
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            {eyebrow}
          </p>
          <h1 className="t-h1 mt-6">{title}</h1>
          {lead && <p className="t-lead mt-6 max-w-2xl text-muted">{lead}</p>}
          {children}
        </div>
      </div>
    </header>
  );
}
