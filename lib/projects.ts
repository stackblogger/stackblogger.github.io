export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  motivation: string;
  features: string[];
  stack: string[];
  quickstart: string;
  links: { label: string; href: string }[];
  license: string;
  contribute: string;
  status: "active" | "maintenance" | "experimental";
};

const projects: Project[] = [
  {
    slug: "bitnetjs",
    name: "bitnet.js",
    tagline: "A node.js implementation of the microsoft bitnet.cpp inference framework",
    description: "it is the Node.js implementation of Microsoft's bitnet.cpp inference framework. This repository facilitates real-time interaction between a Node.js frontend and the bitnet 1-bit LLM model using Socket.IO. The app allows users to send queries to the BitNet LLM (Large Language Model) and receive responses line by line via a web interface.",
    motivation: "the actual inference framework by microsoft does not provide a web interface to interact with the model. so i decided to build my own implementation using Node.js and Socket.IO.",
    features: [
      "A simple frontend built with HTML and JavaScript to interact with the BitNet model",
      "Uses Socket.IO for bi-directional communication between the Node.js app and the Python-based BitNet model",
      "Both the Node.js app and BitNet model run in separate Docker containers managed by docker compose"
    ],
    stack: ["html", "python", "dockerfile", "javascript"],
    quickstart: "docker compose up --build -d",
    links: [
      { label: "source", href: "https://github.com/stackblogger/bitnet.js" }
    ],
    license: "mit",
    contribute:
      "raise an issue or submit a pull request if you find any bug or want to add a feature. i will get some time to review and fix it or if its a pull request then i will merge it.",
    status: "active",
  },
  {
    slug: "triggy",
    name: "triggy",
    tagline: "triggy is a webpack plugin to lazy load the static contents on user interaction",
    description: "it loads the javascript and css files when user interaction happens like mouse move, scroll etc. It improves web page performance and boosts core web vitals.",
    motivation: "it was built to improve the performance of my own websites. later on i decided to share it with the world.",
    features: [
      "automatically converts all the src attributes to data-src and href to data-href",
      "loads static resources only on user interaction",
      "very easy integration to webpack builder"
    ],
    stack: ["webpack", "typescript"],
    quickstart: "npm install -D triggy",
    links: [
      { label: "source", href: "https://github.com/stackblogger/triggy" }
    ],
    license: "mit",
    contribute:
      "raise an issue or submit a pull request if you find any bug or want to add a feature. i will review the changes and publish them to the npm registry.",
    status: "active",
  },
  {
    slug: "blog",
    name: "my blog",
    tagline: "CRUD Blog in Angular 15 and NestJs with MongoDB and Google Authentication",
    description: "it is a simple blog built in angular 15 and nestjs with mongodb and google authentication. it uses proper database indexing to handle a large data set of articles efficiently.",
    motivation: "built as a boilerplate for my own projects. it can help others to build a similar blog in a short time.",
    features: [
      "google authentication",
      "infinite scroll",
      "95% test coverage",
      "tested efficiency through locust stress testing",
      "easily handles more than 1 million articles"
    ],
    stack: ["typescript", "angular", "nestjs", "mongodb", "google authentication"],
    quickstart: "git clone https://github.com/stackblogger/my-blog.git",
    links: [
      { label: "source", href: "https://github.com/stackblogger/my-blog" }
    ],
    license: "mit",
    contribute:
      "raise an issue or submit a pull request if you find any bug or want to add a feature.",
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
