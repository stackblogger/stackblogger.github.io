export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  motivation: string;
  features: string[];
  designNotes: string;
  stack: string[];
  quickstart: string;
  links: { label: string; href: string }[];
  license: string;
  contributing: string;
  status: "active" | "maintenance" | "experimental";
};

const projects: Project[] = [
  {
    slug: "zed",
    name: "Zed",
    tagline: "Keyboard-first task runner",
    description:
      "Zed is a small command runner that treats your repo like a pipeline: steps declare inputs, outputs, and cache keys so repeat work is skipped without you memorizing flags.",
    motivation:
      "Most teams outgrow shell one-liners but do not want a full build system. Zed sits between npm scripts and Make: explicit graphs, readable logs, and fast iteration on laptops and CI.",
    features: [
      "Declarative steps with namespaced cache keys",
      "Parallel fan-out where the graph allows it",
      "Human log format with timings per step",
      "Watch mode that only re-runs affected steps",
    ],
    designNotes:
      "The core is a directed acyclic graph executor with content-addressed caches. Steps are pure functions over the filesystem; side effects are isolated so CI and local runs stay aligned.",
    stack: ["Rust", "Tokio"],
    quickstart: "curl -sSf https://example.dev/zed/install.sh | sh && zed init",
    links: [
      { label: "Source", href: "https://github.com" },
      { label: "Docs", href: "https://github.com" },
    ],
    license: "MIT",
    contributing:
      "Issues and small PRs welcome. Run the test suite before opening a PR; keep changes focused and include a note in the PR body if behavior shifts for existing recipes.",
    status: "active",
  },
  {
    slug: "flux",
    name: "Flux",
    tagline: "Tiny state container for UI kits",
    description:
      "Flux gives you a predictable store with subscriptions and selectors, sized for design systems that should not ship a framework. No proxies, no magic, just functions and types.",
    motivation:
      "Component libraries often drag in a global state solution that fights tree-shaking and versioning. Flux keeps the surface area tiny so consumers can wrap it or replace it without rewiring apps.",
    features: [
      "Typed selectors with referential stability helpers",
      "Dev-only subscription logger for debugging",
      "Middleware hook for logging and persistence",
      "Zero dependencies, ESM and CJS builds",
    ],
    designNotes:
      "API mirrors a minimal pub/sub with an immutable snapshot model. Updates batch synchronously by default; async middleware can opt into scheduling to avoid tearing in React concurrent mode.",
    stack: ["TypeScript"],
    quickstart: "npm install @stackblogger/flux",
    links: [{ label: "Source", href: "https://github.com" }],
    license: "Apache-2.0",
    contributing:
      "Please open an issue before larger refactors. Add tests for any new public API and keep bundle size impact noted in the PR checklist.",
    status: "maintenance",
  },
  {
    slug: "prism",
    name: "Prism",
    tagline: "Static preview server",
    description:
      "Prism serves folders of static HTML with correct MIME types, optional SPA fallback, and tight defaults for local previews. It pairs well with static site generators and exported Next.js output.",
    motivation:
      "Python http.server and friends mislabel assets, break module workers, and hide caching quirks. Prism exists so previewing a dist folder matches what you see behind nginx or GitHub Pages.",
    features: [
      "Correct MIME map for modern assets",
      "Optional history fallback for SPAs",
      "Range requests for large media during demos",
      "Single binary, no config required",
    ],
    designNotes:
      "Built on the standard library HTTP stack with a small routing layer for fallbacks. Static file responses set conservative cache headers for local use while still allowing live reload proxies in front.",
    stack: ["Go"],
    quickstart: "go install github.com/example/prism@latest && prism ./out",
    links: [
      { label: "Source", href: "https://github.com" },
      { label: "Releases", href: "https://github.com" },
    ],
    license: "BSD-3-Clause",
    contributing:
      "Bug reports with a sample directory tree are ideal. Performance patches should include bench numbers from a cold start on a mid-sized static export.",
    status: "experimental",
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
