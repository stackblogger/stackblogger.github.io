import Link from "next/link";
import { getProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getProjects();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-10">
      <section className="border-b border-border pb-12" aria-labelledby="hero-heading">
        <p
          id="hero-heading"
          className="text-sm font-medium tracking-wide text-accent"
        >
          Ship in public
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Tools and libraries with boring internals and sharp edges where it
          matters.
        </h1>
        <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted">
          This site lists open source work maintained under the opensource line
          by Stackblogger. Everything here is built to stay small, fast, and
          easy to self-host or vendor into your own stack.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            "Static export friendly",
            "Mobile-first layouts",
            "SEO metadata baked in",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground/90"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 border-b border-border py-14"
        aria-labelledby="projects-heading"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="projects-heading"
              className="text-sm font-semibold uppercase tracking-wider text-muted"
            >
              Projects
            </h2>
            <p className="mt-2 text-lg font-medium text-foreground">
              Pick a project for full context, stack, and install notes.
            </p>
          </div>
          <p className="text-sm text-muted">Single-word URLs for sharing.</p>
        </div>

        <ul className="mt-10 flex flex-col gap-4">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/${p.slug}/`}
                className="group block rounded-xl border border-border bg-card px-5 py-5 transition-colors hover:border-accent/40 hover:bg-card/80"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    /{p.slug}/
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.tagline}
                </p>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/75">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs capitalize text-accent">
                    {p.status}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="principles"
        className="scroll-mt-24 border-b border-border py-14"
        aria-labelledby="principles-heading"
      >
        <h2
          id="principles-heading"
          className="text-sm font-semibold uppercase tracking-wider text-muted"
        >
          Principles
        </h2>
        <p className="mt-2 max-w-4xl text-base text-muted">
          Non-negotiables for anything that ships under this banner.
        </p>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            {
              term: "Small API",
              body: "Prefer a narrow surface with escape hatches over a kitchen-sink SDK.",
            },
            {
              term: "Docs with the binary",
              body: "If you cannot understand it from the README and --help, it is not done.",
            },
            {
              term: "Perf is a feature",
              body: "Cold start, bundle size, and memory are tracked like correctness bugs.",
            },
            {
              term: "OSS hygiene",
              body: "Clear license, changelog discipline, and predictable release tags.",
            },
          ].map((row) => (
            <div key={row.term} className="rounded-xl border border-border bg-card p-5">
              <dt className="text-base font-semibold text-foreground">{row.term}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{row.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        id="about"
        className="scroll-mt-24 py-14"
        aria-labelledby="about-heading"
      >
        <h2
          id="about-heading"
          className="text-sm font-semibold uppercase tracking-wider text-muted"
        >
          About this site
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
          <p>
            opensource is the home for Stackblogger experiments that graduated
            from notes to repos: CLIs, libraries, and tiny services meant to
            be forked or vendored without ceremony.
          </p>
          <p>
            Pages are statically generated so they stay fast on modest hosting.
            If you want to collaborate, start from the project detail page for
            contribution expectations and license terms.
          </p>
          <p>
            Resume, career snapshot, and broader work live on{" "}
            <a
              href="https://me.stackblogger.com/"
              className="text-accent underline-offset-4 hover:underline"
              rel="noopener noreferrer"
            >
              me.stackblogger.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
