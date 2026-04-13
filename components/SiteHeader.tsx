import Link from "next/link";
import { OpenSourceLogo } from "@/components/OpenSourceLogo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <OpenSourceLogo href="/" />
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <Link href="/#projects" className="transition-colors hover:text-accent">
            projects
          </Link>
          <Link href="/#about" className="transition-colors hover:text-accent">
            about
          </Link>
          <a
            href="https://me.stackblogger.com/"
            className="transition-colors hover:text-accent"
            rel="noopener noreferrer"
          >
            portfolio
          </a>
        </nav>
      </div>
    </header>
  );
}
