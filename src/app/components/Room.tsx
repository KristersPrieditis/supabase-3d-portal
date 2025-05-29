'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Room() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        shadows
        camera={{ position: [0, 0, 0.1], fov: 75 }} // Put camera inside the room
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />

        {/* Inverted box to act as room */}
        <mesh>
          <boxGeometry args={[10, 10, 10]} />
          <meshStandardMaterial color="#f97316" side={2} />
        </mesh>

        {/* Podium in center of room */}
        <mesh position={[0, -3, -3]} castShadow>
          <boxGeometry args={[1.5, 2.5, 1.5]} />
          <meshStandardMaterial color="#d97706" />
        </mesh>

        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  )
}

