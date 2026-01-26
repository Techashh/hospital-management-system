
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
          CONTACT US
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
          <span className="font-medium">Contact Us</span>
        </p>
      </div>
    </section>

    
    <section className="w-full bg-white py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">
    
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
      Contact Us For Help
    </h2>

    {/* Sub text */}
    <p className="mt-4 text-gray-600">
      Please Call Us Or Complete The Form Below And We Will Get To You Shortly
    </p>

    {/* Call button */}
    <div className="mt-8">
      <a
        href="tel:18004007400"
        className="inline-flex items-center gap-3 bg-sky-700 hover:bg-sky-800 text-white font-semibold px-10 py-4 rounded transition"
      >
        📱+234 9036577265
      </a>
    </div>

  </div>
</section>
 <hr></hr>

 <section className="w-full bg-white py-16">
  <div className="max-w-4xl mx-auto px-6">
    
    <form >
      
      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
          Your Name
        </label>
        <input
          type="text"
          placeholder=""
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
          Your Email
        </label>
        <input
          type="email"
          placeholder=""
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
          Phone
        </label>
        <input
          type="tel"
          placeholder=""
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
          Address
        </label>
        <input
          type="text"
          placeholder=""
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
       </div>
   <label className="block text-xs text-gray-600 mb-1 mt-6"> 
              MESSAGE </label>

       <textarea name="message" rows={5}  placeholder="Type your message..."
       className="w-full border rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"/>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 mt-8 rounded hover:bg-blue-700 transition"
            >
              BOOK NOW
            </button>
    </form>
  </div>
</section>


    <Footer/>
    </main>
  )
}

