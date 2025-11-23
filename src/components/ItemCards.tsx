"use client";

import { useState } from "react";
import Image from "next/image";

interface Card {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  price?: string;
  rating?: number;
  badge?: string;
}

type LayoutType = "grid" | "masonry" | "list";
type CardStyle = "default" | "elevated" | "minimal" | "gradient";

export default function ItemCards() {
  const [layout, setLayout] = useState<LayoutType>("grid");
  const [cardStyle, setCardStyle] = useState<CardStyle>("default");

  const cards: Card[] = [
    {
      id: 1,
      title: "Wireless Headphones",
      description: "Premium noise-canceling headphones with 30-hour battery life",
      category: "Audio",
      price: "$299",
      rating: 4.8,
      badge: "Best Seller",
    },
    {
      id: 2,
      title: "Smart Watch Pro",
      description: "Advanced fitness tracking with heart rate monitor and GPS",
      category: "Wearables",
      price: "$399",
      rating: 4.6,
    },
    {
      id: 3,
      title: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with custom switches",
      category: "Peripherals",
      price: "$159",
      rating: 4.9,
      badge: "New",
    },
    {
      id: 4,
      title: "4K Webcam",
      description: "Ultra HD webcam with auto-focus and noise reduction",
      category: "Video",
      price: "$199",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Ergonomic Mouse",
      description: "Vertical ergonomic mouse for comfortable all-day use",
      category: "Peripherals",
      price: "$79",
      rating: 4.5,
    },
    {
      id: 6,
      title: "USB-C Hub",
      description: "7-in-1 USB-C hub with HDMI, ethernet, and card reader",
      category: "Accessories",
      price: "$49",
      rating: 4.4,
      badge: "Popular",
    },
  ];

  const getCardClassName = () => {
    const baseClass = "group relative overflow-hidden transition-all duration-300 h-full flex flex-col";

    switch (cardStyle) {
      case "elevated":
        return `${baseClass} bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2`;
      case "minimal":
        return `${baseClass} bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-purple-500/50`;
      case "gradient":
        return `${baseClass} bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl border border-purple-500/30 hover:border-purple-400`;
      default:
        return `${baseClass} bg-slate-800 rounded-lg border border-slate-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20`;
    }
  };

  const getLayoutClassName = () => {
    switch (layout) {
      case "masonry":
        return "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6";
      case "list":
        return "flex flex-col gap-4";
      default:
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
    }
  };

  const renderCard = (card: Card) => (
    <div key={card.id} className={layout === "masonry" ? "break-inside-avoid" : ""}>
      <div className={getCardClassName()}>
        {/* Badge */}
        {card.badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
              {card.badge}
            </span>
          </div>
        )}

        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-20 h-20 text-white/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className={`p-6 flex-1 flex flex-col ${layout === "list" ? "sm:flex-row sm:items-center sm:gap-6" : ""}`}>
          <div className="flex-1">
            {/* Category */}
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
              cardStyle === "elevated"
                ? "bg-purple-100 text-purple-700"
                : "bg-purple-600/20 text-purple-300"
            }`}>
              {card.category}
            </span>

            {/* Title */}
            <h3 className={`text-xl font-bold mb-2 ${
              cardStyle === "elevated" ? "text-slate-900" : "text-white"
            } group-hover:text-purple-400 transition-colors`}>
              {card.title}
            </h3>

            {/* Description */}
            <p className={`text-sm mb-4 ${
              cardStyle === "elevated" ? "text-slate-600" : "text-slate-300"
            }`}>
              {card.description}
            </p>

            {/* Rating */}
            {card.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(card.rating!)
                          ? "text-yellow-400"
                          : "text-slate-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className={`text-sm font-medium ${
                  cardStyle === "elevated" ? "text-slate-700" : "text-slate-400"
                }`}>
                  {card.rating}
                </span>
              </div>
            )}
          </div>

          {/* Price & Button */}
          <div className={`flex items-center ${layout === "list" ? "flex-col sm:flex-row gap-4" : "justify-between"} mt-auto`}>
            {card.price && (
              <span className={`text-2xl font-bold ${
                cardStyle === "elevated" ? "text-purple-600" : "text-purple-400"
              }`}>
                {card.price}
              </span>
            )}
            <button className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              cardStyle === "elevated"
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-purple-600/80 text-white hover:bg-purple-500"
            } transform hover:scale-105`}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 overflow-auto">
      <div className="container mx-auto p-8">
        {/* Controls */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 mb-8 border border-slate-700">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Layout Selector */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Layout Style
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setLayout("grid")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    layout === "grid"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setLayout("masonry")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    layout === "masonry"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  Masonry
                </button>
                <button
                  onClick={() => setLayout("list")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    layout === "list"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  List
                </button>
              </div>
            </div>

            {/* Card Style Selector */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Card Style
              </label>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setCardStyle("default")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    cardStyle === "default"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  Default
                </button>
                <button
                  onClick={() => setCardStyle("elevated")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    cardStyle === "elevated"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  Elevated
                </button>
                <button
                  onClick={() => setCardStyle("minimal")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    cardStyle === "minimal"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  Minimal
                </button>
                <button
                  onClick={() => setCardStyle("gradient")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    cardStyle === "gradient"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  Gradient
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Display */}
        <div className={getLayoutClassName()}>
          {cards.map(renderCard)}
        </div>
      </div>
    </div>
  );
}
