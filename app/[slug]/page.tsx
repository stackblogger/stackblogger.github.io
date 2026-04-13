import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getProjectSlugs } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

const statusStyles: Record<
  string,
  string
> = {
  active: "border-accent/40 bg-accent/10 text-accent",
  maintenance: "border-amber-500/35 bg-amber-500/10 text-amber-200",
  experimental: "border-violet-500/35 bg-violet-500/10 text-violet-200",
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
    },
    twitter: {
      title: project.name,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const statusClass =
    statusStyles[project.status] ??
    "border-border bg-card text-muted";

  return (
    <article className="mx-auto w-full max-w-6xl flex-1 px-5 pb-16 pt-10 sm:px-8 sm:pt-12 lg:px-10">
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        ← All projects
      </Link>

      <header className="mt-8 border-b border-border pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-muted">/{project.slug}/</span>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${statusClass}`}
          >
            {project.status}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-3 text-lg text-muted">{project.tagline}</p>
      </header>

      <div className="mt-12 space-y-14">
        <section aria-labelledby="overview">
          <h2
            id="overview"
            className="text-sm font-semibold uppercase tracking-wider text-muted"
          >
            Overview
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            {project.description}
          </p>
        </section>

        <section aria-labelledby="why">
          <h2
            id="why"
            className="text-sm font-semibold uppercase tracking-wider text-muted"
          >
            Why it exists
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            {project.motivation}
          </p>
        </section>

        <section aria-labelledby="features">
          <h2
            id="features"
            className="text-sm font-semibold uppercase tracking-wider text-muted"
          >
            Features
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-base leading-relaxed text-foreground/90 marker:text-accent">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="design">
          <h2
            id="design"
            className="text-sm font-semibold uppercase tracking-wider text-muted"
          >
            Design notes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            {project.designNotes}
          </p>
        </section>

        <section aria-labelledby="quickstart">
          <h2
            id="quickstart"
            className="text-sm font-semibold uppercase tracking-wider text-muted"
          >
            Quick start
          </h2>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-foreground/90">
            <code>{project.quickstart}</code>
          </pre>
        </section>

        <section aria-labelledby="stack">
          <h2
            id="stack"
            className="text-sm font-semibold uppercase tracking-wider text-muted"
          >
            Stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="links">
          <h2
            id="links"
            className="text-sm font-semibold uppercase tracking-wider text-muted"
          >
            Links
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-accent underline-offset-4 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="license">
          <h2
            id="license"
            className="text-sm font-semibold uppercase tracking-wider text-muted"
          >
            License
          </h2>
          <p className="mt-4 text-base text-foreground/90">
            Distributed under {project.license}.
          </p>
        </section>

        <section aria-labelledby="contributing">
          <h2
            id="contributing"
            className="text-sm font-semibold uppercase tracking-wider text-muted"
          >
            Contributing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            {project.contributing}
          </p>
        </section>
      </div>
    </article>
  );
}
