
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
export default function AboutPage() {
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
          ABOUT US
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
          <span className="font-medium">About Us</span>
        </p>
      </div>
    </section>

    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide mb-6">
          ABOUT ASH DIAGNOSTIC CENTER
        </h2>

        {/* First Paragraph */}
        <p className="text-slate-500 leading-relaxed mb-12">
            Ash Diagnostic Center is a trusted healthcare facility dedicated to delivering
  accurate, reliable, and timely diagnostic services. Our team of experienced
  professionals uses modern medical technology to provide precise results, ensuring
  patients receive the highest standard of care. We prioritize comfort, safety, and
  clear communication, making every visit a seamless experience while empowering
  patients with the information they need to make informed health decisions.
        </p>

        {/* Second Paragraph */}
        <p className="text-slate-500 leading-relaxed">
         At Ash Diagnostic Center, we are committed to supporting both individuals and
  healthcare providers with comprehensive diagnostic solutions. From routine screenings
  to specialized tests, our facility combines expertise, state-of-the-art equipment,
  and compassionate care to deliver dependable results. By focusing on quality, integrity,
  and patient-centered service, we strive to build lasting trust and contribute to
  better health outcomes for everyone we serve.
        </p>
      </div>
    </section>

    {/* Top Blue Header */}
      <div className="relative bg-[#0286b8] text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Our World Class Services
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/90">
         We provide advanced diagnostic and healthcare services with precision,
compassion, and modern technology for accurate results and quality care.
        </p>

        {/* Down Arrow */}
        <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-t-[30px] border-l-transparent border-r-transparent border-t-[#0286b8]" />
        </div>
      </div>


       {/* Services Content */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

      {/* Service Item */}
          <div className="flex gap-6">
            <div className="text-[#0286b8] text-4xl">🩺</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                High quality service
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide reliable diagnostic services with a strong focus on accuracy,
      professionalism, and patient-centered care.

              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-[#0286b8] text-4xl">🏥</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Modern hospital and technology
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                 Our facility uses modern medical technology to deliver precise results
      efficiently and safely.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-[#0286b8] text-4xl">🚑</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Ready for intervention
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
            We are prepared to support urgent diagnostic needs with timely and
      dependable service.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-[#0286b8] text-4xl">👨‍⚕️</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Specialist consulting for health problems
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our specialists offer professional guidance to support accurate diagnosis
      and informed healthcare decisions.
              </p>
            </div>
          </div>

        </div>
      </div>

           <section className="bg-white py-20 text-center">
            <Link href={"/appointment"} className="bg-[#0286b8] text-white px-10 py-4 uppercase tracking-wide font-semibold hover:bg-[#026f99] transition">
          
                Make An Appointment  
            </Link>
       
          </section>

    
    
    <Footer/>
    </main>
  )
}

