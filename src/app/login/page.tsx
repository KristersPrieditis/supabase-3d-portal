'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/supabaseClient'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async () => {
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  const handleRegister = async () => {
    setError(null)
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen gap-4 p-6"
      style={{ backgroundColor: '#4B5320' }}
    >
      <h1 className="text-2xl font-bold text-white">Login or Register</h1>

      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="p-2 border rounded w-64"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-200">{error}</p>}

      <button onClick={handleLogin} className="p-2 bg-blue-600 text-white rounded w-64">
        Log In
      </button>

      <button onClick={handleRegister} className="p-2 bg-green-600 text-white rounded w-64">
        Register
      </button>
    </main>
  )
}
