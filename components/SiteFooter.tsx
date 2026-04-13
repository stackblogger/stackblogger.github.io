export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>love to see you here</p>
        <p className="font-mono text-xs text-foreground/60">
          opensource ·{" "}
          <a
            href="https://stackblogger.com"
            className="transition-colors hover:text-accent"
            rel="noopener noreferrer"
          >
            stackblogger
          </a>
        </p>
      </div>
    </footer>
  );
}
