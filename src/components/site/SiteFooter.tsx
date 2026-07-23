import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-hairline">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-16 md:grid-cols-4 md:px-10 lg:px-16">
        <div className="md:col-span-2">
          <div className="eyebrow mb-3">Contact</div>
          <a
            href="mailto:arnausebastia98@gmail.com"
            className="link-underline text-2xl tracking-tight text-foreground md:text-3xl"
          >
            arnausebastia98@gmail.com
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            If something resonated with you, I'd love to talk.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-3">Elsewhere</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.linkedin.com/in/arnausebastiafarre" className="link-underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a
                aria-disabled="true"
                className="link-underline cursor-not-allowed text-muted-foreground"
              >
                Resume — Coming Soon
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Site</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="link-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="link-underline">
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 py-6 text-sm text-muted-foreground md:px-10 lg:px-16">
          <span>Barcelona · Remote across EU</span>
        </div>
      </div>
    </footer>
  );
}
