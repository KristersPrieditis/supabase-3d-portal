'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/supabaseClient'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

type Asset = {
  id: string
  name: string
  url: string
  tags: string[]
  user_id: string
  created_at?: string
}

const useRedirectIfNotLoggedIn = () => {
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
      } else {
        setChecking(false)
      }
    }
    checkAuth()
  }, [router])

  return checking
}

export default function DashboardPage() {
  const router = useRouter()
  const checking = useRedirectIfNotLoggedIn()

  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState('')
  const [tags, setTags] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [assets, setAssets] = useState<Asset[]>([])
  const [length, setLength] = useState('')
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')

  useEffect(() => {
    const fetchAssets = async () => {
      const { data: sessionData } = await supabase.auth.getSession()
      const user = sessionData?.session?.user
      if (!user) return

      const { data, error } = await supabase
        .from('assets')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (!error) setAssets(data || [])
    }

    if (!checking) fetchAssets()
  }, [checking])

  const handleUpload = async () => {
    setError(null)

    if (!file || !name) {
      setError('Please select a file and name.')
      return
    }

    if (!length || !height || !width) {
      setError('Please provide all size dimensions.')
      return
    }

    if (!file.name.endsWith('.glb') && !file.name.endsWith('.gltf')) {
      setError('Only .glb and .gltf files are supported.')
      return
    }

    const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
    const user = sessionData?.session?.user

    if (sessionError || !user) {
      setError('You must be logged in.')
      return
    }

    const cleanFileName = file.name.replace(/\s+/g, '_').replace(/[^\w.-]/g, '')
    const filePath = `${user.id}/${Date.now()}-${cleanFileName}`

    const { error: uploadError } = await supabase.storage
      .from('3d-assets')
      .upload(filePath, file)

    if (uploadError) {
      setError('Upload failed: ' + uploadError.message)
      return
    }

    try {
      const { error: dbError } = await supabase.from('assets').insert({
        user_id: user.id,
        name,
        url: filePath,
        tags: tags.split(',').map((t) => t.trim()),
        size: {
          length: Number(length),
          height: Number(height),
          width: Number(width)
        }
      })

      if (dbError) {
        console.error("Insert DB error:", dbError)
        setError('Failed to save metadata: ' + dbError.message)
      } else {
        setFile(null)
        setName('')
        setTags('')
        setLength('')
        setHeight('')
        setWidth('')
        alert('Upload successful!')
        location.reload()
      }
    } catch (err) {
      console.error("Insert failed with exception:", err)
      setError('Unexpected error while saving to database.')
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (checking) return <p className="p-6">Checking authentication...</p>

  return (
    <div className="relative min-h-screen bg-black text-white font-openSans p-10">
      <button
        onClick={() => router.push('/')}
        className="absolute top-7 left-1/2 transform -translate-x-1/2 z-10"
        aria-label="Go to homepage"
      >
        <Image
          src="/Logo White.png"
          alt="3D Portal Logo"
          width={220}
          height={220}
          priority
        />
      </button>

      <div className="absolute top-7 left-6 z-10 flex gap-6 text-white text-base">
        <button onClick={() => router.push('/')} className="hover:underline">HOME</button>
        <button onClick={() => router.push('/about')} className="hover:underline">ABOUT US</button>
        <button onClick={() => router.push('/contact')} className="hover:underline">CONTACT</button>
      </div>

      <div className="absolute top-20 left-0 w-full z-10" style={{ borderTop: '0.5px solid rgba(255, 255, 255, 0.41)' }} />

      <main className="flex flex-col items-center justify-start gap-4 pt-6">
        <h1 className="text-2xl font-bold mt-8 font-openSans">Upload 3D Model</h1>

        <div className="absolute top-5 right-6 flex gap-4 z-10">
          <button
            onClick={handleLogout}
            className="px-12 py-2 rounded-xl transition-colors text-white hover:text-[#4d7a7f] hover:border-[#4d7a7f]"
            style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
          >
            Log Out
          </button>
        </div>

        {/* Group 1 */}
        <div className="bg-black p-6 rounded-xl shadow-md border border-white/40 max-w-4xl w-full flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Asset name"
            className="w-full p-2 rounded text-white bg-[#1a1a1a] placeholder-gray-400"
            style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            className="w-full p-2 rounded text-white bg-[#1a1a1a] placeholder-gray-400"
            style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <input
            type="file"
            accept=".glb,.gltf"
            className="w-full p-2 rounded text-white file:text-white file:bg-[#1a1a1a] file:border file:border-white/40 file:rounded file:px-4 file:py-2 file:cursor-pointer bg-[#1a1a1a] placeholder-gray-400"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </div>

        {/* Group 2 */}
        <div className="bg-black p-6 rounded-xl shadow-md border border-white/40 max-w-4xl w-full flex flex-col gap-4 mt-4">
          <label className="font-semibold text-white">Size (in cm)</label>
          <input
            type="number"
            placeholder="Length"
            className="w-full p-2 rounded text-white bg-[#1a1a1a] placeholder-gray-400"
            style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <input
            type="number"
            placeholder="Height"
            className="w-full p-2 rounded text-white bg-[#1a1a1a] placeholder-gray-400"
            style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Width"
            className="w-full p-2 rounded text-white bg-[#1a1a1a] placeholder-gray-400"
            style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>

        <p className="text-sm text-gray-400 mt-2">
          Only <code>.glb</code> and <code>.gltf</code> files are supported
        </p>

        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={handleUpload}
          className="px-4 py-2 rounded text-white bg-[#1a1a1a] placeholder-gray-400 mt-2"
          style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
        >
          Upload
        </button>

        <hr className="my-6 w-full max-w-lg border-t" />

        <h2 className="text-xl font-semibold">Your Uploaded Assets</h2>
        <ul className="w-full max-w-lg space-y-2">
          {assets.map((asset) => (
            <li key={asset.id} className="border p-3 rounded shadow-sm">
              <p><strong>Name:</strong> {asset.name}</p>
              <p><strong>Tags:</strong> {asset.tags?.join(', ') || 'None'}</p>
              <p><strong>URL:</strong> {asset.url}</p>
            </li>
          ))}
        </ul>

      {/* Footer */}
<footer className="absolute bottom-4 w-full text-center z-10">
  <p className="text-sm text-white/60 font-openSans">
    © 2025 ArtSpace. All rights reserved.
  </p>
</footer>
      </main>
    </div>
  )
}


