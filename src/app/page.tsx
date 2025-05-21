'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="bg-gray-100 text-gray-900 min-h-screen p-4">
      {/* Header */}
      <header className="bg-white text-center p-8 shadow">
        <h1 className="text-5xl font-bold">My Website</h1>
        <p className="mt-2 text-gray-600">Resize the browser window to see the effect.</p>
      </header>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-between bg-gray-800 text-white px-4 py-3 mt-4">
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">Link</a>
          <a href="#" className="hover:text-gray-300">Link</a>
          <a href="#" className="hover:text-gray-300">Link</a>
        </div>
        <a href="#" className="hover:text-gray-300">Right Link</a>
      </nav>

      {/* Main Content */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Left Column */}
        <div className="md:col-span-3 space-y-6">
          {/* Article Card 1 */}
          <article className="bg-white p-6 shadow rounded">
            <h2 className="text-2xl font-bold">TITLE HEADING</h2>
            <h5 className="text-sm text-gray-500 mt-1">Title description, Dec 7, 2017</h5>
            <div className="bg-gray-300 h-48 mt-4 mb-2 flex items-center justify-center">Image</div>
            <p>Some text..</p>
            <p className="mt-2 text-sm text-gray-700">
              Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit...
            </p>
          </article>

          {/* Article Card 2 */}
          <article className="bg-white p-6 shadow rounded">
            <h2 className="text-2xl font-bold">TITLE HEADING</h2>
            <h5 className="text-sm text-gray-500 mt-1">Title description, Sep 2, 2017</h5>
            <div className="bg-gray-300 h-48 mt-4 mb-2 flex items-center justify-center">Image</div>
            <p>Some text..</p>
            <p className="mt-2 text-sm text-gray-700">
              Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit...
            </p>
          </article>
        </div>

        {/* Right Column */}
        <aside className="space-y-6">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-bold">About Me</h2>
            <div className="bg-gray-300 h-24 mt-2 mb-2 flex items-center justify-center">Image</div>
            <p className="text-sm text-gray-700">Some text about me...</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">Popular Post</h3>
            <div className="bg-gray-300 p-2 my-2 text-center">Image</div>
            <div className="bg-gray-300 p-2 my-2 text-center">Image</div>
            <div className="bg-gray-300 p-2 my-2 text-center">Image</div>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">Follow Me</h3>
            <p className="text-sm text-gray-700">Some text..</p>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="bg-gray-300 text-center p-6 mt-6 rounded">
        <h2 className="text-lg font-bold">Footer</h2>
      </footer>

      {/* Buttons */}
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


