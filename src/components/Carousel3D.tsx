"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  color: string;
}

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  totalItems: number;
  currentIndex: number;
  radius: number;
}

function CarouselItem3D({
  item,
  index,
  totalItems,
  currentIndex,
  radius,
}: CarouselItemProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = (index / totalItems) * Math.PI * 2;
  const targetAngle = -(currentIndex / totalItems) * Math.PI * 2;

  useFrame(() => {
    if (meshRef.current) {
      const x = Math.sin(angle + targetAngle) * radius;
      const z = Math.cos(angle + targetAngle) * radius;
      meshRef.current.position.x = x;
      meshRef.current.position.z = z;

      // Scale based on z position (items closer to front are larger)
      const scale = 0.8 + (z / radius) * 0.4;
      meshRef.current.scale.setScalar(scale);

      // Rotate to face center
      meshRef.current.rotation.y = -(angle + targetAngle);

      // Adjust opacity based on position
      if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
        meshRef.current.material.opacity = 0.5 + (z / radius) * 0.5;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2.5, 3, 0.1]} />
      <meshStandardMaterial
        color={item.color}
        transparent
        opacity={0.9}
        metalness={0.3}
        roughness={0.4}
      />
      <Text
        position={[0, 0.5, 0.06]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {item.title}
      </Text>
      <Text
        position={[0, -0.2, 0.06]}
        fontSize={0.15}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.2}
      >
        {item.description}
      </Text>
    </mesh>
  );
}

function Scene({ items, currentIndex }: { items: CarouselItem[]; currentIndex: number }) {
  return (
    <>
      <color attach="background" args={["#1e293b"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {items.map((item, index) => (
        <CarouselItem3D
          key={item.id}
          item={item}
          index={index}
          totalItems={items.length}
          currentIndex={currentIndex}
          radius={5}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default function Carousel3D() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock data
  const items: CarouselItem[] = [
    {
      id: 1,
      title: "Product 1",
      description: "Premium wireless headphones",
      color: "#8b5cf6",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Smart fitness tracker",
      color: "#ec4899",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Professional camera lens",
      color: "#06b6d4",
    },
    {
      id: 4,
      title: "Product 4",
      description: "Ergonomic office chair",
      color: "#10b981",
    },
    {
      id: 5,
      title: "Product 5",
      description: "Mechanical keyboard",
      color: "#f59e0b",
    },
    {
      id: 6,
      title: "Product 6",
      description: "4K gaming monitor",
      color: "#ef4444",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="w-full h-full relative bg-gradient-to-br from-slate-800 to-slate-900">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene items={items} currentIndex={currentIndex} />
      </Canvas>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
        <button
          onClick={handlePrevious}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          aria-label="Previous item"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
          {currentIndex + 1} / {items.length}
        </div>

        <button
          onClick={handleNext}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          aria-label="Next item"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm z-10">
        Drag to rotate • Click arrows to navigate
      </div>
    </div>
  );
}
