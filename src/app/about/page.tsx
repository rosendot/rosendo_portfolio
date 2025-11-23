import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            About Me
          </h1>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Web Developer & 3D Designer
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I'm Rosendo Torres, a passionate web developer specializing in
              creating immersive digital experiences. With expertise in modern
              web technologies like React, Next.js, and Three.js, I bring ideas
              to life through code and creativity.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              My focus is on building visually stunning, performant websites
              that incorporate 3D animations and interactive elements. Whether
              it's a personal portfolio, a business website, or a custom
              template, I strive to deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">
                Technical Skills
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• React.js & Next.js</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Three.js & 3D Animation</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
                <li>• Responsive Design</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">
                What I Offer
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Custom Website Development</li>
                <li>• 3D Interactive Experiences</li>
                <li>• Template Design & Development</li>
                <li>• Performance Optimization</li>
                <li>• SEO-Friendly Solutions</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Let's Work Together
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
