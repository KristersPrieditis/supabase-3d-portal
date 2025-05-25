'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6">
      {/* Logo in top-left corner */}
      <div className="absolute top-7 left-6">
        <Image
          src="/Logo White.png"
          alt="3D Portal Logo"
          width={150}
          height={150}
        />
      </div>

      <div className="absolute top-1/2 left-20 transform -translate-y-1/2">
  <h1 className="text-9xl font-bold leading-tight text-left">
    <span className="block">Art</span>
    <span className="block">Space</span>
  </h1>
</div>





{/* Buttons in top-right corner */}
<div className="absolute top-6 right-6 flex gap-4">
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
        className="absolute top-20 left-0 w-full"
        style={{ borderTop: '0.5px solid rgba(255, 255, 255, 0.41)' }}
      />

      {/* Add centered content below if needed */}
    </main>
  )
}









