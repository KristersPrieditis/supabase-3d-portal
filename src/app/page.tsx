'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react' ;


export default function HomePage() {
  const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 bg-black text-white p-6">
      <div className="w-full max-w-6xl">
        <div className="blog-header">
          <h1>ArtSpace</h1>
          <p>Resize the browser window to see the effect.</p>
        </div>

        <div className="topnav bg-gray-800 overflow-hidden">
          <a className="inline-block text-white px-4 py-3" href="#">Link</a>
          <a className="inline-block text-white px-4 py-3" href="#">Link</a>
          <a className="inline-block text-white px-4 py-3" href="#">Link</a>
          <a className="inline-block text-white px-4 py-3 float-right" href="#">Link</a>
        </div>

        <div className="row flex flex-wrap mt-4">
          <div className="leftcolumn w-full md:w-3/4 p-2">
            <div className="card bg-white text-black p-4 mb-4">
              <h2 className="text-xl font-bold">TITLE HEADING</h2>
              <h5 className="text-sm text-gray-600">Title description, Dec 7, 2017</h5>
              <div className="fakeimg bg-gray-400 h-48 my-2 flex items-center justify-center">Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
            </div>

            <div className="card bg-white text-black p-4 mb-4">
              <h2 className="text-xl font-bold">TITLE HEADING</h2>
              <h5 className="text-sm text-gray-600">Title description, Sep 2, 2017</h5>
              <div className="fakeimg bg-gray-400 h-48 my-2 flex items-center justify-center">Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
            </div>
          </div>

          <div className="rightcolumn w-full md:w-1/4 p-2">
            <div className="card bg-white text-black p-4 mb-4">
              <h2 className="text-lg font-bold">About Me</h2>
              <div className="fakeimg bg-gray-400 h-24 my-2 flex items-center justify-center">Image</div>
              <p>Some text about me...</p>
            </div>

            <div className="card bg-white text-black p-4 mb-4">
              <h3 className="text-lg font-semibold">Popular Post</h3>
              <div className="fakeimg bg-gray-400 p-2 my-2">Image</div>
              <div className="fakeimg bg-gray-400 p-2 my-2">Image</div>
              <div className="fakeimg bg-gray-400 p-2 my-2">Image</div>
            </div>

            <div className="card bg-white text-black p-4 mb-4">
              <h3 className="text-lg font-semibold">Follow Me</h3>
              <p>Some text..</p>
            </div>
          </div>
        </div>

        <div className="footer bg-gray-300 text-black text-center p-4 mt-4">
          <h2>Footer</h2>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
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
