
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
          ABOUT BAYANNO DIAGNOSTIC CENTER
        </h2>

        {/* First Paragraph */}
        <p className="text-slate-500 leading-relaxed mb-12">
          Viam sumi mo id erit objectioni mo de necessario crediderim imo
          terra vox alios aut lor quasi. Vim quaero aut videri pendam plures
          duo extat neque arcte re ad etiam ego infiniti reperero mutuatur
          formalem. Viam sumi mo id erit objectioni mo de necessario crediderim
          imo terra vox alios aut lor quasi. Vim quaero aut videri pendam plures
          duo extat neque arcte re ad etiam ego infiniti reperero mutuatur
          formalem.
        </p>

        {/* Second Paragraph */}
        <p className="text-slate-500 leading-relaxed">
          Viam sumi mo id erit objectioni mo de necessario crediderim imo
          terra vox alios aut lor quasi. Vim quaero aut videri pendam plures
          duo extat neque arcte re ad etiam ego infiniti reperero mutuatur
          formalem. Viam sumi mo id erit objectioni mo de necessario crediderim
          imo terra vox alios aut lor quasi. Vim quaero aut videri pendam plures
          duo extat neque arcte re ad etiam ego infiniti reperero mutuatur
          formalem.
        </p>
      </div>
    </section>

    {/* Top Blue Header */}
      <div className="relative bg-[#0286b8] text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Our World Class Services
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

