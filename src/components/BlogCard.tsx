interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  readTime: string;
  datePublished: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  readTime,
  datePublished,
}: BlogCardProps) {
  const formattedDate = new Date(datePublished).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <a
      href={`/blog/${slug}`}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all"
    >
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 h-48 flex items-center justify-center">
        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <time dateTime={datePublished}>{formattedDate}</time>
          <span>&middot;</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <span className="inline-flex items-center text-primary text-sm font-medium mt-4">
          Read article
          <svg
            className="w-4 h-4 ml-1 group-hover:ml-2 transition-all"
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
      </div>
    </a>
  );
}
