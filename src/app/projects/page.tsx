import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Given Ministry Board Game Store",
      description:
        "Headless e-commerce site for a family-owned board game store with full Shopify integration, real-time cart management, and custom warm earth-toned design.",
      technologies: ["Next.js", "Shopify API", "TypeScript"],
      status: "Completed",
      url: "https://www.givenministryboardgames.com/",
      image: "/projects/given-ministry.webp",
    },
    {
      id: 2,
      title: "RosendoHQ",
      description:
        "Comprehensive full-stack personal life management platform with 13 modules including shopping lists, media tracking, reading tracker, car maintenance, habits & goals, and more. Features Supabase backend, real-time updates, and Sentry monitoring.",
      technologies: ["Supabase", "React", "Sentry", "PostgreSQL"],
      status: "In Progress",
    },
    {
      id: 3,
      title: "Mi Fiesta Rentals",
      description:
        "Modern party rental website for Rio Grande Valley with interactive GeoJSON delivery zone mapping, tables & chairs inventory display, and zone-based pricing. JSON-based data management with plans for Stripe/Shopify integration.",
      technologies: ["Leaflet", "GeoJSON", "Tailwind CSS"],
      status: "In Progress",
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
            My Projects
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            A collection of my recent development work and creative projects.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-purple-500 transition-all overflow-hidden"
              >
                {"image" in project && project.image ? (
                  <div className="aspect-video relative bg-slate-700">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 flex flex-col items-center justify-center gap-3">
                    {project.status === "In Progress" ? (
                      <>
                        <div className="text-6xl">🚧</div>
                        <span className="text-yellow-300 text-lg font-semibold">
                          Under Construction
                        </span>
                        <span className="text-slate-400 text-sm">
                          Coming Soon
                        </span>
                      </>
                    ) : (
                      <span className="text-slate-500 text-lg">
                        Project Preview
                      </span>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === "Completed"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-yellow-500/20 text-yellow-300"
                        }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {"url" in project && project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View Live Site →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">
              Interested in working together on a project?
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
