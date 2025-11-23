"use client";

import { useState, useEffect } from "react";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  color: string;
}

export default function Carousel2D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Mock data
  const items: CarouselItem[] = [
    {
      id: 1,
      title: "Summer Collection",
      description: "Explore our latest summer arrivals with vibrant colors and lightweight fabrics",
      color: "bg-gradient-to-br from-orange-400 to-pink-500",
    },
    {
      id: 2,
      title: "Tech Gadgets",
      description: "Discover cutting-edge technology and innovative devices for modern living",
      color: "bg-gradient-to-br from-blue-500 to-cyan-400",
    },
    {
      id: 3,
      title: "Home & Garden",
      description: "Transform your space with elegant furniture and beautiful decor",
      color: "bg-gradient-to-br from-green-500 to-emerald-400",
    },
    {
      id: 4,
      title: "Sports & Fitness",
      description: "Premium equipment and apparel for your active lifestyle",
      color: "bg-gradient-to-br from-red-500 to-orange-500",
    },
    {
      id: 5,
      title: "Books & Media",
      description: "Immerse yourself in captivating stories and educational content",
      color: "bg-gradient-to-br from-purple-500 to-indigo-500",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Touch handlers for swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full h-full relative bg-slate-800 overflow-hidden">
      {/* Carousel Items */}
      <div
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className={`w-full h-full ${item.color} flex items-center justify-center p-8`}>
              <div className="text-center text-white max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h2>
                <p className="text-lg md:text-xl opacity-90">{item.description}</p>
                <button className="mt-8 px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all z-10"
      >
        {isAutoPlaying ? "Pause" : "Play"}
      </button>

      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm z-10">
        Swipe, use arrows, or keyboard ← →
      </div>

      {/* Progress Counter */}
      <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-semibold z-10">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
}
