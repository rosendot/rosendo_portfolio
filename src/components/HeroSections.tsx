"use client";

import { useState } from "react";

type HeroStyle = "centered" | "split" | "video-bg" | "gradient-animated" | "minimal";

export default function HeroSections() {
  const [activeStyle, setActiveStyle] = useState<HeroStyle>("centered");

  const renderCenteredHero = () => (
    <div className="relative h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold">
          ✨ New Product Launch
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Transform Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Digital Experience
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Build stunning, responsive websites with our cutting-edge platform.
          Fast, secure, and designed for success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
            Get Started Free
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all">
            Watch Demo
          </button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            14-day free trial
          </div>
        </div>
      </div>
    </div>
  );

  const renderSplitHero = () => (
    <div className="h-full flex flex-col lg:flex-row bg-slate-900">
      {/* Left side - Content */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-xl">
          <div className="inline-block mb-4 px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded text-purple-400 text-xs font-semibold uppercase tracking-wide">
            Next Generation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build Faster.
            <span className="block text-purple-400">Ship Better.</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            The all-in-one platform for modern web development. From idea to production in minutes, not months.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Lightning Fast</h3>
                <p className="text-slate-400 text-sm">Optimized for performance with edge deployment</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Fully Scalable</h3>
                <p className="text-slate-400 text-sm">Grows with your business automatically</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Enterprise Security</h3>
                <p className="text-slate-400 text-sm">Bank-level encryption and compliance</p>
              </div>
            </div>
          </div>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
            Start Building Now →
          </button>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="flex-1 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        <div className="relative z-10 grid grid-cols-2 gap-4 max-w-md">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-lg mb-3" />
              <div className="h-2 bg-white/30 rounded mb-2" />
              <div className="h-2 bg-white/20 rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVideoBgHero = () => (
    <div className="relative h-full overflow-hidden bg-black">
      {/* Video background simulation with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-pink-900/80">
        <div className="absolute inset-0 animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-pink-600/40" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Experience Innovation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
            Immersive technology that brings your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-2xl">
              Explore Now
            </button>
            <button className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold text-lg border-2 border-white hover:bg-white hover:text-slate-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );

  const renderGradientAnimatedHero = () => (
    <div className="relative h-full overflow-hidden bg-slate-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 animate-gradient-shift bg-[length:400%_400%]" />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold shadow-lg">
            🚀 Launching Soon
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
            THE FUTURE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200">
              STARTS HERE
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Revolutionary technology that redefines what's possible.
            Join thousands of innovators shaping tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-110 shadow-2xl">
              Join the Waitlist
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all shadow-xl">
              View Trailer
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">50K+</div>
              <div className="text-sm text-white/60">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">99.9%</div>
              <div className="text-sm text-white/60">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/60">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMinimalHero = () => (
    <div className="h-full flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1 border border-slate-300 rounded-full text-slate-600 text-sm font-medium">
          Simple. Powerful. Elegant.
        </div>
        <h1 className="text-6xl md:text-8xl font-light text-slate-900 mb-6 tracking-tight">
          Design
          <span className="block font-bold">Simplified</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Clean, modern, and focused on what matters most.
          Experience design without the complexity.
        </p>
        <button className="px-10 py-4 bg-slate-900 text-white rounded font-medium text-lg hover:bg-slate-800 transition-all">
          Get Started
        </button>

        {/* Minimal decoration */}
        <div className="mt-20 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-1 bg-slate-300 rounded-full transition-all hover:bg-slate-900"
              style={{ height: `${20 + i * 10}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const heroComponents = {
    centered: renderCenteredHero,
    split: renderSplitHero,
    "video-bg": renderVideoBgHero,
    "gradient-animated": renderGradientAnimatedHero,
    minimal: renderMinimalHero,
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-900">
      {/* Controls */}
      <div className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700 p-4 z-20">
        <div className="max-w-7xl mx-auto">
          <label className="block text-sm font-semibold text-slate-300 mb-3">
            Select Hero Style
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveStyle("centered")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeStyle === "centered"
                  ? "bg-purple-600 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Centered
            </button>
            <button
              onClick={() => setActiveStyle("split")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeStyle === "split"
                  ? "bg-purple-600 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Split Layout
            </button>
            <button
              onClick={() => setActiveStyle("video-bg")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeStyle === "video-bg"
                  ? "bg-purple-600 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Video Background
            </button>
            <button
              onClick={() => setActiveStyle("gradient-animated")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeStyle === "gradient-animated"
                  ? "bg-purple-600 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Gradient Animated
            </button>
            <button
              onClick={() => setActiveStyle("minimal")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeStyle === "minimal"
                  ? "bg-purple-600 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Minimal
            </button>
          </div>
        </div>
      </div>

      {/* Hero Display */}
      <div className="flex-1 relative overflow-hidden">
        {heroComponents[activeStyle]()}
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
