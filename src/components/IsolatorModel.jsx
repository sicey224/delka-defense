import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader';

export default function IsolatorModel() {
  const groupRef = useRef();
  
  // Load the 3DS model
  const object = useLoader(TDSLoader, '/THS-10224-XX.3ds');

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Slow continuous rotation
    }
  });

  return (
    <group ref={groupRef} scale={0.08} position={[-0.5, -0.5, 0]}>
      <primitive object={object} />
    </group>
  );
}
