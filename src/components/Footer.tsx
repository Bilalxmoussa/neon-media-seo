import { siteConfig } from "@/config/site";

export default function Footer() {
  const { footer } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-light border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-white">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6 text-sm">
              {footer.description}
            </p>
            <div className="flex gap-4">
              {Object.entries(footer.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
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
              <li>
                <a
                  href="/seo-ottawa"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  SEO Services
                </a>
              </li>
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
            <h4 className="text-white font-semibold mb-4 text-sm">Blog</h4>
            <ul className="space-y-2.5">
              {footer.blogLinks.map((link) => (
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
            <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                {siteConfig.streetAddress}
                <br />
                {siteConfig.city}, {siteConfig.province}
                <br />
                {siteConfig.postalCode}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            {siteConfig.keyword} &middot; {siteConfig.city}, {siteConfig.province}
          </p>
        </div>
      </div>
    </footer>
  );
}
