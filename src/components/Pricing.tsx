import { siteConfig } from "@/config/site";

export default function Pricing() {
  const { pricing } = siteConfig;

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            {pricing.heading}
          </h2>
          <p className="text-lg text-gray-600">{pricing.subheading}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border-2 transition-shadow hover:shadow-xl ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-gray-100 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-dark mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-dark">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-primary" : "text-green-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                    : "bg-gray-100 text-dark hover:bg-gray-200"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          All prices in CAD. Custom quotes available for larger projects.{" "}
          <a href="#contact" className="text-primary hover:text-primary-dark font-medium">
            Contact us
          </a>{" "}
          for a free estimate.
        </p>
      </div>
    </section>
  );
}
