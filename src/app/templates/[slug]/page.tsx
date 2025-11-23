import Link from "next/link";
import { notFound } from "next/navigation";

const templateData: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    features: string[];
    techStack: string[];
    longDescription: string;
  }
> = {
  "modern-portfolio": {
    title: "Modern Portfolio",
    description: "Clean, minimalist portfolio with smooth animations",
    category: "Portfolio",
    features: [
      "Fully Responsive Design",
      "Dark Mode Support",
      "Smooth Page Transitions",
      "Interactive Animations",
      "SEO Optimized",
      "Fast Loading",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    longDescription:
      "A modern portfolio template designed for developers and creatives. Features smooth animations, a clean layout, and all the sections you need to showcase your work professionally.",
  },
  "ecommerce-store": {
    title: "E-Commerce Store",
    description: "Full-featured online store template",
    category: "E-Commerce",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Checkout Flow",
      "Product Filtering",
      "Search Functionality",
      "Admin Dashboard",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe Integration"],
    longDescription:
      "Complete e-commerce solution with product management, cart functionality, and secure checkout. Ready to integrate with your payment provider and start selling online.",
  },
  "creative-agency": {
    title: "Creative Agency",
    description: "Bold design for creative professionals",
    category: "Business",
    features: [
      "3D Elements",
      "Scroll Triggered Animations",
      "Case Studies Section",
      "Team Showcase",
      "Client Testimonials",
      "Contact Forms",
    ],
    techStack: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
    longDescription:
      "Stand out with this bold agency template featuring 3D elements and cutting-edge animations. Perfect for showcasing creative work and attracting high-value clients.",
  },
  "tech-startup": {
    title: "Tech Startup",
    description: "Modern SaaS landing page template",
    category: "Landing Page",
    features: [
      "Hero with CTA",
      "Features Grid",
      "Pricing Tables",
      "FAQ Section",
      "Newsletter Signup",
      "Testimonials",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    longDescription:
      "Launch your SaaS product with this conversion-focused landing page. Includes all essential sections to convert visitors into customers.",
  },
  "restaurant-menu": {
    title: "Restaurant & Menu",
    description: "Elegant restaurant website with menu showcase",
    category: "Restaurant",
    features: [
      "Menu Display",
      "Online Reservations",
      "Photo Gallery",
      "Location Map",
      "Hours & Contact",
      "Mobile Optimized",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Google Maps API"],
    longDescription:
      "Elegant template for restaurants and cafes. Showcase your menu, accept reservations, and provide all the information customers need to visit your establishment.",
  },
  "3d-showcase": {
    title: "3D Product Showcase",
    description: "Interactive 3D product visualization",
    category: "3D",
    features: [
      "Interactive 3D Models",
      "Product Customization",
      "Multiple Views",
      "AR Preview (Optional)",
      "Performance Optimized",
      "Mobile Compatible",
    ],
    techStack: ["Next.js", "Three.js", "React Three Fiber", "Tailwind CSS"],
    longDescription:
      "Showcase your products in stunning 3D. Allow customers to interact with, rotate, and explore products from every angle. Perfect for e-commerce or product marketing.",
  },
};

export default function TemplatePage({
  params,
}: {
  params: { slug: string };
}) {
  const template = templateData[params.slug];

  if (!template) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16">
        <Link
          href="/templates"
          className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors"
        >
          ← Back to Templates
        </Link>

        <section className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {template.title}
            </h1>
            <span className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-lg text-sm font-semibold">
              {template.category}
            </span>
          </div>

          <p className="text-xl text-slate-300 mb-12">
            {template.description}
          </p>

          {/* Preview Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 overflow-hidden mb-12">
            <div className="aspect-video bg-slate-700 flex items-center justify-center">
              <span className="text-slate-400 text-2xl">
                Interactive Preview
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Features
              </h2>
              <ul className="space-y-2">
                {template.features.map((feature) => (
                  <li key={feature} className="text-slate-300 flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {template.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              About This Template
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {template.longDescription}
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in This Template?
            </h2>
            <p className="text-purple-100 mb-6">
              Get in touch to discuss customization options and pricing.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-purple-900 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
