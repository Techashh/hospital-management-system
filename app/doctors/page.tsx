
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import DepartmentFilter from "@/components/DepartmentFilter";
import DoctorCard from "@/components/DoctorCard";
export default function DoctorsPage() {
    const doctors = [
    "Dr Francisca Wiza",
    "Dr Erich Mcbride",
    "Dr Sophia Johnson",
    "Dr John Doe",
    "Dr Jane Smith",
  ];
  return (

    <main >
      <Header />
     <section
      className="relative h-[300px] md:h-[380px] w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/img5.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
        DOCTORS
        </h1>

        {/* Breadcrumb */}
        <p className="text-white text-sm">
          <Link
            href="/"
            className="opacity-80 hover:opacity-100 hover:underline transition"
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Doctors</span>
        </p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* Left Sidebar */}
        <DepartmentFilter />

        {/* Doctors Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {doctors.map((doc, index) => (
            <DoctorCard key={index} name={doc} />
          ))}
        </div>
      </div>
    </section>

<div className="w-full bg-blue-500 px-6 py-8 md:px-20 md:py-12">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
    <p className="text-white text-lg md:text-xl font-semibold text-center md:text-left">
      Get In Touch With Our Specialists
    </p>

    <Link
      href="/appointment"
      className="bg-white text-blue-600 px-8 py-3 md:px-10 md:py-4 uppercase tracking-wide font-semibold hover:bg-[#026f99] hover:text-white transition rounded"
    >
      Book Appointment
    </Link>
  </div>
</div>

    
    <Footer/>
    </main>
  )
}

