import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Stars({ count = 1500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const gold = new THREE.Color("#FFD700");
    const pink = new THREE.Color("#FF6B9D");
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = Math.random() > 0.5 ? gold : pink;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.02;
      ref.current.rotation.x += dt * 0.005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.9} sizeAttenuation />
    </points>
  );
}

function GlowSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.3;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#FF6B9D"
        emissive="#9B59B6"
        emissiveIntensity={0.8}
        roughness={0.3}
        metalness={0.6}
      />
    </mesh>
  );
}

export function Starfield() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#FFD700" />
        <pointLight position={[-5, -3, 2]} intensity={1.5} color="#FF6B9D" />
        <Stars />
        <GlowSphere />
      </Canvas>
    </div>
  );
}
