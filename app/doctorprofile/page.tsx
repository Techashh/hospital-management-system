import Link from "next/link";
import Image from "next/image";

export default function DoctorProfile() {
  return (
    <nav >
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6 flex flex-col md:flex-row gap-8">

        {/* LEFT: Profile Image + Name */}
        <div className="flex flex-col items-center md:w-1/3 text-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <img
              src="/doc_icon.jpg"
              alt="Doctor Profile"
              width={350}
              height={350}
              className="object-cover "
            />
          </div>

          <h2 className="mt-4 text-lg font-semibold text-blue-600 uppercase">
            Erich McBride
          </h2>
        </div>

        {/* RIGHT: Information */}
        <div className="md:w-2/3 space-y-4 px-6 py-6">

          <div className="flex gap-2">
            <span className="font-semibold text-gray-700">Phone:</span>
            <span className="text-gray-600">+612-92-1385682</span>
          </div>

          <div className="flex gap-2">
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="text-gray-600">xidim@gmail.com</span>
          </div>

          <div className="flex gap-2">
            <span className="font-semibold text-gray-700">Address:</span>
            <span className="text-gray-600">Eius sed incidunt ipsam omnis</span>
          </div>

          <div className="flex gap-2">
            <span className="font-semibold text-gray-700">Degrees:</span>
            <span className="text-gray-600">M.D. of Medicine</span>
          </div>

          <div className="flex gap-2">
            <span className="font-semibold text-gray-700">Specialization:</span>
            <span className="text-gray-600">Cardiology</span>
          </div>

          <div className="flex gap-2">
            <span className="font-semibold text-gray-700">Experience:</span>
            <span className="text-gray-600">12 Years</span>
          </div>

          <div className="flex gap-2">
            <span className="font-semibold text-gray-700">Working Days:</span>
            <span className="text-gray-600">Monday – Friday</span>
          </div>

          <div className="flex gap-2">
            <span className="font-semibold text-gray-700">Consultation Hours:</span>
            <span className="text-gray-600">9:00 AM – 5:00 PM</span>
          </div>

          <div className="flex gap-2">
            <span className="font-semibold text-gray-700">Board Certification:</span>
            <span className="text-gray-600">Nigerian Medical Council</span>
          </div>

        </div>
      </div>

      {/* PROFILE TEXT */}
      <div>
        <p className="text-base px-8 py-4 text-center text-gray-500">
          profile
        </p>

        <h1 className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-base">
          Dr. Erich McBride is a highly experienced Consultant Cardiologist with over
          12 years of clinical practice in the diagnosis, treatment, and prevention
          of cardiovascular diseases. He earned his Doctor of Medicine (M.D.) degree
          from a recognized medical institution and completed advanced training in
          heart and vascular care.
          <br /><br />
          Dr. McBride is known for his patient-centered approach, combining modern
          medical technology with compassionate care. He has successfully managed
          conditions such as hypertension, heart failure, coronary artery disease,
          and arrhythmias. He believes in educating patients about their health and
          empowering them to make informed lifestyle and treatment decisions.
          <br /><br />
          He is a certified member of the Nigerian Medical Association (NMA) and
          licensed by the Nigerian Medical Council. Currently, he practices at City
          Heart Clinic, where he provides both in-person and consultation-based care.
        </h1>
      </div>

      {/* CTA */}
      <section className="max-w-8xl mx-auto px-6 py-8 text-center">
        <Link
          href="/chatbox"
          className="bg-[#0286b8] text-white px-10 py-4 uppercase tracking-wide font-semibold hover:bg-[#026f99] transition"
        >
          BOOK DOCTOR
        </Link>
      </section>
    </nav>
  );
}
