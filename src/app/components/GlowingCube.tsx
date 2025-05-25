'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function RotatingCube() {
  const cubeRef = useRef<any>(null)

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01
      cubeRef.current.rotation.x += 0.005
    }
  })

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={1.2}
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  )
}

export default function GlowingCube() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <RotatingCube />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  )
}
