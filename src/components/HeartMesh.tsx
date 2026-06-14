import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Heart() {
  const ref = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x, y);
    shape.bezierCurveTo(x, y, x - 0.5, y + 0.5, x - 1, y + 0.5);
    shape.bezierCurveTo(x - 2, y + 0.5, x - 2, y - 0.7, x - 2, y - 0.7);
    shape.bezierCurveTo(x - 2, y - 1.5, x - 1, y - 2.3, x, y - 3);
    shape.bezierCurveTo(x + 1, y - 2.3, x + 2, y - 1.5, x + 2, y - 0.7);
    shape.bezierCurveTo(x + 2, y - 0.7, x + 2, y + 0.5, x + 1, y + 0.5);
    shape.bezierCurveTo(x + 0.5, y + 0.5, x, y, x, y);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: true, bevelSegments: 8, bevelSize: 0.15, bevelThickness: 0.15 });
    geo.center();
    return geo;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const beat = 1 + Math.abs(Math.sin(t * 2)) * 0.12;
    ref.current.scale.setScalar(beat * 0.4);
    ref.current.rotation.y = Math.sin(t * 0.5) * 0.3;
  });

  return (
    <mesh ref={ref} geometry={geometry}>
      <meshStandardMaterial color="#FF6B9D" emissive="#FF1654" emissiveIntensity={0.6} roughness={0.2} metalness={0.5} />
    </mesh>
  );
}

export function HeartMesh() {
  return (
    <div className="h-74 w-74">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 5]} intensity={2} color="#FFD700" />
        <pointLight position={[-3, -2, 3]} intensity={1.5} color="#FF6B9D" />
        <Heart />
      </Canvas>
    </div>
  );
}
