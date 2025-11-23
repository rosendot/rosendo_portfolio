import Link from "next/link";
import { notFound } from "next/navigation";
import FeaturePreview from "@/components/FeaturePreview";

const featureData: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    difficulty: string;
    tags: string[];
    techStack: string[];
    longDescription: string;
    useCases: string[];
    codeExample?: string;
  }
> = {
  "3d-carousel": {
    title: "3D Carousel",
    description: "Interactive 3D carousel with smooth transitions and depth effects",
    category: "3D Components",
    difficulty: "Advanced",
    tags: ["Three.js", "Interactive", "Animations"],
    techStack: ["React Three Fiber", "Three.js", "TypeScript", "Framer Motion"],
    longDescription:
      "Create stunning visual experiences with this 3D carousel component. Features smooth rotation, depth perception, and interactive controls. Perfect for showcasing products, portfolios, or any content that deserves a premium presentation.",
    useCases: [
      "Product showcases for e-commerce",
      "Portfolio presentations",
      "Image galleries with depth",
      "Interactive brand experiences",
    ],
  },
  "2d-carousel": {
    title: "2D Carousel",
    description: "Classic responsive carousel with touch/swipe support",
    category: "UI Components",
    difficulty: "Beginner",
    tags: ["Responsive", "Touch-enabled", "Lightweight"],
    techStack: ["React", "TypeScript", "CSS Animations"],
    longDescription:
      "A reliable, performant carousel component that works everywhere. Fully responsive with touch/swipe support for mobile devices, keyboard navigation for accessibility, and smooth animations.",
    useCases: [
      "Image sliders",
      "Testimonial rotations",
      "Product image galleries",
      "Content previews",
    ],
  },
  "item-cards": {
    title: "Item Cards",
    description: "Versatile card components with hover effects and layouts",
    category: "UI Components",
    difficulty: "Beginner",
    tags: ["Responsive", "Customizable", "Animations"],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    longDescription:
      "Flexible card components that adapt to any use case. Includes multiple layouts, hover effects, and responsive grid systems. Easily customizable to match your brand.",
    useCases: [
      "Product listings",
      "Blog post previews",
      "Team member profiles",
      "Service offerings",
      "Project portfolios",
    ],
  },
  "hero-sections": {
    title: "Hero Sections",
    description: "Eye-catching hero sections with animations and CTAs",
    category: "Layout",
    difficulty: "Beginner",
    tags: ["Responsive", "Animations", "CTA"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    longDescription:
      "Make a powerful first impression with these hero section components. Includes animated backgrounds, engaging copy layouts, and prominent calls-to-action optimized for conversions.",
    useCases: [
      "Landing pages",
      "Homepage headers",
      "Product launches",
      "Campaign pages",
    ],
  },
  "navigation-menus": {
    title: "Navigation Menus",
    description: "Responsive navigation with mobile menus and dropdowns",
    category: "UI Components",
    difficulty: "Intermediate",
    tags: ["Responsive", "Mobile-friendly", "Accessible"],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    longDescription:
      "Professional navigation components that work seamlessly across all devices. Features include responsive mobile menus, dropdown submenus, smooth transitions, and full keyboard accessibility.",
    useCases: [
      "Website headers",
      "Dashboard navigation",
      "Multi-page applications",
      "E-commerce sites",
    ],
  },
  "3d-product-viewer": {
    title: "3D Product Viewer",
    description: "Interactive 3D product visualization with rotation and zoom",
    category: "3D Components",
    difficulty: "Advanced",
    tags: ["Three.js", "E-commerce", "Interactive"],
    techStack: ["React Three Fiber", "Three.js", "TypeScript", "GLTF Support"],
    longDescription:
      "Give customers a hands-on experience with your products through interactive 3D visualization. Supports 360° rotation, zoom controls, and multiple viewing angles. Can load GLTF/GLB models and includes optimized performance for mobile devices.",
    useCases: [
      "E-commerce product pages",
      "Furniture visualization",
      "Tech product showcases",
      "Automotive displays",
    ],
  },
  "animated-backgrounds": {
    title: "Animated Backgrounds",
    description: "Dynamic gradient and particle background effects",
    category: "Effects",
    difficulty: "Intermediate",
    tags: ["Animations", "Performance", "Customizable"],
    techStack: ["React", "Canvas API", "CSS Gradients", "WebGL"],
    longDescription:
      "Add depth and interest to your pages with animated background effects. Includes gradient animations, particle systems, and abstract shapes. Performance-optimized with GPU acceleration and responsive to user interactions.",
    useCases: [
      "Landing page backgrounds",
      "Hero sections",
      "App loading screens",
      "Interactive experiences",
    ],
  },
  "form-components": {
    title: "Form Components",
    description: "Accessible and validated form inputs with modern styling",
    category: "UI Components",
    difficulty: "Beginner",
    tags: ["Accessible", "Validation", "Responsive"],
    techStack: ["React", "TypeScript", "React Hook Form", "Zod"],
    longDescription:
      "Build robust forms with these accessible input components. Includes real-time validation, error handling, multiple input types, and full WCAG compliance. Easy to integrate with backend APIs.",
    useCases: [
      "Contact forms",
      "User registration",
      "Checkout flows",
      "Survey forms",
      "Search interfaces",
    ],
  },
  "pricing-tables": {
    title: "Pricing Tables",
    description: "Flexible pricing table layouts for SaaS and products",
    category: "Layout",
    difficulty: "Beginner",
    tags: ["Responsive", "Customizable", "SaaS"],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    longDescription:
      "Present your pricing options clearly and persuasively. Features multiple layout options, feature comparison tables, highlighted recommended plans, and responsive design for mobile viewing.",
    useCases: [
      "SaaS pricing pages",
      "Subscription plans",
      "Service packages",
      "Product tier comparisons",
    ],
  },
  "image-galleries": {
    title: "Image Galleries",
    description: "Grid and masonry layouts with lightbox functionality",
    category: "UI Components",
    difficulty: "Intermediate",
    tags: ["Responsive", "Lightbox", "Performance"],
    techStack: ["React", "TypeScript", "Lazy Loading", "Image Optimization"],
    longDescription:
      "Showcase images beautifully with grid and masonry layout options. Includes lightbox viewing, lazy loading for performance, responsive image sizing, and smooth transitions. Optimized for large image sets.",
    useCases: [
      "Portfolio galleries",
      "Photography showcases",
      "Product image sets",
      "Before/after displays",
    ],
  },
  "scroll-animations": {
    title: "Scroll Animations",
    description: "Elements that animate on scroll with intersection observer",
    category: "Effects",
    difficulty: "Intermediate",
    tags: ["Animations", "Performance", "Engaging"],
    techStack: ["React", "Intersection Observer API", "Framer Motion"],
    longDescription:
      "Bring your content to life as users scroll through your page. Uses the Intersection Observer API for performance, with customizable animation triggers, delays, and effects. Make your content more engaging without sacrificing performance.",
    useCases: [
      "Landing pages",
      "Long-form content",
      "Feature showcases",
      "Storytelling experiences",
    ],
  },
  "testimonial-sections": {
    title: "Testimonial Sections",
    description: "Customer testimonials with carousel and grid layouts",
    category: "Layout",
    difficulty: "Beginner",
    tags: ["Social Proof", "Responsive", "Customizable"],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    longDescription:
      "Build trust with social proof through beautiful testimonial displays. Includes carousel and grid layouts, star ratings, customer photos, and company logos. Optimized for conversion with strategic placement options.",
    useCases: [
      "Landing pages",
      "Product pages",
      "Service pages",
      "Case studies",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(featureData).map((slug) => ({
    slug: slug,
  }));
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = featureData[slug];

  if (!feature) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16">
        <Link
          href="/features"
          className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors"
        >
          ← Back to Features
        </Link>

        <section className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {feature.title}
            </h1>
            <span className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-lg text-sm font-semibold">
              {feature.category}
            </span>
            <span
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${
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

          <p className="text-xl text-slate-300 mb-12">
            {feature.description}
          </p>

          {/* Interactive Preview Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 overflow-hidden mb-12">
            <div className="aspect-video bg-slate-700">
              <FeaturePreview slug={slug} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Use Cases */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Use Cases
              </h2>
              <ul className="space-y-2">
                {feature.useCases.map((useCase) => (
                  <li key={useCase} className="text-slate-300 flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {useCase}
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
                {feature.techStack.map((tech) => (
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

          {/* Tags */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {feature.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              About This Feature
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {feature.longDescription}
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Use This Feature?
            </h2>
            <p className="text-purple-100 mb-6">
              Get in touch to integrate this feature into your project or discuss customization options.
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
