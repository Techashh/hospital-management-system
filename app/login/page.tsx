import Link from 'next/link'
import Image from 'next/image'

 export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      
      {/* LEFT SIDE */}
      <div className="flex items-center justify-center bg-gradient-to-b from-[#0a122a] to-[#020617] text-white px-6">
        <div className="w-full max-w-md space-y-6">

          {/* Logo */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <img
            src="/logo.png"
            alt="Ash Diagnostics Center"
            className="w-9 h-9"
          />
            </div>
            <h1 className="text-2xl font-semibold text-center">
              Bayanno Hospital<br />Management System
            </h1>
          </div>

          {/* Form */}
          <form className="space-y-4 mt-8">
            <input
              type="email"
              placeholder="email"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="password"
              placeholder="password"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

             <Link  href=""
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 transition text-white py-3 rounded-md font-medium"
            >
              Login 🔒
            </Link>
          </form>

          {/* Forgot Password */}
          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-300 hover:text-cyan-400"
            >
              Forgot Your Password ?
            </Link>
          </div>

          {/* Role Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              "Admin",
              "Doctor",
              "Patient",
              "Nurse",
              "Receptionist",
              "Laboratorist",
              "Pharmacist",
              "Accountant",
            ].map((role) => (
                <Link   href=""
                key={role}
                className="px-4 py-2 text-sm bg-white text-gray-900 rounded-md hover:bg-gray-200 transition" >
                {role}
              </Link>
            ))}
          </div>
        </div>
      </div>

     

      {/* Right */}
         <div className="hidden md:block relative w-full h-full">
      <Image
        src="/img6.jpg"
        alt="Doctor"
        fill
        className="object-cover"
        priority
      />
    </div>

    </div>
  )
}