

export default function DoctorCard({ name }) {
  return (
    <div className="group text-center">
      {/* Image */}
      <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto">
        <img
          src="/doc_icon.jpg"
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-blue-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <button className="bg-white text-blue-600 px-6 py-2 text-sm font-medium rounded">
            PROFILE
          </button>
        </div>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-medium text-gray-800">
        {name}
      </h3>

      <div className="w-12 h-[1px] bg-gray-300 mx-auto my-3" />

      {/* Social Icons */}
      {/* <div className="flex justify-center gap-4 text-gray-500 text-sm">
        <fa.FaFacebookF className="hover:text-blue-600 cursor-pointer" />
        <fa.FaTwitter className="hover:text-blue-600 cursor-pointer" />
        <fa.FaGooglePlusG className="hover:text-blue-600 cursor-pointer" />
        <fa.FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
      </div> */}


    </div>

    
  );
}
