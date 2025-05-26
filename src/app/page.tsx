'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import GlowingCube from './components/GlowingCube' 


export default function HomePage() {
  const router = useRouter()

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 overflow-hidden">
      {/* Glowing 3D Cube background */}
      <GlowingCube />

      {/* Logo in top-left corner */}
      <div className="absolute top-7 left-6 z-10">
        <Image
          src="/Logo White.png"
          alt="3D Portal Logo"
          width={150}
          height={150}
        />
      </div>
       

     {/* Hero Text: ART (left) */}
<div className="absolute top-[30%] right-20 transform -translate-y-1/2 z-10">
  <h1 className="text-9xl font-regular leading-tight text-left">
    ART
  </h1>
</div>

{/* Hero Text: SPACE (right) */}
<div className="absolute top-[45%] right-20 transform -translate-y-1/2 z-10">
  <h1 className="text-9xl font-regular leading-tight text-right">
    SPACE.
  </h1>
</div>

{/* Summary text above buttons on the left side of the cube */}
<div className="absolute top-[42%] left-20 transform -translate-y-1/2 z-10 max-w-xl">
  <p className="text-white mb-10 text-xl leading-relaxed">
    <strong>ARtSpace</strong> is a cutting edge platform at the intersection of EdTech, XR, and the creator economy 
    built to empower visual artists through immersive technology.
    Combining <strong>Virtual Reality (VR)</strong> & <strong>Augmented Reality (AR)</strong>. <strong>ARtSpace</strong> gives creators a powerful toolkit to
    curate, preserve, and share their work in completely new ways.
  </p>
</div>

{/* Buttons on the left side of the cube */}
<div className="absolute top-[65%] left-20 transform -translate-y-1/2 z-10 flex gap-4">
  <button
    onClick={() => router.push('/explore')}
    className="px-10 py-2 rounded-xl transition-colors text-white hover:text-[#4d7a7f] hover:border-[#4d7a7f]"
    style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
  >
    Login
  </button>
  <button
    onClick={() => router.push('/create')}
    className="px-10 py-2 rounded-xl transition-colors text-white hover:text-[#4d7a7f] hover:border-[#4d7a7f]"
    style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
  >
    Dashboard
  </button>
</div>


      {/* Buttons in top-right corner */}
      <div className="absolute top-6 right-6 flex gap-4 z-10">
        <button
          onClick={() => router.push('/login')}
          className="px-6 py-2 rounded-xl transition-colors text-white hover:text-[#4d7a7f] hover:border-[#4d7a7f]"
          style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
        >
          Login
        </button>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-2 rounded-xl transition-colors text-white hover:text-[#4d7a7f] hover:border-[#4d7a7f]"
          style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
        >
          Dashboard
        </button>
      </div>

      {/* Thin horizontal line below header */}
      <div
        className="absolute top-20 left-0 w-full z-10"
        style={{ borderTop: '0.5px solid rgba(255, 255, 255, 0.41)' }}
      />
    </main>
  )
}










