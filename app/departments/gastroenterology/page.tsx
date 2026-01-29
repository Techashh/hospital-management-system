
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
export default function anestheticsPage() {
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

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* LEFT SIDEBAR */}
        <div className="bg-sky-700 text-white rounded-md p-6 h-fit">
          <ul className="space-y-4 text-sm">
            <li className="border-b border-white/20 pb-3">
              <Link href="/departments/anesthetics" className="hover:underline">
                – Anesthetics
              </Link>
            </li>
            <li className="border-b border-white/20 pb-3">
              <Link href="/departments/cardiology" className="hover:underline">
                – Cardiology
              </Link>
            </li>
            <li>
              <Link href="/departments/gastroenterology" className="hover:underline">
                – Gastroenterology
              </Link>
            </li>
          </ul>

          {/* BOOK BUTTON */}
          <Link
            href="/appointment"
            className="mt-10 flex items-center justify-center gap-2 bg-white text-sky-700 font-semibold py-3 rounded-md text-sm hover:bg-gray-100 transition"
          >
            📅 BOOK APPOINTMENT
          </Link>

          {/* EMERGENCY */}
          <div className="mt-10 text-center">
            <p className="text-sm mb-2">For Emergency Contact</p>
            <p className="text-2xl font-bold">1-800-400-7400</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3 space-y-10">
          <p className="text-gray-600 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Anesthetics Department Facilities
            </h2>
            <div className="w-14 h-[2px] bg-sky-600 mb-6" />
            <p className="text-sky-600 font-medium mb-6">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

      </div>    


 <section className="max-w-5xl mx-auto px-6 py-20">
      
      {/* TEXT LIST */}
      <div className="space-y-6 mb-20">
        {[1, 2, 3].map((item) => (
          <p
            key={item}
            className="text-gray-800 border-b border-sky-100 pb-4"
          >
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </p>
        ))}
      </div>

      {/* SECTION TITLE */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900">
          Awesome Doctors Of Anesthetics Department
        </h2>
        <div className="w-12 h-[2px] bg-sky-600 mt-3" />
      </div>

      {/* DOCTOR CARD */}
      <div className="max-w-md bg-gray-50 border rounded-md overflow-hidden">
        <div className="flex items-center gap-6 p-6">
          
          {/* AVATAR */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-yellow-400">
            <Image
              src="/doctor-avatar.png" // replace with your image
              alt="Doctor"
              fill
              className="object-cover"
            />
          </div>

          {/* NAME */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Erich Mcbride
            </h3>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200" />

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 px-6 py-4 text-gray-600 text-sm">
          <span className="cursor-pointer hover:text-sky-600">f</span>
          <span className="cursor-pointer hover:text-sky-600">t</span>
          <span className="cursor-pointer hover:text-sky-600">g+</span>
          <span className="cursor-pointer hover:text-sky-600">in</span>
        </div>
      </div>

    </section>
    
           <section className="bg-white py-20 text-center">
            <Link href={"/appointment"} className="bg-[#0286b8] text-white px-10 py-4 uppercase tracking-wide font-semibold hover:bg-[#026f99] transition">
          
                Make An Appointment  
            </Link>
       
          </section>

    
    
    <Footer/>
    </main>
  )
}

