"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);

  // Rotate the sphere on each frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;

      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#a855f7"
        wireframe={false}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
}
