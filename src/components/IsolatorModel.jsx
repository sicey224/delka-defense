import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function IsolatorModel() {
  const groupRef = useRef();

  // Create the wire rope geometry using a continuous 3D curve
  const tubeGeometry = useMemo(() => {
    const points = [];
    const numLoops = 8;
    const plateRadius = 2;
    const height = 1.8;
    const loopRadius = 0.5;

    // Generate points for a spiral/helix that loops around the two plates
    for (let i = 0; i <= numLoops * 20; i++) {
      const t = i / (numLoops * 20);
      const angle = t * Math.PI * 2 * numLoops;
      
      // Base circle position
      const r = plateRadius + Math.cos(angle * 2) * loopRadius;
      const x = Math.cos(t * Math.PI * 2) * r;
      const z = Math.sin(t * Math.PI * 2) * r;
      
      // Oscillation between top and bottom plates
      const y = Math.sin(angle) * (height / 2);
      
      points.push(new THREE.Vector3(x, y, z));
    }

    // Close the loop
    points.push(points[0]);

    const curve = new THREE.CatmullRomCurve3(points);
    curve.closed = true;
    
    // TubeGeometry(curve, tubularSegments, radius, radialSegments, closed)
    return new THREE.TubeGeometry(curve, 300, 0.15, 8, true);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Slow continuous rotation
    }
  });

  return (
    <group ref={groupRef} scale={0.8}>
      {/* Top Plate */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.2, 32]} />
        <meshStandardMaterial 
          color="#0f172a" 
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>
      
      {/* Bottom Plate */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.2, 32]} />
        <meshStandardMaterial 
          color="#0f172a" 
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>

      {/* Wire Rope */}
      <mesh geometry={tubeGeometry}>
        <meshStandardMaterial 
          color="#cbd5e1" 
          metalness={0.9} 
          roughness={0.3} 
        />
      </mesh>

      {/* Center Mount Hole (Top) */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.21, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Center Mount Hole (Bottom) */}
      <mesh position={[0, -1.1, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.21, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  );
}
