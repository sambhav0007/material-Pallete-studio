import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have a question or want to work with us? We’d love to hear from you.
          </p>
        </div>

        {/* Main Container */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — CONTACT INFO */}
          <div className="bg-white rounded-3xl shadow-lg p-10 space-y-12">

            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  Address
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Friends Cooperative Housing Society,<br />
                  Plot no 34, Behind Royal Enfield Showroom<br />
                  Tatya Tope Nagar, Pratap Nagar, Nagpur-22
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  Email
                </h3>
                <p className="text-gray-600 text-sm">
                  contact@materialPalleteStudio.in
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  Phone
                </h3>
                <p className="text-gray-600 text-sm">
                  +91-67676776798
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Send us a message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none transition"
              />

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-all duration-200 shadow hover:shadow-md"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
