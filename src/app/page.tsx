'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 bg-black text-white p-6">
      <h1 className="text-3xl font-bold">Welcome to 3D Portal</h1>

      <div className="flex gap-4">
        <button
          onClick={() => router.push('/login')}
          className="px-6 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700"
        >
          Login
        </button>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700"
        >
          Dashboard
        </button>
      </div>
    </main>
  )
}
