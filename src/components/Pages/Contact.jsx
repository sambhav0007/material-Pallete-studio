import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-start">

        
        <div className="space-y-16">

        
          <div className="flex flex-col items-center text-center gap-4">
            <MapPin className="w-7 h-7 text-gray-800" />
            <h3 className="font-semibold text-lg">Address</h3>
            <p className="text-gray-600 leading-relaxed text-sm max-w-xs">
            Friends Cooperative Housing Society,
            Plot no 34, Behind Royal Enfield Showroom
            Tatya Tope Nagar, Pratap Nagar, Nagpur-22
            </p>
          </div>

       
          <div className="flex flex-col items-center text-center gap-4">
            <Mail className="w-7 h-7 text-gray-800" />
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600 text-sm">
              contact@materialPalleteStudio.in
            </p>
          </div>


          <div className="flex flex-col items-center text-center gap-4">
            <Phone className="w-7 h-7 text-gray-800" />
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600 text-sm">
              +91-67676776798
            </p>
          </div>

        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-8">Send us a message</h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-md transition"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
    
  );
}
