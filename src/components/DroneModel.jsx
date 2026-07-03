import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function DroneModel(props) {
  const group = useRef();
  const prop1 = useRef();
  const prop2 = useRef();
  const prop3 = useRef();
  const prop4 = useRef();

  useFrame((state, delta) => {
    // Pervaneleri döndür
    const propSpeed = 25;
    if (prop1.current) prop1.current.rotation.y += delta * propSpeed;
    if (prop2.current) prop2.current.rotation.y -= delta * propSpeed;
    if (prop3.current) prop3.current.rotation.y -= delta * propSpeed;
    if (prop4.current) prop4.current.rotation.y += delta * propSpeed;

    // Hafif süzülme ve yana yatma efekti
    if (group.current) {
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.05;
      group.current.rotation.z = Math.cos(state.clock.elapsedTime * 1.5) * 0.05;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 1) * 0.1;
    }
  });

  const bodyMaterial = <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.2} />;
  const darkMaterial = <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.1} />;
  const glowMaterial = <meshBasicMaterial color="#0ea5e9" />;

  return (
    <group ref={group} {...props} dispose={null} scale={0.5} rotation={[0.2, -Math.PI / 4, 0]}>
      {/* Ana Gövde */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.4, 2]} />
        {bodyMaterial}
      </mesh>
      
      {/* Üst Kubbe */}
      <mesh position={[0, 0.25, -0.2]}>
        <sphereGeometry args={[0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        {darkMaterial}
      </mesh>

      {/* Ön Kamera Modülü */}
      <mesh position={[0, -0.1, 1.1]}>
        <cylinderGeometry args={[0.2, 0.2, 0.5, 16]} rotation={[Math.PI/2, 0, 0]} />
        {darkMaterial}
      </mesh>
      {/* Kamera Lensi Parlaması */}
      <mesh position={[0, -0.1, 1.36]}>
        <circleGeometry args={[0.12, 32]} />
        <meshBasicMaterial color="#00f0ff" />
      </mesh>

      {/* 4 Kol (Kollar Çapraz Çıkıyor) */}
      <mesh position={[1.2, 0, 1.2]} rotation={[0, -Math.PI/4, 0]}>
        <boxGeometry args={[2, 0.1, 0.3]} />
        {bodyMaterial}
      </mesh>
      <mesh position={[-1.2, 0, 1.2]} rotation={[0, Math.PI/4, 0]}>
        <boxGeometry args={[2, 0.1, 0.3]} />
        {bodyMaterial}
      </mesh>
      <mesh position={[1.2, 0, -1.2]} rotation={[0, Math.PI/4, 0]}>
        <boxGeometry args={[2, 0.1, 0.3]} />
        {bodyMaterial}
      </mesh>
      <mesh position={[-1.2, 0, -1.2]} rotation={[0, -Math.PI/4, 0]}>
        <boxGeometry args={[2, 0.1, 0.3]} />
        {bodyMaterial}
      </mesh>

      {/* Rotorlar ve Pervaneler */}
      <Rotor position={[2, 0.1, 2]} propRef={prop1} bodyMaterial={bodyMaterial} darkMaterial={darkMaterial} glow={glowMaterial} />
      <Rotor position={[-2, 0.1, 2]} propRef={prop2} bodyMaterial={bodyMaterial} darkMaterial={darkMaterial} glow={glowMaterial} />
      <Rotor position={[2, 0.1, -2]} propRef={prop3} bodyMaterial={bodyMaterial} darkMaterial={darkMaterial} glow={glowMaterial} />
      <Rotor position={[-2, 0.1, -2]} propRef={prop4} bodyMaterial={bodyMaterial} darkMaterial={darkMaterial} glow={glowMaterial} />
    </group>
  );
}

function Rotor({ position, propRef, bodyMaterial, darkMaterial, glow }) {
  return (
    <group position={position}>
      {/* Motor Tabanı */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.4, 0.3, 0.4, 32]} />
        {bodyMaterial}
      </mesh>
      
      {/* Pervane Koruması (Halka) */}
      <mesh position={[0, 0.1, 0]} rotation={[Math.PI/2, 0, 0]}>
        <torusGeometry args={[0.9, 0.05, 16, 64]} />
        <meshStandardMaterial color="#444" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Pervane (Dönen Kısım) */}
      <group position={[0, 0.1, 0]} ref={propRef}>
         <mesh>
           <boxGeometry args={[1.7, 0.02, 0.15]} />
           {darkMaterial}
         </mesh>
         <mesh rotation={[0, Math.PI/2, 0]}>
           <boxGeometry args={[1.7, 0.02, 0.15]} />
           {darkMaterial}
         </mesh>
         {/* Pervane Merkezi Göbek */}
         <mesh>
           <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
           <meshStandardMaterial color="#f97316" />
         </mesh>
      </group>

      {/* Alt Motor Ateşleyici / Işık */}
      <mesh position={[0, -0.3, 0]} rotation={[Math.PI/2, 0, 0]}>
        <circleGeometry args={[0.25, 32]} />
        {glow}
      </mesh>
    </group>
  );
}
