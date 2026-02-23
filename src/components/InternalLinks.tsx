interface LinkItem {
  title: string;
  description: string;
  href: string;
}

export default function InternalLinks({
  heading = "Related Services",
  links,
}: {
  heading?: string;
  links: LinkItem[];
}) {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          {heading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                {link.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {link.description}
              </p>
              <span className="inline-flex items-center text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
