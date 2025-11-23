"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import 3D components with no SSR
const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-slate-700 rounded-lg flex items-center justify-center">
      <span className="text-slate-400">Loading 3D Scene...</span>
    </div>
  ),
});

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            3D Demo
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Interactive Three.js examples showcasing 3D capabilities.
          </p>

          <div className="space-y-12">
            {/* Example 1: Basic Cube */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Interactive 3D Cube
              </h2>
              <p className="text-slate-300 mb-6">
                Click and drag to rotate. Scroll to zoom. Built with React Three
                Fiber.
              </p>
              <Scene3D />
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Technologies Used
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Three.js - 3D Graphics Library</li>
                  <li>• React Three Fiber - React Renderer</li>
                  <li>• @react-three/drei - Helpers & Components</li>
                  <li>• Next.js - Framework</li>
                  <li>• TypeScript - Type Safety</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Capabilities
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Interactive 3D Objects</li>
                  <li>• Custom Animations</li>
                  <li>• Lighting & Materials</li>
                  <li>• Camera Controls</li>
                  <li>• Performance Optimized</li>
                  <li>• Mobile Compatible</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Want 3D in Your Project?
              </h2>
              <p className="text-purple-100 mb-6">
                I can create custom 3D experiences tailored to your needs.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-purple-900 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
