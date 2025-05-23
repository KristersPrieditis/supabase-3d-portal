'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6">
      {/* Logo in top-left corner */}
      <div className="absolute top-6 left-6">
        <Image
          src="/logo.png"
          alt="3D Portal Logo"
          width={80}
          height={80}
        />
      </div>

      {/* Centered content */}
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <h1 className="text-3xl font-bold">ArtSpace</h1>

        <div className="flex gap-4">
          <button
            onClick={() => router.push('/login')}
            className="px-6 py-2 bg-[#5a8d92] text-white rounded shadow hover:bg-[#4d7a7f]"
          >
            Login
          </button>
          <button
            onClick={() => router.push('/dashboard')}
            className="px-6 py-2 bg-[#5a8d92] text-white rounded shadow hover:bg-[#4d7a7f]"
          >
            Dashboard
          </button>
        </div>
      </div>
    </main>
  )
}


