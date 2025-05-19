'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react' ;

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);


  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 bg-black text-white p-6">
      <h1 className="text-3xl font-bold">ArtSpace</h1>

      <div className="flex gap-4">
        <button
          onClick={() => router.push('/login')}
          className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
        >
          Login
        </button>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
        >
          Dashboard
        </button>
      </div>
    </main>
  )
}