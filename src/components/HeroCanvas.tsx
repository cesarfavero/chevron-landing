"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";

function ChevronMark() {
  const group = useRef<THREE.Group>(null);
  const matA = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.28) * 0.2;
    group.current.rotation.x = Math.sin(t * 0.18) * 0.06;
    if (matA.current) {
      matA.current.emissiveIntensity = 0.55 + Math.sin(t * 1.2) * 0.12;
    }
  });

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 1.15);
    s.lineTo(1.2, -0.2);
    s.lineTo(0.75, -0.2);
    s.lineTo(0, 0.55);
    s.lineTo(-0.75, -0.2);
    s.lineTo(-1.2, -0.2);
    s.lineTo(0, 1.15);
    return s;
  }, []);

  const extrude = useMemo(
    () => ({
      depth: 0.28,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.025,
      bevelSegments: 2,
      curveSegments: 1,
    }),
    [],
  );

  return (
    <Float speed={0.9} rotationIntensity={0.12} floatIntensity={0.35}>
      <group ref={group} position={[0.9, 0.2, -0.5]} scale={1.1}>
        <mesh position={[0, 0.35, 0]}>
          <extrudeGeometry args={[shape, extrude]} />
          <meshStandardMaterial
            ref={matA}
            color="#00FF88"
            emissive="#00FF88"
            emissiveIntensity={0.55}
            metalness={0.85}
            roughness={0.2}
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh position={[0, -0.55, 0]}>
          <extrudeGeometry args={[shape, extrude]} />
          <meshStandardMaterial
            color="#00CC66"
            emissive="#00FF88"
            emissiveIntensity={0.3}
            metalness={0.88}
            roughness={0.22}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 80;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00FF88"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 4]} intensity={1.1} />
      <pointLight position={[-2, 2, 2]} intensity={1.4} color="#00FF88" />
      <ChevronMark />
      <Particles />
    </>
  );
}

export default function HeroCanvas() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          premultipliedAlpha: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
