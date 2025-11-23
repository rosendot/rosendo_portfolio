import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Rosendo Torres
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl">
            Web Developer & 3D Designer
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl">
            Creating stunning web experiences with modern technologies,
            interactive 3D animations, and custom template solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              href="/templates"
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Browse Templates
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-purple-400 hover:bg-purple-400/10 text-purple-200 rounded-lg font-semibold transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-all"
              >
                <div className="aspect-video bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-slate-500">3D Preview {item}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Project {item}
                </h3>
                <p className="text-slate-400">
                  A showcase of interactive 3D elements and modern design.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
