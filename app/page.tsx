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
          helping hand
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          opensource projects by stackblogger
        </h1>
        <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted">
          here you will find the opensource projects that make the developers life easier.
          if you find any of them useful, please spread the word.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            "lightweight",
            "easy to use",
            "open to contribution",
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
              className="text-sm font-semibold tracking-wider text-muted"
            >
              projects
            </h2>
            <p className="mt-2 text-lg font-medium text-foreground">
              open a project to see the complete detail about it
            </p>
          </div>
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
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
                    {p.status}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="about"
        className="scroll-mt-24 py-14"
        aria-labelledby="about-heading"
      >
        <h2
          id="about-heading"
          className="text-sm font-semibold tracking-wider text-muted"
        >
          about this site
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
          <p>
            opensource is the home for stackblogger experiments that graduated
            from notes to repos: clis, libraries, and tiny services meant to
            be forked or vendored without ceremony.
          </p>
          <p>
            pages are statically generated so they stay fast on modest hosting.
            if you want to collaborate, start from the project detail page for
            contribution expectations and license terms.
          </p>
          <p>
            resume, career snapshot, and broader work live on{" "}
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
