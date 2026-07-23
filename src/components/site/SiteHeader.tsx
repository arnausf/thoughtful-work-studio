import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline/70 bg-background/55 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link to="/" className="text-sm tracking-tight text-foreground">
          arnau sebastià
        </Link>
        <nav className="flex items-center gap-4 sm:gap-7 md:gap-8">
          <Link
            to="/projects"
            className="link-underline text-sm text-foreground"
            activeProps={{ className: "link-underline text-sm text-accent" }}
          >
            Projects
          </Link>
          <Link
            to="/manifesto"
            className="link-underline text-sm text-foreground"
            activeProps={{ className: "link-underline text-sm text-accent" }}
          >
            Manifesto
          </Link>
          <Link to="/" hash="contact" className="link-underline text-sm text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
