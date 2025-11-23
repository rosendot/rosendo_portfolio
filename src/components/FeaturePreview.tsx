"use client";

import dynamic from "next/dynamic";

const Carousel3D = dynamic(() => import("@/components/Carousel3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-700">
      <span className="text-slate-400 text-2xl">Loading...</span>
    </div>
  ),
});

const Carousel2D = dynamic(() => import("@/components/Carousel2D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-700">
      <span className="text-slate-400 text-2xl">Loading...</span>
    </div>
  ),
});

interface FeaturePreviewProps {
  slug: string;
}

export default function FeaturePreview({ slug }: FeaturePreviewProps) {
  // Only show interactive previews for features that have them
  if (slug === "3d-carousel") {
    return <Carousel3D />;
  }

  if (slug === "2d-carousel") {
    return <Carousel2D />;
  }

  // For all other features, show a placeholder
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
      <div className="text-center text-slate-400">
        <svg
          className="w-24 h-24 mx-auto mb-4 opacity-50"
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
        <p className="text-lg font-medium">Feature Showcase</p>
        <p className="text-sm mt-2 opacity-75">
          See details and use cases below
        </p>
      </div>
    </div>
  );
}
