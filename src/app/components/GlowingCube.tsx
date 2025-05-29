'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function RotatingCube() {
  const cubeRef = useRef<any>(null)

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.001
      cubeRef.current.rotation.x += 0.004
    }
  })

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[3.2, 3.2, 3.2]} />
      <meshPhysicalMaterial
        color="#5A8D92"                      // very dark base
        emissive="#5A8D92"                  // glowing edges
        emissiveIntensity={0.2}
        metalness={1}
        roughness={2}
        transmission={1}                    // make it glass-like
        transparent={true}
        thickness={10}                       // control glass depth
        ior={1.5}                           // realistic refraction index
        clearcoat={3}                       // extra glossy finish
        reflectivity={2.0}
      />
    </mesh>
  )
}

export default function GlowingCube() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={2} />
        <RotatingCube />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  )
}

