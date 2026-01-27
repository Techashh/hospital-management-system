import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image' 

export default function Homepage() {
  return (
    <>
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[65vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <img
          src="/img1.jpg"
          alt="Medical Team"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Text */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-xl">
        <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold leading-tight mb-4">
  Where Compassion and <span className="hidden md:inline"><br /></span>
  Healing Come Together
</h1>


            <p className="text-lg text-gray-200">
              Dedicated to providing multidisciplinary medical care and backed
              by state-of-the-art facilities.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BUTTON ACTION BAR ================= */}
      <section className="relative z-20 -mt-24">
        <div className="flex justify-center">
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 text-white shadow-lg">
            
            {/* Emergency */}
            <div className="bg-[#4bb3d3] px-10 py-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">📞</span>
                <h3 className="text-xl font-semibold tracking-wide">
                  EMERGENCY CONTACT
                </h3>
              </div>
            <p className="text-xl md:text-3xl font-bold tracking-wider">

                1-800-400-7400
              </p>
            </div>

            {/* Appointment */}
            <div className="bg-[#2ea0c9] px-10 py-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">📅</span>
                <h3 className="text-xl font-semibold tracking-wide">
                  DOCTOR APPOINTMENT
                </h3>
              </div>

              <button className="mt-4 bg-white text-[#2ea0c9] px-6 py-3 font-semibold rounded hover:bg-gray-100 transition">
                BOOK AN APPOINTMENT
              </button>
            </div>

            {/* Opening Hours */}
            <div className="bg-[#0286b8] px-10 py-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">⏰</span>
                <h3 className="text-xl font-semibold tracking-wide">
                  OPENING HOURS
                </h3>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-white/30 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">10.00 - 21.00</span>
                </li>
                <li className="flex justify-between border-b border-white/30 pb-2">
                  <span>Saturday</span>
                  <span className="font-semibold">10.00 - 18.00</span>
                </li>   
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">11.00 - 17.00</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
      <section className="bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/img5.png"
              alt="Medical Team"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
              Welcome To Ash Diagnostic Center
            </h2>

            <p className="text-gray-600 leading-relaxed text-base">
                At Ash Diagnostic Center, we are committed to delivering accurate,
              reliable, and timely diagnostic services using advanced medical technology.
              Our experienced professionals work with care and precision to support early
              detection, effective treatment, and better health outcomes for every patient.
            </p>
          </div>
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

      <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-2xl font-medium text-gray-800 mb-16">
          Departments
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-sm p-10 flex flex-col items-center justify-center text-center">
            <Image
              src="/anesthetics.png"
              alt="Anesthetics"
              width={60}
              height={60}
            />
            <p className="mt-4 text-gray-600 text-lg">Anesthetics</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-sm p-10 flex flex-col items-center justify-center text-center">
            <Image
              src="/cardiology.png"
              alt="Cardiology"
              width={60}
              height={60}
            />
            <p className="mt-4 text-gray-600 text-lg">Cardiology</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-sm p-10 flex flex-col items-center justify-center text-center">
             <Image
              src="/gastroenterology.png"
              alt="Gastroenterology"
              width={60}
              height={60}
            />
            <p className="text-gray-600 text-lg">Gastroenterology</p>
          </div>

        </div>
      </div>
    </section>
  
    
     <section className="bg-white py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
        Get In Touch With Our Professionals
      </h2>
    
      <Link href={"/appointment"} className="bg-[#0286b8] text-white px-10 py-4 uppercase tracking-wide font-semibold hover:bg-[#026f99] transition">
    
          Make An Appointment  
      </Link>

    
 
    </section>

      <Footer />
    </>
  )
}
 