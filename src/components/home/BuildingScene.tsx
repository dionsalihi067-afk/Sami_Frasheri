"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { blocks, COLUMN_HEIGHT, columns, windowSegments } from "./building";

const LINE = "#262422";
const FACE = "#fbf9f4";
const RED = "#9b1c23";
const PAPER = "#fbf9f4";

function Building() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const invalidate = useThree((s) => s.invalidate);

  const edges = useMemo(
    () => blocks.map(({ size }) => new THREE.EdgesGeometry(new THREE.BoxGeometry(...size))),
    [],
  );

  const windows = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(windowSegments().flat(2), 3));
    return geometry;
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
      invalidate();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [invalidate]);

  // Renders on demand: frames are only produced while the model is easing towards the pointer.
  useFrame(() => {
    const g = group.current;
    if (!g) return;
    const targetY = pointer.current.x * 0.2;
    const targetX = pointer.current.y * 0.05;
    const dy = targetY - g.rotation.y;
    const dx = targetX - g.rotation.x;
    g.rotation.y += dy * 0.06;
    g.rotation.x += dx * 0.06;
    if (Math.abs(dy) > 0.0005 || Math.abs(dx) > 0.0005) invalidate();
  });

  return (
    <group ref={group} position={[0, -0.6, 1]}>
      {blocks.map(({ center, size }, i) => (
        <group key={i} position={center}>
          <mesh>
            <boxGeometry args={size} />
            <meshLambertMaterial color={FACE} polygonOffset polygonOffsetFactor={1} polygonOffsetUnits={1} />
          </mesh>
          <lineSegments geometry={edges[i]}>
            <lineBasicMaterial color={LINE} />
          </lineSegments>
        </group>
      ))}
      <lineSegments geometry={windows}>
        <lineBasicMaterial color={LINE} transparent opacity={0.45} />
      </lineSegments>
      {columns.map((position, i) => (
        <mesh key={i} position={position}>
          <cylinderGeometry args={[0.028, 0.028, COLUMN_HEIGHT, 10]} />
          <meshBasicMaterial color={RED} />
        </mesh>
      ))}
      <gridHelper args={[14, 28, "#d8cfbf", "#e6dfd2"]} position={[0, 0, -1.5]} />
    </group>
  );
}

function CameraRig() {
  const camera = useThree((s) => s.camera);
  useEffect(() => {
    camera.lookAt(-0.3, 0.3, -1);
  }, [camera]);
  return null;
}

export default function BuildingScene({ active, onReady }: { active: boolean; onReady: () => void }) {
  return (
    <Canvas
      frameloop={active ? "demand" : "never"}
      dpr={[1, 1.75]}
      camera={{ position: [9.1, 5.8, 11], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      onCreated={() => onReady()}
      aria-hidden
    >
      <ambientLight intensity={1.6} />
      <directionalLight position={[5, 8, 4]} intensity={1.4} />
      <fog attach="fog" args={[PAPER, 14, 26]} />
      <CameraRig />
      <Building />
    </Canvas>
  );
}
