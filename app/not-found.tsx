import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-full max-w-md flex-col justify-center px-5 py-24 text-center">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-foreground">Not found</h1>
      <p className="mt-3 text-muted">That project does not exist.</p>
      <Link
        href="/"
        className="mt-8 text-sm text-accent underline-offset-4 hover:underline"
      >
        Back home
      </Link>
    </div>
  );
}
