"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

function RotatingCube() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#9333ea" />
    </mesh>
  );
}

function LoadingPlaceholder() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-slate-400">Loading 3D Scene...</div>
    </div>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <Suspense fallback={<LoadingPlaceholder />}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls enableZoom={true} enablePan={false} />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          {/* 3D Objects */}
          <RotatingCube />
        </Canvas>
      </Suspense>
    </div>
  );
}
