import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AppointmentPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[300px] md:h-[380px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img5.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
            APPOINTMENT
          </h1>

          <p className="text-white text-sm">
            <Link href="/" className="opacity-80 hover:underline transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Appointment</span>
          </p>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl mb-4 font-semibold flex items-center justify-center ">
            Make An Appointment
          </h2>

          <hr className="border-gray-300 my-6" />
          
          <div className="flex items-center justify-center h-screen ">
            
          <form  className="space-y-3  w-full max-w-[800px] mx-auto my-12" >
            {/* Patient Type */}
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="patientType" value="New Patient" />
                New Patient
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="patientType" value="Old Patient" />
                Old Patient
              </label>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">NAME</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">EMAIL</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">PHONE</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">DATE</label>
              <input
                type="date"
                name="date"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                DEPARTMENT
              </label>
              <select
                name="department"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select A Department</option>
                <option value="Anesthetics">Anesthetics</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Gastroenterology">Gastroenterology</option>
                <option value="Psychological">Psychological</option>
              </select>
            </div>

         <label className="block text-sm text-gray-600 mb-1"> 
              MESSAGE </label>

       <textarea name="message" rows={5}  placeholder="Type your message..."
       className="w-full border rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
       defaultValue="Your Message To The Doctor."/>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              BOOK NOW
            </button>
          </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
