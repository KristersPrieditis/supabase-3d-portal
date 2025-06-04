'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function ContactPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] font-openSans p-10">
      {/* Logo in top-center */}
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

      {/* Menu on the top-left corner */}
      <div className="absolute top-7 left-6 z-10 flex gap-6 text-white text-base">
        <button onClick={() => router.push('/')} className="hover:underline">HOME</button>
        <button onClick={() => router.push('/about')} className="hover:underline">ABOUT US</button>
        <button onClick={() => router.push('/contact')} className="hover:underline">CONTACT</button>
      </div>

      {/* Thin horizontal line below header */}
      <div
        className="absolute top-20 left-0 w-full z-10"
        style={{ borderTop: '0.5px solid rgba(255, 255, 255, 0.41)' }}
      />

      {/* Centered Main Content */}
      <main className="flex items-center justify-center min-h-screen pt-1 px-6">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us!</h1>
          <p className="text-lg mb-8 text-center">
            We'd love to hear from you! Whether you're an artist, educator, or enthusiast, feel free to reach out with questions, ideas, or collaboration opportunities!
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none"
            ></textarea>

            {/* Buttons Side by Side */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                className="px-6 py-2 border rounded-lg text-white hover:text-[#4d7a7f] hover:border-[#4d7a7f] transition-colors"
                style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
              >
                Send Message
              </button>

              <button
                onClick={() => router.push('/')}
                className="px-6 py-2 border rounded-lg text-white hover:text-[#4d7a7f] hover:border-[#4d7a7f] transition-colors"
                style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
              >
                Back to Home
              </button>

               {/* Buttons in top-right corner */}
      
      <div className="absolute top-5 right-6 flex gap-4 z-10">
        <button
          onClick={() => router.push('/login')}
          className="px-6 py-2 rounded-xl transition-colors text-white hover:text-[#4d7a7f] hover:border-[#4d7a7f]"
          style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
        >
          Login
        </button>
     
        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-2 rounded-xl transition-colors text-white hover:text-[#4d7a7f] hover:border-[#4d7a7f]"
          style={{ border: '1px solid rgba(255, 255, 255, 0.41)' }}
        >
         Dashboard
        </button>
      </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}




