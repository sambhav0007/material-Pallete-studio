import React from "react";

export default function About() {
  return (
    <section className="bg-[#f6f1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-28">

        {/* ================= HERO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm tracking-[0.35em] uppercase text-gray-500 mb-4">
              About Us
            </p>

            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
              Real Materials. <br />
              Real Decisions. <br />
              Real Confidence.
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
              Material Palette Studio Pvt. Ltd. is a next-generation interior
              material experience studio bridging the gap between 3D imagination
              and real, available, execution-ready materials.
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Studio Interior"
              className="w-full h-420px object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* ================= CORPORATE INTRO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Corporate Introduction
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Incorporated in <strong>November 2024</strong>, Material Palette
                Studio Pvt. Ltd. is a pioneering interior material experience
                studio designed to transform how interior design decisions are made.
              </p>

              <p>
                We eliminate the long-standing disconnect between 3D visuals and
                real-world execution by integrating <strong>actual materials</strong>,
                <strong> real pricing</strong>, and <strong>immersive technology</strong>
                into every stage of planning.
              </p>

              <p>
                Our ecosystem enables real-material-based 3D rendering, VR walkthroughs,
                and a physical studio experience—ensuring clarity, confidence,
                and execution readiness.
              </p>
            </div>
          </div>

          {/* MATERIAL IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1582582621959-48d27397dc69"
              alt="Material Palette"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize interior design selection in India by combining
              real materials, immersive visualization, and transparent pricing.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Mission
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Integrate real materials into every 3D visual</li>
              <li>Enable confident decisions through VR walkthroughs</li>
              <li>Offer transparent, material-based budgeting</li>
              <li>Create execution-ready design ecosystems</li>
            </ul>
          </div>
        </div>

        {/* ================= DIRECTORS ================= */}
        <div className="space-y-14">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            Board of Directors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CARD */}
            {[
              {
                name: "Abhishek Acharya",
                role: "Director · Animation, Graphics & VFX",
                img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
                desc: [
                  "Founder of DIZVIZ Animation Studio and creative technologist.",
                  "700+ lectures nationwide and Ramoji Film City Award recipient.",
                  "Specialist in VFX, walkthroughs, and visual storytelling.",
                ],
              },
              {
                name: "Ar. Kshitij Shirkhedkar",
                role: "Director · Architect",
                img: "https://images.unsplash.com/photo-1603415526960-f7e0328f7c52",
                desc: [
                  "Second-generation architect with 20+ years of experience.",
                  "Worked with NMBA Delhi & Hafeez Contractor Mumbai.",
                  "Member of IIA, IIID, IOV and bank empanelled valuer.",
                ],
              },
              {
                name: "Lakshya Sangtani",
                role: "Director · Finance & Strategy",
                img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
                desc: [
                  "Finance professional turned material-tech entrepreneur.",
                  "Former ICICI Prudential AMC strategy & analytics lead.",
                  "Brings financial discipline to design execution.",
                ],
              },
            ].map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {d.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{d.role}</p>

                  <div className="space-y-2 text-sm text-gray-600">
                    {d.desc.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CLOSING ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            Built on expertise. Designed for confidence.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Material Palette Studio empowers homeowners, architects, and
            designers to move from concept to execution with clarity,
            accuracy, and trust.
          </p>
        </div>

      </div>
    </section>
  );
}
