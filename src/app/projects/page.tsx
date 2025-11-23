import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "3D Portfolio Showcase",
      description:
        "An interactive 3D portfolio featuring animated models and smooth transitions.",
      technologies: ["Three.js", "React", "GSAP"],
      status: "Completed",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with cart, checkout, and admin panel.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      status: "In Progress",
    },
    {
      id: 3,
      title: "Creative Agency Site",
      description:
        "Sleek agency website with scroll animations and interactive elements.",
      technologies: ["React", "Framer Motion", "CSS"],
      status: "Completed",
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
                <div className="aspect-video bg-slate-700 flex items-center justify-center">
                  <span className="text-slate-500 text-lg">
                    Project Preview
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
