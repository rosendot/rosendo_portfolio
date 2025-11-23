import Link from "next/link";

export default function Features() {
  const features = [
    {
      id: "3d-carousel",
      title: "3D Carousel",
      description: "Interactive 3D carousel with smooth transitions and depth effects",
      category: "3D Components",
      tags: ["Three.js", "Interactive", "Animations"],
      difficulty: "Advanced",
    },
    {
      id: "2d-carousel",
      title: "2D Carousel",
      description: "Classic responsive carousel with touch/swipe support",
      category: "UI Components",
      tags: ["Responsive", "Touch-enabled", "Lightweight"],
      difficulty: "Beginner",
    },
    {
      id: "item-cards",
      title: "Item Cards",
      description: "Versatile card components with hover effects and layouts",
      category: "UI Components",
      tags: ["Responsive", "Customizable", "Animations"],
      difficulty: "Beginner",
    },
    {
      id: "hero-sections",
      title: "Hero Sections",
      description: "Eye-catching hero sections with animations and CTAs",
      category: "Layout",
      tags: ["Responsive", "Animations", "CTA"],
      difficulty: "Beginner",
    },
    {
      id: "navigation-menus",
      title: "Navigation Menus",
      description: "Responsive navigation with mobile menus and dropdowns",
      category: "UI Components",
      tags: ["Responsive", "Mobile-friendly", "Accessible"],
      difficulty: "Intermediate",
    },
    {
      id: "3d-product-viewer",
      title: "3D Product Viewer",
      description: "Interactive 3D product visualization with rotation and zoom",
      category: "3D Components",
      tags: ["Three.js", "E-commerce", "Interactive"],
      difficulty: "Advanced",
    },
    {
      id: "animated-backgrounds",
      title: "Animated Backgrounds",
      description: "Dynamic gradient and particle background effects",
      category: "Effects",
      tags: ["Animations", "Performance", "Customizable"],
      difficulty: "Intermediate",
    },
    {
      id: "form-components",
      title: "Form Components",
      description: "Accessible and validated form inputs with modern styling",
      category: "UI Components",
      tags: ["Accessible", "Validation", "Responsive"],
      difficulty: "Beginner",
    },
    {
      id: "pricing-tables",
      title: "Pricing Tables",
      description: "Flexible pricing table layouts for SaaS and products",
      category: "Layout",
      tags: ["Responsive", "Customizable", "SaaS"],
      difficulty: "Beginner",
    },
    {
      id: "image-galleries",
      title: "Image Galleries",
      description: "Grid and masonry layouts with lightbox functionality",
      category: "UI Components",
      tags: ["Responsive", "Lightbox", "Performance"],
      difficulty: "Intermediate",
    },
    {
      id: "scroll-animations",
      title: "Scroll Animations",
      description: "Elements that animate on scroll with intersection observer",
      category: "Effects",
      tags: ["Animations", "Performance", "Engaging"],
      difficulty: "Intermediate",
    },
    {
      id: "testimonial-sections",
      title: "Testimonial Sections",
      description: "Customer testimonials with carousel and grid layouts",
      category: "Layout",
      tags: ["Social Proof", "Responsive", "Customizable"],
      difficulty: "Beginner",
    },
  ];

  const categories = Array.from(new Set(features.map((f) => f.category)));

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
            Feature Gallery
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Explore individual UI components and features. Each feature is
            modular, customizable, and ready to integrate into your project.
          </p>

          {/* Category Filter Preview */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold transition-all">
              All Features
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-slate-800/50 text-slate-300 hover:bg-slate-700 rounded-lg font-semibold transition-all"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.id}
                href={`/features/${feature.id}`}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-purple-500 transition-all overflow-hidden"
              >
                <div className="aspect-video bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                  <span className="text-slate-500 group-hover:text-slate-400 transition-colors">
                    Feature Preview
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2 ${
                        feature.difficulty === "Beginner"
                          ? "bg-green-600/30 text-green-200"
                          : feature.difficulty === "Intermediate"
                          ? "bg-yellow-600/30 text-yellow-200"
                          : "bg-red-600/30 text-red-200"
                      }`}
                    >
                      {feature.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-purple-300 mb-2">
                    {feature.category}
                  </p>
                  <p className="text-slate-300 mb-4 text-sm">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Need a Custom Feature?
            </h2>
            <p className="text-slate-300 mb-6">
              Don't see what you're looking for? I can create custom components
              tailored to your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Request Custom Feature
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
