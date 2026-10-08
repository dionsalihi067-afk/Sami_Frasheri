export function StatusPage({
  code,
  title,
  text,
  children,
}: {
  code: string;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative pt-[var(--header-h)]">
        <p className="t-eyebrow flex items-center gap-3 text-muted">
          <span aria-hidden className="h-px w-8 bg-red" />
          {code}
        </p>
        <h1 className="t-h1 mt-6 max-w-2xl">{title}</h1>
        <p className="t-lead mt-6 max-w-xl text-muted">{text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div>
      </div>
    </section>
  );
}
