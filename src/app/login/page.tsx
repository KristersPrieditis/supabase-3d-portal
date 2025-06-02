'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/supabaseClient'
import Image from 'next/image'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async () => {
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  const handleRegister = async () => {
    setError(null)
    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-black p-6 relative">
      
     {/* Logo in top-left corner, button brings you to home page */}
          <button
            onClick={() => router.push('/')}
            className="absolute top-7 left-6 z-10 cursor-pointer"
            aria-label="Go to homepage"
          >
            <Image
              src="/Logo White.png"
              alt="3D Portal Logo"
              width={150}
              height={150}
              priority
            />
          </button>


       {/* Thin horizontal line below header */}
       <div className="absolute top-20 left-0 w-full border-t border-white opacity-40 z-10" />

      {/* Top-right corner buttons */}
      <div className="absolute top-6 right-6 flex gap-4 z-10">
        <button
          onClick={() => router.push('/login')}
          className="px-6 py-2 rounded-xl transition-colors text-white bg-black hover:text-[#4d7a7f] hover:border-[#4d7a7f]"
          style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
        >
          Login
        </button>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-2 rounded-xl transition-colors text-white bg-black hover:text-[#4d7a7f] hover:border-[#4d7a7f]"
          style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
        >
          Dashboard
        </button>
      </div>

      {/* Login Card */}
      <div className="bg-[#2c2c2e] rounded-2xl shadow-lg p-10 w-full max-w-md text-white z-10">
        <h2 className="text-4xl font-bold mb-2 text-center">Login</h2>
        <p className="text-sm text-center mb-6">
          Hey, Enter your details to sign in to your account
        </p>

        <input
  type="email"
  placeholder="Email"
  className="w-full mb-4 px-4 py-2 bg-[#2c2c2e] text-white border border-[#3a3a3c] rounded focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>


        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 bg-[#2c2c2e] text-white border border-[#3a3a3c] rounded focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className=" w-full px-6 py-2 rounded-xl transition-colors text-white hover:text-[#4d7a7f] hover:border-[#4d7a7f]"
          style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
        >
          Sign In
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{' '}
          <span
            className="font-semibold text-black cursor-pointer"
            onClick={handleRegister}
          >
            Request Now
          </span>
        </p>
      </div>
    </main>
  )
}
