import Link from "next/link";

export default function DoctorCard({ name }) {
  return (
    <div className="group text-center px-2">
      <Link href="/doctorprofile" className="block relative">
        {/* Image */}
        <div className="relative overflow-hidden rounded-full 
                        w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
                        mx-auto">
          <img
            src="/doc_icon.jpg"
            alt={name}
            className="w-full h-full object-cover"
          />

          {/* Hover / Tap Overlay */}
          <div
            className="absolute inset-0 bg-blue-600/80 
                       flex items-center justify-center
                       opacity-0 group-hover:opacity-100 
                       group-focus:opacity-100
                       transition-opacity duration-300"
          >
            <span className="bg-white text-blue-600 px-5 py-2 text-xs sm:text-sm font-semibold rounded">
              PROFILE
            </span>
          </div>
        </div>

        {/* Name */}
        <h3 className="mt-3 text-base sm:text-lg font-medium text-gray-800">
          {name}
        </h3>
      </Link>

      {/* Divider */}
      <div className="w-10 sm:w-12 h-px bg-gray-300 mx-auto my-3" />
    </div>
  );
}
