import { MapPin, Mail, Phone, Clock, Send, ArrowRight } from "lucide-react";
import Footer from "../home/Footer";
import bgImage from "../../assets/bgimage.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#4A5B6A] selection:text-white">

      {/* HERO SECTION - Background Image with Overlay */}
      <section
        className="relative py-16 md:py-32 overflow-hidden px-4 md:px-6 bg-cover bg-center animate-fade-in"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-4xl mx-auto text-center space-y-4 md:space-y-6 z-10 animate-fade-in-up">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-medium tracking-wider mb-1 md:mb-2">
            Connect With Us
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-sm">
            Let's Start a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-gray-400">
              Conversation.
            </span>
          </h1>
          <p className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed px-2">
            Ready to transform your space? We're here to help you choose the perfect materials.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT - Overlapping Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-10 md:-mt-20 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">

          {/* LEFT: Contact Form (7 cols) */}
          <div className="lg:col-span-7 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl shadow-gray-200/50 p-6 md:p-12 transition-all duration-300 hover:shadow-3xl border border-gray-100 ring-1 ring-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Send Message</h2>
              <p className="text-sm md:text-base text-gray-500 mb-6 md:mb-8">Fill out the form and we'll get back to you shortly.</p>

              <form className="space-y-5 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#4A5B6A] transition-colors">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm md:text-base text-gray-800 focus:outline-none focus:border-[#4A5B6A] focus:bg-white transition-all duration-300 rounded-t-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#4A5B6A] transition-colors">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm md:text-base text-gray-800 focus:outline-none focus:border-[#4A5B6A] focus:bg-white transition-all duration-300 rounded-t-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#4A5B6A] transition-colors">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm md:text-base text-gray-800 focus:outline-none focus:border-[#4A5B6A] focus:bg-white transition-all duration-300 rounded-t-lg"
                    placeholder="+91 Phone Number"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#4A5B6A] transition-colors">Your Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm md:text-base text-gray-800 focus:outline-none focus:border-[#4A5B6A] focus:bg-white transition-all duration-300 rounded-t-lg resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full max-w-full md:max-w-50 bg-[#4A5B6A] hover:bg-[#3d4c58] text-white font-bold py-3 md:py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden relative"
                >
                  <span className="relative z-10 text-sm md:text-base">Send Message</span>
                  <Send className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Combined Futuristic Contact Info Card */}
            <div
              className="lg:col-span-5 relative group h-full animate-fade-in-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#4A5B6A] to-[#2E3B45] rounded-2xl md:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-50 blur-lg -z-10"></div>

              <div className="bg-[#4A5B6A] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col h-full relative z-10 border border-white/10">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

                {/* Top Section: Address & Map */}
                <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm border-b border-white/10 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Visit Our Studio</h3>
                      <p className="text-white/80 leading-relaxed text-xs md:text-sm">
                        Friends Cooperative Housing Society,<br />
                        Plot no 34, Behind Royal Enfield Showroom,<br />
                        Tatya Tope Nagar, Nagpur-22
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/FgEs5KHzY7JZSupD8"
                    target="_blank"
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-2.5 md:py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group/btn border border-white/10 font-medium text-sm md:text-base"
                  >
                    Get Directions <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>

                {/* Bottom Section: Contact Details */}
                <div className="p-6 md:p-8 space-y-5 md:space-y-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-colors shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-0.5">Call Us</div>
                      <div className="text-white font-semibold tracking-wide text-sm md:text-base">+91-67676776798</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-colors shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-0.5">Email Us</div>
                      <div className="text-white font-semibold tracking-wide truncate text-sm md:text-base">contact@materialPalleteStudio.in</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-colors shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-0.5">Business Hours</div>
                      <div className="text-white font-semibold tracking-wide text-sm md:text-base">Mon - Sat: 10AM - 8PM</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
