'use client'

import { useState } from 'react'
import { supabase } from '@/supabaseClient'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState('')
  const [tags, setTags] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleUpload = async () => {
    setError(null)

    if (!file || !name) {
      setError('Please select a file and name.')
      return
    }

    // Get current user
    const {
      data: { user },
      error: userError
    } = await supabase.auth.getUser()

    if (userError || !user) {
      setError('You must be logged in.')
      return
    }

    // Upload file to storage
    const filePath = `${user.id}/${Date.now()}-${file.name}`
    const { data, error: uploadError } = await supabase.storage
      .from('3d-assets')
      .upload(filePath, file)

    if (uploadError) {
      setError('Upload failed: ' + uploadError.message)
      return
    }

    // Save metadata to assets table
    const { error: dbError } = await supabase.from('assets').insert({
      user_id: user.id,
      name,
      url: filePath,
      tags: tags.split(',').map((t) => t.trim())
    })

    if (dbError) {
      setError('Failed to save metadata: ' + dbError.message)
    } else {
      setFile(null)
      setName('')
      setTags('')
      alert('Upload successful!')
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-6">
      <h1 className="text-2xl font-bold">Upload 3D Model</h1>

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
    </main>
  )
}
