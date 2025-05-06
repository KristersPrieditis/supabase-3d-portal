'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/supabaseClient'
import { useRouter } from 'next/navigation'

// 🔐 Redirects to login if not logged in
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
  const [assets, setAssets] = useState<any[]>([])

  // 📥 Fetch user's uploaded assets
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

  // 📤 Upload handler
  const handleUpload = async () => {
    setError(null)

    if (!file || !name) {
      setError('Please select a file and name.')
      return
    }

    const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
    const user = sessionData?.session?.user
    
    if (sessionError || !user) {
      setError('You must be logged in.')
      return
    }
    
    console.log("User ID at upload:", user.id)
    

    console.log("User ID at upload:", user.id)

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
        tags: tags.split(',').map((t) => t.trim())
      })

      if (dbError) {
        console.error("Insert DB error:", dbError)
        setError('Failed to save metadata: ' + dbError.message)
      } else {
        setFile(null)
        setName('')
        setTags('')
        alert('Upload successful!')
        location.reload() // refresh to show uploaded asset
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
    <main className="flex flex-col items-center justify-start min-h-screen gap-4 p-6">
      <h1 className="text-2xl font-bold">Upload 3D Model</h1>

      <button onClick={handleLogout} className="self-end p-2 mb-4 bg-gray-600 text-white rounded">
        Log Out
      </button>

      <input
        type="text"
        placeholder="Asset name"
        className="p-2 border rounded w-64"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        className="p-2 border rounded w-64"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <input
        type="file"
        accept=".glb,.fbx,.obj"
        className="p-2 w-64"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      {error && <p className="text-red-600">{error}</p>}

      <button
        onClick={handleUpload}
        className="p-2 bg-blue-600 text-white rounded"
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
    </main>
  )
}
