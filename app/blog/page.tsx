
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

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
          BLOG
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
          <span className="font-medium">Blog</span>
        </p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* ===== CARD ONE ===== */}
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="relative w-full h-48">
              <Image
                src="/img2.jpg"
                alt="Why employer healthcare strategies must be local one"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <Link
                href="/blog/one"
                className=" font-semibold text-lg hover:underline"
              >
                Why employer healthcare strategies must be local one
              </Link>

              <p className="text-gray-600 text-sm mt-3">
                The best employers care not only about their employees’
                productivity, but their well-being. And if you’re heading up a
                large company that employs ...
              </p>
            </div>

            <div className="flex items-center justify-between px-6 py-4 border-t text-sm text-gray-500">
              <span className="flex items-center gap-2">
                📅 20 Oct, 2017
              </span>

              <Link
                href="/blog/one"
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* ===== CARD TWO ===== */}
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="relative w-full h-48">
              <Image
                src="/img3.jpg"
                alt="Why employer healthcare strategies must be local two"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <Link
                href="/blog/two"
                className=" font-semibold text-lg hover:underline"
              >
                Why employer healthcare strategies must be local two
              </Link>

              <p className="text-gray-600 text-sm mt-3">
                The best employers care not only about their employees’
                productivity, but their well-being. And if you’re heading up a
                large company that employs ...
              </p>
            </div>

            <div className="flex items-center justify-between px-6 py-4 border-t text-sm text-gray-500">
              <span className="flex items-center gap-2">
                📅 20 Oct, 2017
              </span>

              <Link
                href="/blog/two"
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* ===== CARD THREE ===== */}
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="relative w-full h-48">
              <Image
                src="/img4.jpg"
                alt="Why employer healthcare strategies must be local three"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <Link
                href="/blog/three"
                className=" font-semibold text-lg hover:underline"
              >
                Why employer healthcare strategies must be local three
              </Link>

              <p className="text-gray-600 text-sm mt-3">
                The best employers care not only about their employees’
                productivity, but their well-being. And if you’re heading up a
                large company that employs ...
              </p>
            </div>

            <div className="flex items-center justify-between px-6 py-4 border-t text-sm text-gray-500">
              <span className="flex items-center gap-2">
                📅 20 Oct, 2017
              </span>

              <Link
                href="/blog/three"
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>

        </div>
      </section>

    <Footer/>
    </main>
  )
}

