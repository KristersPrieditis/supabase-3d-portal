'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] font-openSans p-10">
      {/* Logo in top-center Kristers was here */}
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

<main className="flex flex-col items-center pt-10">

        <div className="max-w-2xl text-white text-center px-10">
          <h1 className="text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg leading-relaxed mb-6">
            We’re a group of five passionate students from Hyper Island, currently diving into the XR Creative Development program. We’re excited to connect and collaborate, let’s create something amazing together!
          </p>
        </div>

        {/* Team Members in Card Layout */}
<div className="flex justify-start gap-10 mt-10 px-6 overflow-x-auto w-full pb-6">

{/* Team Member 1 */}
<div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 w-64 text-white text-center">
  <Image
    src="/Kristers.jpg"
    alt="Kristers"
    width={250}
    height={250}
    className="rounded-xl object-cover mx-auto mb-4"
  />
  <p className="text-lg font-bold">Kristers Prieditis</p>
  <p className="text-sm opacity-80">Programmer</p>
  <p className="text-sm opacity-60 mt-2">Tel: +46 73 499 13 03</p>
</div>

{/* Team Member 2 */}
<div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 w-64 text-white text-center">
  <Image
    src="/Anika.png"
    alt="Anika"
    width={250}
    height={250}
    className="rounded-xl object-cover mx-auto mb-4"
  />
  <p className="text-lg font-bold">Anika Helder</p>
  <p className="text-sm opacity-80">Project Lead / Programmer</p>
  <p className="text-sm opacity-60 mt-2">Tel: +46 76 116 06 91</p>
</div>

{/* Team Member 3 */}
<div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 w-60 text-white text-center">
  <Image
    src="/Sabrina.3.jpg"
    alt="Sabrina"
    width={200}
    height={250}
    className="rounded-xl object-cover mx-auto mb-4"
  />
  <p className="text-lg font-bold">Sabrina Habtegergish</p>
  <p className="text-sm opacity-80">Ux / Front end</p>
  <p className="text-sm opacity-60 mt-2">Tel: +46 70 44 10 613</p>
</div>

{/* Team Member 4 */}
<div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 w-64 text-white text-center">
  <Image
    src="/Daria.2.jpg"
    alt="Daria"
    width={250}
    height={250}
    className="rounded-xl object-cover mx-auto mb-4"
  />
  <p className="text-lg font-bold">Daria Mateeva</p>
  <p className="text-sm opacity-80">Technical artist</p>
  <p className="text-sm opacity-60 mt-2">Tel: +46 76 760 74 70</p>
</div>

{/* ✅ Team Member 5 (Now inside the row) */}
<div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 w-64 text-white text-center">
  <Image
    src="/Linnea.jpeg"
    alt="Linnea"
    width={250}
    height={250}
    className="rounded-xl object-cover mx-auto mb-4"
  />
  <p className="text-lg font-bold">Linnea Nordkvist</p>
  <p className="text-sm opacity-80">3D artist</p>
  <p className="text-sm opacity-60 mt-2">Tel: +46 70 062 77 15</p>
</div>

</div>


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

