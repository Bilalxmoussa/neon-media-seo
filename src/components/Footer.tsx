import { siteConfig } from "@/config/site";

export default function Footer() {
  const { footer } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center" aria-hidden="true">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6 text-sm">
              {footer.description}
            </p>
            <div className="flex gap-3">
              {Object.entries(footer.socialLinks)
                .filter(([, url]) => url)
                .map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                    aria-label={`Follow ${siteConfig.businessName} on ${platform}`}
                  >
                    <span className="text-xs font-bold uppercase" aria-hidden="true">
                      {platform.charAt(0)}
                    </span>
                  </a>
                ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Industries</h4>
            <ul className="space-y-2.5">
              {footer.industryLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2.5">
              {footer.blogLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  All Articles
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Locations</h4>
            <ul className="space-y-2.5">
              {footer.locationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
