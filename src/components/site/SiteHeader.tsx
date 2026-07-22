import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link
          to="/"
          className="font-mono text-sm tracking-tight text-foreground"
        >
          m. reyes
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            to="/projects"
            className="link-underline text-sm text-foreground"
            activeProps={{ className: "link-underline text-sm text-accent" }}
          >
            Work
          </Link>
          <Link
            to="/"
            hash="thinking"
            className="link-underline text-sm text-foreground"
          >
            Thinking
          </Link>
          <Link
            to="/contact"
            className="link-underline text-sm text-foreground"
            activeProps={{ className: "link-underline text-sm text-accent" }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}