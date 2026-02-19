export interface IndustryConfig {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  h1: string;
  heroDescription: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  features: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedIndustries: string[];
  relatedBlogSlugs: string[];
}

export const industries: IndustryConfig[] = [
  {
    slug: "restaurants",
    title: "Restaurant Website Design Ottawa",
    metaTitle:
      "Restaurant Website Design Ottawa | Online Ordering & Menus - Neon Web Agency",
    metaDescription:
      "Custom restaurant website design in Ottawa with online ordering, menu displays, and reservation systems. Help your restaurant attract more diners and increase online orders.",
    keyword: "restaurant website design Ottawa",
    h1: "Restaurant Website Design Ottawa",
    heroDescription:
      "We build beautiful, conversion-focused websites for Ottawa restaurants with integrated online ordering, menu displays, reservation systems, and local SEO that puts your restaurant in front of hungry customers.",
    sections: [
      {
        heading: "Why Ottawa Restaurants Need a Professional Website",
        content: [
          "Ottawa's restaurant scene is booming, with over 2,800 dining establishments competing for customers across the National Capital Region. From fine dining in the ByWard Market to casual eateries in Westboro, standing out online is no longer optional — it's essential for survival. A professional restaurant website is your most powerful marketing tool, working 24/7 to attract new diners and keep regulars coming back.",
          "Studies show that 77% of diners visit a restaurant's website before deciding where to eat. If your website is outdated, slow, or missing key information like menus and hours, you're losing customers to competitors with better online presences. Understanding <a href=\"/blog/web-design-cost-ottawa\">how much a website costs</a> is the first step toward fixing that. Mobile-friendly design is especially critical — over 72% of restaurant searches in Ottawa happen on smartphones, often by people looking for a place to eat right now.",
          "At Neon Web Agency, we specialize in restaurant website design in Ottawa that combines stunning visual design with practical functionality. Every restaurant website we build includes mobile-optimized menu displays, online ordering integration, Google Maps embedding, and <a href=\"/blog/local-seo-guide-ottawa\">local SEO optimization</a> to help you rank for searches like 'restaurants near me' and 'best restaurants in Ottawa'.",
        ],
      },
      {
        heading: "What Makes a Great Restaurant Website",
        content: [
          "A great restaurant website does more than look good — it drives real business results. We focus on the features that matter most to Ottawa diners: fast-loading menus that are easy to read on any device, prominent display of hours and location, high-quality food photography galleries, and seamless online ordering that doesn't frustrate customers.",
          "We integrate with popular platforms like Square, Toast, and DoorDash to provide a frictionless ordering experience directly on your website. This keeps customers on your site (instead of third-party apps that charge 30% commissions) and builds direct relationships with your diners. Our restaurant clients typically see a 200-300% increase in direct online orders after launching their new website.",
          "Every restaurant website we build also includes reservation system integration (OpenTable, Resy, or custom solutions), event and private dining pages, catering menus, and a blog section for sharing recipes, events, and seasonal menu updates — all of which help with SEO and keep customers engaged with your brand.",
        ],
      },
      {
        heading: "Local SEO for Ottawa Restaurants",
        content: [
          "Ranking on Google for restaurant-related searches in Ottawa can transform your business. We optimize every restaurant website for local search terms including 'restaurants Ottawa,' 'best brunch Ottawa,' and neighborhood-specific terms like 'ByWard Market restaurants' or 'Glebe dinner spots.'",
          "Our restaurant <a href=\"/seo-ottawa\">SEO strategy</a> includes optimizing your Google Business Profile, building local citations, implementing restaurant-specific schema markup (menu, opening hours, price range), and creating content that targets the exact searches Ottawa diners are making. We've helped dozens of Ottawa restaurants achieve first-page rankings and significantly increase their covers.",
        ],
      },
    ],
    features: [
      {
        title: "Online Ordering Integration",
        description:
          "Direct ordering on your website — no third-party commissions. Integrates with Square, Toast, or custom solutions.",
      },
      {
        title: "Mobile-First Menu Design",
        description:
          "Beautiful, easy-to-read menus optimized for smartphones. Update items, prices, and specials anytime.",
      },
      {
        title: "Reservation System",
        description:
          "Seamless booking integration with OpenTable, Resy, or a custom reservation form built into your site.",
      },
      {
        title: "Food Photography Gallery",
        description:
          "Showcase your dishes with optimized image galleries that load fast and look stunning on every device.",
      },
      {
        title: "Google Maps & Hours",
        description:
          "Prominent location display with embedded Google Maps, hours of operation, and click-to-call functionality.",
      },
      {
        title: "Local SEO Optimization",
        description:
          "Rank higher for 'restaurants near me' and Ottawa-specific dining searches with built-in local SEO.",
      },
    ],
    stats: [
      { value: "250%", label: "Average increase in online orders" },
      { value: "77%", label: "Of diners check websites first" },
      { value: "40+", label: "Ottawa restaurants served" },
      { value: "<2s", label: "Page load time" },
    ],
    faqs: [
      {
        question: "How much does a restaurant website cost in Ottawa?",
        answer:
          "Our restaurant website packages start at $1,499 for a professional site with menu display and contact information. Websites with online ordering integration and reservation systems typically range from $3,499 to $6,999 depending on complexity and features needed.",
      },
      {
        question: "Can you integrate online ordering into my restaurant website?",
        answer:
          "Yes! We integrate with popular platforms like Square Online, Toast, and custom ordering solutions. Direct online ordering through your website eliminates the 25-30% commissions charged by third-party delivery apps, putting more profit in your pocket.",
      },
      {
        question: "How long does it take to build a restaurant website?",
        answer:
          "Most restaurant websites are completed within 2-3 weeks. If you need online ordering or reservation system integration, the timeline may extend to 3-4 weeks to ensure everything works perfectly.",
      },
      {
        question: "Will my restaurant website show up on Google?",
        answer:
          "Absolutely. Every restaurant website we build includes local SEO optimization targeting Ottawa-specific searches. We also set up and optimize your Google Business Profile to improve visibility in Google Maps and local search results.",
      },
      {
        question: "Can I update my menu myself?",
        answer:
          "Yes! We build restaurant websites with easy-to-use content management systems that let you update menus, prices, specials, and hours anytime without any technical knowledge. We also provide training to make sure you're comfortable making changes.",
      },
    ],
    relatedIndustries: ["dental", "lawyers", "ecommerce"],
    relatedBlogSlugs: [
      "web-design-cost-ottawa",
      "why-your-business-needs-website-2025",
      "local-seo-guide-ottawa",
    ],
  },
  {
    slug: "dental",
    title: "Dental Website Design Ottawa",
    metaTitle:
      "Dental Website Design Ottawa | Patient-Focused Websites - Neon Web Agency",
    metaDescription:
      "Professional dental website design in Ottawa with online booking, patient portals, and local SEO. Attract more patients and grow your dental practice online.",
    keyword: "dental website design Ottawa",
    h1: "Dental Website Design Ottawa",
    heroDescription:
      "We create professional, trust-building websites for Ottawa dental practices with online appointment booking, patient portals, and local SEO that attracts new patients and fills your schedule.",
    sections: [
      {
        heading: "Why Ottawa Dental Practices Need a Modern Website",
        content: [
          "Ottawa is home to over 400 dental practices competing for patients across the National Capital Region. With 85% of potential patients searching online before choosing a dentist, your website is often the first impression your practice makes. A modern, professional dental website builds trust, showcases your expertise, and converts visitors into booked appointments.",
          "Many Ottawa dental practices still rely on outdated websites that are slow, not mobile-friendly, and lack essential features like online booking. Knowing <a href=\"/blog/how-to-choose-web-designer-ottawa\">how to choose the right web designer</a> can make all the difference. In a competitive market, this puts you at a significant disadvantage. Patients expect to find detailed information about services, view the office and team, read reviews, and book appointments — all from their smartphone.",
          "At Neon Web Agency, we specialize in dental website design in Ottawa that combines medical professionalism with modern web design. Every dental website we build is AODA-compliant, mobile-responsive, and optimized to rank for high-value searches like 'dentist Ottawa,' 'family dentist near me,' and procedure-specific terms like 'dental implants Ottawa.'",
        ],
      },
      {
        heading: "Essential Features for Dental Websites",
        content: [
          "A successful dental website does more than list your services — it builds patient trust and streamlines your operations. We include online appointment booking that integrates with popular dental practice management software, new patient forms, insurance information pages, and a virtual tour of your office to help anxious patients feel comfortable before their first visit.",
          "We also build comprehensive service pages optimized for SEO, covering everything from general dentistry and cleanings to cosmetic procedures, orthodontics, and emergency dental care. Each service page targets specific keywords that Ottawa patients search for, driving organic traffic to your website and increasing appointment bookings.",
          "Patient education content, including blog posts about oral health topics, procedure explanations, and dental care tips, positions your practice as a trusted authority. This content strategy also significantly boosts your search engine rankings and helps potential patients find your practice when researching dental topics online.",
        ],
      },
      {
        heading: "Patient Acquisition Through Local SEO",
        content: [
          "<a href=\"/blog/local-seo-guide-ottawa\">Local SEO</a> is the most cost-effective marketing channel for Ottawa dental practices. We optimize your website to rank for high-intent searches like 'dentist near me,' 'emergency dentist Ottawa,' 'teeth whitening Ottawa,' and neighborhood-specific terms like 'Kanata dentist' or 'Barrhaven family dental.'",
          "Our dental SEO strategy includes optimizing your Google Business Profile, building healthcare-specific citations, implementing dental practice schema markup, and creating targeted content that addresses the specific dental concerns of Ottawa patients. We've helped Ottawa dental practices increase new patient inquiries by 150-200% through strategic <a href=\"/seo-ottawa\">local SEO</a>.",
        ],
      },
    ],
    features: [
      {
        title: "Online Appointment Booking",
        description:
          "24/7 online booking integrated with your practice management software. Reduce phone calls and fill your schedule.",
      },
      {
        title: "Patient Portal Integration",
        description:
          "Secure patient portals for forms, records, and communication. Streamline onboarding for new patients.",
      },
      {
        title: "Service Pages Optimized for SEO",
        description:
          "Detailed pages for each service you offer, targeting the exact keywords Ottawa patients search for.",
      },
      {
        title: "Before & After Gallery",
        description:
          "Showcase your work with HIPAA-compliant before/after galleries that build patient confidence.",
      },
      {
        title: "Team & Office Showcase",
        description:
          "Professional team bios and virtual office tours that help anxious patients feel comfortable.",
      },
      {
        title: "AODA Compliant & Accessible",
        description:
          "Fully accessible website design meeting Ontario accessibility standards for healthcare providers.",
      },
    ],
    stats: [
      { value: "180%", label: "Average increase in patient inquiries" },
      { value: "85%", label: "Of patients search online first" },
      { value: "25+", label: "Dental practices served" },
      { value: "Top 3", label: "Google rankings achieved" },
    ],
    faqs: [
      {
        question: "How much does a dental website cost in Ottawa?",
        answer:
          "Our dental website packages start at $2,499 for a professional site with service pages and contact forms. Websites with online booking integration and patient portals typically range from $3,999 to $7,999. Every package includes local SEO optimization.",
      },
      {
        question: "Can patients book appointments directly through the website?",
        answer:
          "Yes! We integrate with popular dental practice management systems to provide seamless online booking. Patients can see available time slots and book appointments 24/7, which significantly reduces phone call volume and increases booking rates.",
      },
      {
        question: "Is the website HIPAA and AODA compliant?",
        answer:
          "All our dental websites are built to meet Ontario's AODA accessibility standards and follow healthcare privacy best practices. While HIPAA is a US regulation, we apply similar privacy principles for Canadian dental practices and ensure patient data is handled securely.",
      },
      {
        question: "How do you help my dental practice rank on Google?",
        answer:
          "We implement a comprehensive local SEO strategy including Google Business Profile optimization, dental-specific schema markup, targeted service pages, citation building, and content strategy. Most of our dental clients see significant ranking improvements within 3-6 months.",
      },
      {
        question: "Can I update the website content myself?",
        answer:
          "Absolutely. We build dental websites on user-friendly platforms that let you add blog posts, update service descriptions, change team bios, and manage your appointment calendar without any coding knowledge.",
      },
    ],
    relatedIndustries: ["restaurants", "lawyers", "real-estate"],
    relatedBlogSlugs: [
      "web-design-cost-ottawa",
      "how-to-choose-web-designer-ottawa",
      "local-seo-guide-ottawa",
    ],
  },
  {
    slug: "lawyers",
    title: "Law Firm Website Design Ottawa",
    metaTitle:
      "Law Firm Website Design Ottawa | Authority-Building Websites - Neon Web Agency",
    metaDescription:
      "Professional law firm website design in Ottawa. Build authority, attract clients, and grow your legal practice with a website that converts visitors into consultations.",
    keyword: "law firm website design Ottawa",
    h1: "Law Firm Website Design Ottawa",
    heroDescription:
      "We build authoritative, trust-building websites for Ottawa law firms that showcase your expertise, attract qualified clients, and convert website visitors into booked consultations.",
    sections: [
      {
        heading: "Why Ottawa Law Firms Need an Authoritative Website",
        content: [
          "In Ottawa's competitive legal market, your website is often the first interaction potential clients have with your firm. With over 3,000 lawyers practicing in the National Capital Region and 96% of people seeking legal advice using a search engine, a professional website is essential for attracting clients and establishing credibility.",
          "Potential clients researching lawyers evaluate your website within seconds. A modern, professionally designed law firm website signals competence, trustworthiness, and attention to detail — the same qualities clients expect from their legal representation. Conversely, an outdated or poorly designed website can drive potential clients directly to your competitors.",
          "At Neon Web Agency, we understand the unique needs of legal professionals in Ottawa. Whether you choose <a href=\"/blog/wordpress-vs-custom-website\">WordPress or a custom-built website</a>, our law firm websites are designed to build authority, showcase practice areas, highlight team credentials, and make it easy for potential clients to take the next step — whether that's booking a consultation, calling your office, or submitting an intake form.",
        ],
      },
      {
        heading: "Features That Win Clients for Law Firms",
        content: [
          "Effective law firm websites go beyond aesthetics. We build detailed practice area pages targeting high-value keywords like 'family lawyer Ottawa,' 'personal injury lawyer Ottawa,' and 'criminal defence lawyer Ottawa.' Each page is written to address client concerns, demonstrate expertise, and include clear calls to action.",
          "Attorney profile pages with professional photography, credentials, bar admissions, case results, and areas of focus help potential clients choose the right lawyer for their needs. We also build resource libraries, legal guides, and FAQ sections that position your firm as a thought leader and significantly boost organic search traffic.",
          "Case results and client testimonials (where permitted by the Law Society of Ontario) build social proof and trust. We implement these strategically throughout the website, ensuring potential clients see evidence of your firm's success at every touchpoint in their decision-making journey.",
        ],
      },
      {
        heading: "Legal Marketing & SEO in Ottawa",
        content: [
          "Legal keywords are among the most competitive in Ottawa's search landscape. We implement a targeted <a href=\"/seo-ottawa\">SEO strategy</a> that helps your firm rank for high-intent searches that indicate someone needs legal help right now. This includes practice area keywords, location-specific terms, and informational queries that capture clients earlier in their search.",
          "Our legal SEO approach includes optimized Google Business Profile management, legal directory submissions, practice area content strategy, and technical SEO that ensures your website meets Google's performance standards. We've helped Ottawa law firms achieve first-page rankings for highly competitive terms within 4-6 months.",
        ],
      },
    ],
    features: [
      {
        title: "Practice Area Pages",
        description:
          "Detailed, SEO-optimized pages for each practice area targeting high-value legal keywords in Ottawa.",
      },
      {
        title: "Attorney Profiles",
        description:
          "Professional team pages showcasing credentials, experience, bar admissions, and areas of focus.",
      },
      {
        title: "Client Intake Forms",
        description:
          "Secure online intake forms that qualify leads and streamline the client onboarding process.",
      },
      {
        title: "Case Results & Testimonials",
        description:
          "Strategic display of case results and client reviews to build trust and demonstrate success.",
      },
      {
        title: "Resource Library",
        description:
          "Legal guides, blog articles, and FAQs that establish authority and drive organic search traffic.",
      },
      {
        title: "Consultation Booking",
        description:
          "Online consultation scheduling with automated confirmations and calendar integration.",
      },
    ],
    stats: [
      { value: "2x", label: "Average increase in consultations" },
      { value: "96%", label: "Use search engines for legal help" },
      { value: "20+", label: "Law firms served" },
      { value: "Page 1", label: "Google rankings achieved" },
    ],
    faqs: [
      {
        question: "How much does a law firm website cost in Ottawa?",
        answer:
          "Our law firm website packages start at $3,499 for a professional site with practice area pages and contact forms. Comprehensive websites with client portals, intake forms, and extensive content typically range from $5,999 to $9,999.",
      },
      {
        question: "Do you understand Law Society of Ontario marketing rules?",
        answer:
          "Yes. We're experienced in building law firm websites that comply with the Law Society of Ontario's marketing guidelines, including rules around testimonials, advertising claims, and mandatory disclosures.",
      },
      {
        question: "Can you help our firm rank for competitive legal keywords?",
        answer:
          "Absolutely. Legal SEO is competitive, but our targeted approach — combining practice area content, local SEO, and authority building — consistently achieves first-page rankings for Ottawa law firms within 4-6 months.",
      },
      {
        question: "How long does it take to build a law firm website?",
        answer:
          "Most law firm websites take 3-4 weeks to complete. Larger firms with multiple practice areas, extensive attorney profiles, and custom features may take 5-6 weeks.",
      },
      {
        question:
          "Will the website generate leads for our practice?",
        answer:
          "Yes. Every law firm website we build is designed for lead generation, with strategic CTAs, consultation booking, intake forms, and content that addresses the specific legal needs of Ottawa residents. Our law firm clients typically see consultation requests double within 90 days of launch.",
      },
    ],
    relatedIndustries: ["dental", "real-estate", "contractors"],
    relatedBlogSlugs: [
      "web-design-cost-ottawa",
      "wordpress-vs-custom-website",
      "how-to-choose-web-designer-ottawa",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Website Design Ottawa",
    metaTitle:
      "E-Commerce Website Design Ottawa | Online Stores That Sell - Neon Web Agency",
    metaDescription:
      "Custom e-commerce website design in Ottawa. We build online stores with secure payments, inventory management, and conversion optimization that drive real sales.",
    keyword: "ecommerce website Ottawa",
    h1: "E-Commerce Website Design Ottawa",
    heroDescription:
      "We build high-converting e-commerce websites for Ottawa businesses with secure payment processing, inventory management, and conversion optimization that turns browsers into buyers.",
    sections: [
      {
        heading: "Why Ottawa Businesses Need E-Commerce Websites",
        content: [
          "Canadian e-commerce sales exceeded $60 billion in 2024, and Ottawa businesses that aren't selling online are leaving significant revenue on the table. Whether you're a local retailer looking to expand beyond your physical location, a product-based business wanting to reach customers nationwide, or a startup launching directly online, a professional e-commerce website is the foundation of your sales strategy.",
          "Ottawa's unique position as a bilingual capital city with high household income and tech-savvy population makes it an ideal market for e-commerce. Consumers in the National Capital Region increasingly prefer the convenience of online shopping while still wanting to support local businesses. An e-commerce website lets you capture both local and national customers.",
          "At Neon Web Agency, we build e-commerce websites that go beyond basic online stores. Our custom e-commerce solutions include conversion-optimized product pages, secure Canadian payment processing, automated inventory management, shipping calculator integration, and the marketing tools you need to grow your online revenue consistently.",
        ],
      },
      {
        heading: "E-Commerce Features That Drive Sales",
        content: [
          "Successful e-commerce isn't just about listing products — it's about creating a seamless buying experience. We build product pages with high-quality image galleries, detailed descriptions, size/color variants, customer reviews, and related product recommendations that increase average order value by 15-25%.",
          "Our e-commerce websites include secure payment processing with Stripe, PayPal, and <a href=\"/blog/best-website-builders-small-business\">Shopify</a> Payments, supporting all major credit cards, Apple Pay, and Google Pay. We also implement abandoned cart recovery, which our clients use to recapture 10-15% of otherwise lost sales through automated email sequences.",
          "Inventory management, order tracking, automated shipping calculations, tax calculations for Canadian provinces, and integration with popular fulfillment services — we handle the technical complexity so you can focus on growing your business. Every e-commerce site we build also includes a mobile-optimized checkout process, which is critical since over 65% of e-commerce traffic comes from mobile devices.",
        ],
      },
      {
        heading: "E-Commerce SEO & Marketing for Ottawa",
        content: [
          "We optimize every product page and category page for search engines, targeting both local keywords ('buy [product] Ottawa') and broader commercial terms. Product schema markup, optimized meta descriptions, and strategic internal linking help your products appear in Google Shopping results and organic search.",
          "Our e-commerce SEO strategy also includes blog content that drives top-of-funnel traffic, email marketing integration for customer retention, and social media integration that makes it easy for customers to share products. We've helped Ottawa e-commerce businesses increase organic revenue by 200-400% within the first year.",
        ],
      },
    ],
    features: [
      {
        title: "Conversion-Optimized Design",
        description:
          "Product pages, checkout flows, and CTAs designed to maximize conversions and average order value.",
      },
      {
        title: "Secure Canadian Payments",
        description:
          "Stripe, PayPal, Shopify Payments — all major cards, Apple Pay, Google Pay with Canadian tax calculation.",
      },
      {
        title: "Inventory Management",
        description:
          "Real-time inventory tracking, low-stock alerts, and variant management for seamless operations.",
      },
      {
        title: "Mobile-First Checkout",
        description:
          "Streamlined mobile checkout that reduces cart abandonment and increases completed purchases.",
      },
      {
        title: "Abandoned Cart Recovery",
        description:
          "Automated email sequences that recapture 10-15% of otherwise lost sales from abandoned carts.",
      },
      {
        title: "Shipping & Tax Integration",
        description:
          "Automated shipping calculations, Canada Post integration, and accurate tax calculations by province.",
      },
    ],
    stats: [
      { value: "300%", label: "Average revenue increase" },
      { value: "$60B+", label: "Canadian e-commerce market" },
      { value: "35+", label: "Online stores built" },
      { value: "15%", label: "Cart recovery rate" },
    ],
    faqs: [
      {
        question: "How much does an e-commerce website cost in Ottawa?",
        answer:
          "<a href=\"/blog/web-design-cost-ottawa\">E-commerce website pricing</a> depends on the number of products, features, and complexity. Basic online stores start at $3,499, while feature-rich e-commerce platforms with custom functionality typically range from $5,999 to $12,999.",
      },
      {
        question: "Which e-commerce platform do you recommend?",
        answer:
          "We recommend Shopify for most Ottawa businesses due to its reliability, Canadian payment support, and ease of use. For businesses needing more customization, we build with WooCommerce (WordPress) or custom Next.js e-commerce solutions.",
      },
      {
        question: "Can you migrate my existing online store?",
        answer:
          "Yes! We handle migrations from any platform including Shopify, WooCommerce, Magento, Squarespace, and Wix. We transfer products, customer data, and order history while minimizing downtime.",
      },
      {
        question: "How do you handle Canadian tax calculations?",
        answer:
          "Our e-commerce solutions include automated tax calculation for all Canadian provinces and territories, including GST, HST, PST, and QST. We configure tax settings based on your business location and where you ship.",
      },
      {
        question: "Do you provide ongoing e-commerce support?",
        answer:
          "Yes! We offer ongoing maintenance and support packages that include security updates, product management assistance, performance optimization, and priority support for any issues.",
      },
    ],
    relatedIndustries: ["restaurants", "contractors", "real-estate"],
    relatedBlogSlugs: [
      "web-design-cost-ottawa",
      "best-website-builders-small-business",
      "wordpress-vs-custom-website",
    ],
  },
  {
    slug: "contractors",
    title: "Contractor Website Design Ottawa",
    metaTitle:
      "Contractor Website Design Ottawa | Lead-Generating Websites - Neon Web Agency",
    metaDescription:
      "Custom contractor website design in Ottawa. We build lead-generating websites for plumbers, electricians, roofers, and home service professionals that rank on Google.",
    keyword: "contractor website design Ottawa",
    h1: "Contractor Website Design Ottawa",
    heroDescription:
      "We build lead-generating websites for Ottawa contractors, plumbers, electricians, roofers, and home service professionals that rank on Google, build trust, and keep your phone ringing.",
    sections: [
      {
        heading: "Why Ottawa Contractors Need a Professional Website",
        content: [
          "Ottawa homeowners spend over $2 billion annually on home improvements and repairs, and 88% of them start by searching online for local contractors. If your contracting business doesn't have a professional website — or worse, has an outdated one — you're invisible to the vast majority of potential customers. If you're still unsure, here's <a href=\"/blog/why-your-business-needs-website-2025\">why your business needs a website</a> in 2025.",
          "The contracting industry in Ottawa is highly competitive, with thousands of plumbers, electricians, HVAC technicians, roofers, landscapers, and general contractors vying for the same homeowners. A professional website is what separates successful contractors who consistently land jobs from those who rely solely on word of mouth and struggle during slow seasons.",
          "At Neon Web Agency, we've built websites for dozens of Ottawa contractors across every trade. We understand what homeowners look for when choosing a contractor: proof of quality work, licensing and insurance information, clear pricing, easy contact methods, and reviews from satisfied customers. We build all of this into every contractor website we create.",
        ],
      },
      {
        heading: "Features That Generate Leads for Contractors",
        content: [
          "Every contractor website we build is designed as a lead generation machine. Prominent click-to-call buttons, emergency service banners, instant quote request forms, and strategically placed CTAs ensure that every visitor has an easy path to becoming a customer. We've helped contractor clients generate 50-100+ new leads per month through their website alone.",
          "Portfolio galleries showcasing your best work — with before/after images and project descriptions — build homeowner confidence and help you stand out from competitors. We also build service area pages targeting specific Ottawa neighborhoods like Kanata, Barrhaven, Orleans, and Nepean, which drives highly targeted local search traffic.",
          "Online reviews and testimonials from satisfied customers are prominently displayed throughout the site, providing the social proof that homeowners need to feel confident hiring you. We also integrate Google Reviews directly into your website, keeping your social proof fresh and automated.",
        ],
      },
      {
        heading: "Local SEO for Ottawa Contractors",
        content: [
          "Ranking on Google for contractor searches in Ottawa is the single most effective marketing investment you can make. A strong <a href=\"/blog/local-seo-guide-ottawa\">local SEO strategy</a> is essential for getting found by homeowners in your area. We optimize your website for high-intent searches like 'plumber Ottawa,' 'electrician near me,' 'Ottawa roofing company,' and emergency terms like 'emergency plumber Ottawa' that indicate someone needs help right now.",
          "Our contractor SEO strategy includes Google Business Profile optimization, service area pages for every neighborhood you serve, trade-specific schema markup, review generation strategy, and local citation building. We've helped Ottawa contractors go from invisible online to the top of Google within 3-6 months.",
        ],
      },
    ],
    features: [
      {
        title: "Click-to-Call & Emergency Banners",
        description:
          "Prominent phone numbers and emergency service banners that generate calls from customers who need help now.",
      },
      {
        title: "Quote Request Forms",
        description:
          "Custom forms that capture lead details including project type, budget, timeline, and contact information.",
      },
      {
        title: "Before/After Galleries",
        description:
          "Showcase your best work with before/after image galleries that build homeowner confidence.",
      },
      {
        title: "Service Area Pages",
        description:
          "Targeted pages for every Ottawa neighborhood you serve, driving local search traffic.",
      },
      {
        title: "Google Reviews Integration",
        description:
          "Automatically display your latest Google Reviews on your website for fresh social proof.",
      },
      {
        title: "License & Insurance Display",
        description:
          "Prominently showcase your licensing, insurance, and certifications to build trust.",
      },
    ],
    stats: [
      { value: "100+", label: "Monthly leads generated" },
      { value: "88%", label: "Of homeowners search online" },
      { value: "30+", label: "Ottawa contractors served" },
      { value: "#1", label: "Google ranking for clients" },
    ],
    faqs: [
      {
        question: "How much does a contractor website cost in Ottawa?",
        answer:
          "Our contractor website packages start at $1,499 for a professional site with service pages and contact forms. Comprehensive websites with booking systems, service area pages, and portfolio galleries typically range from $2,999 to $5,999.",
      },
      {
        question: "Can customers request quotes through the website?",
        answer:
          "Yes! Every contractor website includes custom quote request forms that capture project details, photos, budget range, and contact information. You receive notifications instantly via email and can respond quickly to win the job.",
      },
      {
        question: "Do you build websites for specific trades?",
        answer:
          "Absolutely. We've built websites for plumbers, electricians, roofers, HVAC technicians, landscapers, painters, general contractors, handymen, and more. Each website is tailored to the specific needs of your trade and target customer.",
      },
      {
        question:
          "How do you help my contracting business rank on Google?",
        answer:
          "We implement targeted local SEO including Google Business Profile optimization, service area pages, trade-specific schema markup, review strategy, and local content. Most contractor clients see significant ranking improvements within 3-4 months.",
      },
      {
        question: "Can I update the website myself?",
        answer:
          "Yes! We build contractor websites with easy-to-use content management systems. Add new project photos, update service offerings, and manage your portfolio without any coding knowledge. We also provide training.",
      },
    ],
    relatedIndustries: ["real-estate", "restaurants", "ecommerce"],
    relatedBlogSlugs: [
      "web-design-cost-ottawa",
      "why-your-business-needs-website-2025",
      "local-seo-guide-ottawa",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Website Design Ottawa",
    metaTitle:
      "Real Estate Website Design Ottawa | IDX & MLS Integration - Neon Web Agency",
    metaDescription:
      "Custom real estate website design in Ottawa with IDX/MLS integration, property listings, and lead capture. Help your real estate business attract more buyers and sellers.",
    keyword: "real estate website design Ottawa",
    h1: "Real Estate Website Design Ottawa",
    heroDescription:
      "We build high-performing real estate websites for Ottawa agents, brokerages, and property companies with IDX/MLS integration, property search, and lead capture that generates qualified buyer and seller leads.",
    sections: [
      {
        heading: "Why Ottawa Real Estate Professionals Need a Custom Website",
        content: [
          "Ottawa's real estate market is one of the most active in Canada, with over 17,000 residential transactions annually and an average home price exceeding $650,000. In this competitive market, real estate agents and brokerages who rely solely on their brokerage's generic website are missing out on a massive opportunity to build their personal brand and generate their own leads.",
          "A custom real estate website positions you as the go-to expert in your market area. <a href=\"/blog/how-to-choose-web-designer-ottawa\">Choosing the right web designer</a> ensures your site truly reflects your brand. While portals like Realtor.ca drive awareness, your own website is where you convert that awareness into relationships. Buyers and sellers want to work with agents who demonstrate local expertise, market knowledge, and professionalism — and your website is the first place they evaluate this.",
          "At Neon Web Agency, we build real estate websites that combine beautiful design with powerful functionality. IDX/MLS integration, property search, neighborhood guides, market reports, and automated lead capture — everything you need to dominate your Ottawa real estate market online.",
        ],
      },
      {
        heading: "Real Estate Website Features That Generate Leads",
        content: [
          "Our real estate websites include IDX integration that displays live MLS listings directly on your site. Visitors can search properties by location, price, property type, and features without ever leaving your website. Saved search alerts keep leads engaged and returning to your site as new listings match their criteria.",
          "We build comprehensive neighborhood and community guide pages for Ottawa areas like Kanata, Barrhaven, Orleans, Westboro, the Glebe, and downtown Ottawa. These pages provide valuable information for relocating buyers and drive significant organic search traffic for neighborhood-specific real estate searches.",
          "Seller-focused content including home valuation tools, market report pages, and selling guides attracts listing leads. We implement CRM integration so every lead is automatically captured and organized, with automated drip campaigns that nurture leads until they're ready to buy or sell.",
        ],
      },
      {
        heading: "Real Estate SEO in Ottawa",
        content: [
          "Ranking for real estate searches in Ottawa drives a consistent stream of buyer and seller leads. We target high-value keywords like 'homes for sale Ottawa,' 'Ottawa real estate agent,' 'condos for sale downtown Ottawa,' and neighborhood-specific searches that indicate serious buying intent.",
          "Our <a href=\"/seo-ottawa\">real estate SEO strategy</a> includes community page optimization, blog content about the Ottawa real estate market, property listing schema markup, and Google Business Profile optimization. We've helped Ottawa real estate professionals achieve top-3 rankings for their target neighborhoods and significantly increase their lead generation.",
        ],
      },
    ],
    features: [
      {
        title: "IDX/MLS Integration",
        description:
          "Live MLS property listings displayed directly on your website with advanced search and saved search alerts.",
      },
      {
        title: "Property Search & Filtering",
        description:
          "Advanced property search with filters for location, price, bedrooms, property type, and more.",
      },
      {
        title: "Neighborhood Guides",
        description:
          "Comprehensive community pages for Ottawa neighborhoods that drive organic search traffic.",
      },
      {
        title: "Home Valuation Tools",
        description:
          "Seller lead capture through home valuation request forms that generate listing leads.",
      },
      {
        title: "CRM Integration",
        description:
          "Automated lead capture and nurturing integrated with popular real estate CRMs.",
      },
      {
        title: "Market Reports",
        description:
          "Automated Ottawa real estate market reports and statistics that position you as a market expert.",
      },
    ],
    stats: [
      { value: "150%", label: "Average increase in leads" },
      { value: "17K+", label: "Annual Ottawa transactions" },
      { value: "15+", label: "Real estate clients" },
      { value: "Top 3", label: "Google rankings achieved" },
    ],
    faqs: [
      {
        question: "How much does a real estate website cost in Ottawa?",
        answer:
          "Real estate website packages start at $2,999 for a professional site with IDX integration and lead capture. Custom websites with CRM integration, neighborhood guides, and advanced features typically range from $4,999 to $9,999.",
      },
      {
        question: "Can you integrate with MLS/IDX?",
        answer:
          "Yes! We integrate with major IDX providers to display live MLS listings directly on your website. Visitors can search, filter, and save listings without leaving your site, and you capture their contact information.",
      },
      {
        question: "Do you build websites for individual agents or brokerages?",
        answer:
          "Both! We create websites for individual real estate agents, teams, and brokerages. Each solution is tailored to your specific needs, market area, and business goals.",
      },
      {
        question: "Can I add my own listings and content?",
        answer:
          "Absolutely. MLS listings update automatically through IDX integration, and you can easily add exclusive listings, blog posts, market updates, and neighborhood content through the user-friendly CMS.",
      },
      {
        question: "How do you help me rank for real estate searches in Ottawa?",
        answer:
          "We create neighborhood-specific community pages, optimize for high-value real estate keywords, build local citations, and implement a content strategy focused on Ottawa's real estate market. Most clients see significant ranking improvements within 4-6 months.",
      },
    ],
    relatedIndustries: ["lawyers", "contractors", "dental"],
    relatedBlogSlugs: [
      "web-design-cost-ottawa",
      "local-seo-guide-ottawa",
      "how-to-choose-web-designer-ottawa",
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryConfig | undefined {
  return industries.find((i) => i.slug === slug);
}
