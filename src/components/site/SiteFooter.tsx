import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-32 border-t border-hairline scroll-mt-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 md:grid-cols-4 md:px-10 lg:px-16">
        <div className="md:col-span-2">
          <div className="eyebrow mb-3">Let’s talk</div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            If something resonated with you, I'd love to talk.
          </p>
          <a
            href="mailto:arnausebastia98@gmail.com"
            className="link-underline mt-6 inline-block text-xl tracking-tight text-foreground sm:text-2xl md:text-4xl lg:text-5xl"
          >
            arnausebastia98@gmail.com
          </a>
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
              <span className="text-muted-foreground">Resume — Coming Soon</span>
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
                Projects
              </Link>
            </li>
            <li>
              <Link to="/manifesto" className="link-underline">
                Manifesto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 py-6 text-sm text-muted-foreground md:px-10 lg:px-16">
          Barcelona · Remote across EU
        </div>
      </div>
    </footer>
  );
}
