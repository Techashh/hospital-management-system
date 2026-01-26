
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

    
    
    <Footer/>
    </main>
  )
}

