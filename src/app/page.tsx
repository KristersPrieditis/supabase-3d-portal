'use client'

import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ArticleCard from '../components/ArticleCard'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="bg-gray-100 text-gray-900 min-h-screen p-4">
      <Header />
      <Navbar />

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <div className="md:col-span-3 space-y-6">
          <ArticleCard
            title="TITLE HEADING"
            description="Title description"
            date="Dec 7, 2017"
          />
          <ArticleCard
            title="TITLE HEADING"
            description="Title description"
            date="Sep 2, 2017"
          />
        </div>

        <Sidebar />
      </section>

      <Footer />

      <div className="flex gap-4 justify-center mt-8">
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
