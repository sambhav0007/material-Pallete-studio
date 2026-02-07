import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import { Users, Target, Lightbulb, ArrowRight, Linkedin } from "lucide-react";
import abhishekImg from "../../assets/ABHISHEK.jpg";
import kshitijImg from "../../assets/Kshitij.jpg";
import lakshyaImg from "../../assets/Lakshya.png";

const QUICK_LINKS = [
  { label: "FAQs", path: "/faqs" },
  { label: "About Us", path: "/aboutus" },
  { label: "Contact Us", path: "/contact" },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F4F8] font-sans selection:bg-slate-300 selection:text-slate-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                About Material Palette Studio
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-[1.1] tracking-tight">
                Real Materials. <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-600 to-slate-400">
                  Real Confidence.
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Bridging the gap between 3D imagination and execution-ready reality.
                We bring authenticity to interior design with a next-generation material experience.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <span className="text-2xl font-bold text-slate-800">2024</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Year<br />Established</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <span className="text-2xl font-bold text-slate-800">300+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Materials<br />Curated</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-slate-900/5 rounded-4xl transform rotate-3 scale-105 transition-transform group-hover:rotate-2"></div>
              <div className="relative rounded-4xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 aspect-4/3">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                  alt="Studio Interior"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORPORATE INTRO ================= */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-slate-100 rounded-full -z-10"></div>
            <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Material Palette"
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center gap-3">
                <span className="text-xs text-slate-500">Est.</span>
                <span className="text-sm font-bold text-slate-800">2024</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold w-max">
              <Users className="w-4 h-4" /> About the Company
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Transforming Decisions with Tangible Materials
            </h2>

            <p className="text-lg text-slate-600 max-w-prose">
              Incorporated in <strong>November 2024</strong>, Material Palette Studio Pvt. Ltd. bridges the gap between digital visuals and physical reality. We deliver an integrated experience combining <strong>authentic materials</strong>, <strong>real-time pricing</strong>, and <strong>immersive technology</strong> so design decisions are confident and execution-ready.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-emerald-500"><Target className="w-5 h-5" /></span>
                <div>
                  <div className="font-semibold text-slate-800">Real materials</div>
                  <div className="text-sm">Authentic samples integrated into 3D visuals.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-emerald-500"><Users className="w-5 h-5" /></span>
                <div>
                  <div className="font-semibold text-slate-800">Transparent pricing</div>
                  <div className="text-sm">Upfront, material-based budgeting for every project.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-emerald-500">📐</span>
                <div>
                  <div className="font-semibold text-slate-800">Execution-ready</div>
                  <div className="text-sm">What you see in VR is what you can build on-site.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-emerald-500">🔁</span>
                <div>
                  <div className="font-semibold text-slate-800">Faster decisions</div>
                  <div className="text-sm">Reduce revision cycles and site surprises.</div>
                </div>
              </li>
            </ul>

            <div className="flex items-center gap-4 pt-2">
              <Link to="/" className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-slate-800 transition">Explore Materials</Link>
              <Link to="/contact" className="inline-flex items-center gap-2 text-slate-800 px-4 py-3 rounded-lg border border-slate-200 hover:shadow-md transition">Contact Sales <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 px-6 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-10 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              To revolutionize interior design selection in India by creating a seamless
              bridge between imagination and reality through valid materials and
              transparent pricing.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-10 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <ul className="space-y-3 text-slate-600 text-lg">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0"></span>
                Integrate real materials into every 3D visual.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0"></span>
                Enable confident decisions through VR.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0"></span>
                Offer transparent, material-based budgeting.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= BOARD OF DIRECTORS ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Leadership</h2>
            <h3 className="text-4xl font-bold text-slate-900">Board of Directors</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                name: "Abhishek Acharya",
                role: "Director · Animation & VFX",
                img: abhishekImg,
                bio: "Founder of DIZVIZ Animation. 700+ lectures nationwide. Expert in visual storytelling."
              },
              {
                name: "Ar. Kshitij Shirkhedkar",
                role: "Director · Principal Architect",
                img: kshitijImg,
                bio: "20+ years expertise. Ex-Hafeez Contractor. Member of IIA & IIID. Bank empanelled valuer."
              },
              {
                name: "Lakshya Sangtani",
                role: "Director · Finance & Strategy",
                img: lakshyaImg,
                bio: "Financial strategist turned material-tech entrepreneur. Ex-ICICI Prudential AMC lead."
              },
            ].map((director, i) => (
              <div key={i} className="group relative">
                <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={director.img}
                    alt={director.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">{director.role}</p>
                    <h4 className="text-xl font-bold mb-3">{director.name}</h4>
                    <p className="text-sm text-slate-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {director.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= CLOSING ================= */}
      <section className="py-24 bg-[#F0F4F8] text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
            Built on expertise. <br />
            Designed for confidence.
          </h2>
          <p className="text-lg text-slate-600">
            Join us in redefining how interior spaces are imagined and created.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900/10">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
