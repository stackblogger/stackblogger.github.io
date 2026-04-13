import Link from "next/link";

type Props = {
  className?: string;
  href?: string;
};

export function OpenSourceLogo({ className = "", href = "/" }: Props) {
  const inner = (
    <div className={`logo-opensource ${className}`.trim()}>
      <span className="logo-opensource__word">opensource</span>
      <span className="logo-opensource__tagline">
        by <strong>stackblogger</strong>
      </span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label="opensource by stackblogger, home"
        className="inline-flex rounded-[0.65rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
