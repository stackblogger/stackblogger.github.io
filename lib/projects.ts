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
    slug: "triggy",
    name: "triggy",
    tagline: "triggy is a webpack plugin to lazy load the static contents on user interaction",
    description: "Triggy is a webpack plugin that loads the javascript and css files when user interaction happens like mouse move, scroll etc. It improves web page performance and boosts core web vitals.",
    motivation: "it was built to improve the performance of my own websites. later on i decided to share it with the community.",
    features: ["declarative steps with namespaced cache keys", "parallel fan-out where the graph allows it", "human log format with timings per step", "watch mode that only re-runs affected steps"],
    designNotes: "the core is a directed acyclic graph executor with content-addressed caches. steps are pure functions over the filesystem; side effects are isolated so ci and local runs stay aligned.",
    stack: ["webpack", "typescript"],
    quickstart: "npm install -D triggy",
    links: [
      { label: "source", href: "https://github.com/stackblogger/triggy" }
    ],
    license: "mit",
    contributing:
      "issues and small prs welcome. run the test suite before opening a pr; keep changes focused and include a note in the pr body if behavior shifts for existing recipes.",
    status: "active",
  }
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
