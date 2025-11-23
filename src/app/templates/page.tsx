import Link from "next/link";

export default function Templates() {
  const templates = [
    {
      id: "modern-portfolio",
      title: "Modern Portfolio",
      description: "Clean, minimalist portfolio with smooth animations",
      category: "Portfolio",
      features: ["Responsive", "Dark Mode", "Animations"],
    },
    {
      id: "ecommerce-store",
      title: "E-Commerce Store",
      description: "Full-featured online store template",
      category: "E-Commerce",
      features: ["Product Grid", "Cart", "Checkout"],
    },
    {
      id: "creative-agency",
      title: "Creative Agency",
      description: "Bold design for creative professionals",
      category: "Business",
      features: ["3D Elements", "Scroll Effects", "Case Studies"],
    },
    {
      id: "tech-startup",
      title: "Tech Startup",
      description: "Modern SaaS landing page template",
      category: "Landing Page",
      features: ["Hero Section", "Features Grid", "CTA"],
    },
    {
      id: "restaurant-menu",
      title: "Restaurant & Menu",
      description: "Elegant restaurant website with menu showcase",
      category: "Restaurant",
      features: ["Menu Display", "Reservations", "Gallery"],
    },
    {
      id: "3d-showcase",
      title: "3D Product Showcase",
      description: "Interactive 3D product visualization",
      category: "3D",
      features: ["Three.js", "Interactive Models", "Product Views"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Template Gallery
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Browse our collection of professional website templates and themes.
            Each template is fully customizable and ready to deploy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Link
                key={template.id}
                href={`/templates/${template.id}`}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-purple-500 transition-all overflow-hidden"
              >
                <div className="aspect-video bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                  <span className="text-slate-500 group-hover:text-slate-400 transition-colors">
                    Template Preview
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {template.title}
                    </h3>
                    <span className="px-2 py-1 bg-purple-600/30 text-purple-200 rounded text-xs font-semibold">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-4 text-sm">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {template.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Need a Custom Template?
            </h2>
            <p className="text-slate-300 mb-6">
              Can't find what you're looking for? I can create a custom template
              tailored to your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Request Custom Template
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
