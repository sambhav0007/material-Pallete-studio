import React from "react";

export default function About() {
  return (
    <section className="bg-[#f7f8fa] px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-24 text-gray-700">

        {/* ================= HERO / INTRO ================= */}
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl px-10 md:px-16 py-16">
          {/* background accents */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-slate-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gray-200/40 blur-3xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <p className="text-sm tracking-[0.35em] text-gray-500 uppercase mb-6">
              About Us
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Material Palette Studio Pvt. Ltd.
            </h1>

            <p className="text-lg leading-relaxed text-gray-600">
              A next-generation interior material experience studio bridging the
              gap between 3D design imagination and real, available,
              budget-friendly materials.
            </p>
          </div>
        </div>

        {/* ================= CORPORATE INTRO ================= */}
        <div className="bg-white rounded-3xl shadow-lg px-10 md:px-14 py-14">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Corporate Introduction
          </h2>

          <p className="text-gray-600 leading-relaxed space-y-4">
            <span className="block">
              Incorporated in <strong>November 2024</strong>, Material Palette
              Studio Pvt. Ltd. is a pioneering interior material experience
              studio designed to transform how interior design decisions are
              made.
            </span>
            <span className="block">
              We bridge the long-standing disconnect between 3D visuals and
              real-world execution by integrating <strong>actual materials</strong>,
              <strong>real pricing</strong>, and <strong>immersive technology</strong>
              into every stage of design.
            </span>
            <span className="block">
              Our ecosystem enables real-material-based 3D rendering, VR
              walkthroughs, and an in-studio material experience—ensuring
              clarity, confidence, and execution readiness.
            </span>
          </p>
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-lg px-10 py-12 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize interior design selection in India by combining
              real materials, immersive technology, and transparent pricing.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg px-10 py-12 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Mission
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Integrate real materials into every 3D visual</li>
              <li>Enable confident decision-making through VR walkthroughs</li>
              <li>Offer flexible, transparent material-based budgeting</li>
              <li>
                Provide designers with a ready-to-execute material ecosystem
              </li>
            </ul>
          </div>
        </div>

        {/* ================= DIRECTORS ================= */}
        <div className="space-y-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            Board of Directors
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Abhishek Acharya */}
            <div className="bg-white rounded-3xl shadow-lg px-8 py-10 hover:-translate-y-1 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Abhishek Acharya
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Director · Animation, Graphics & VFX Specialist
              </p>
              <p className="text-gray-600 text-sm leading-relaxed space-y-2">
                <span className="block">
                  Visionary entrepreneur and founder of DIZVIZ Animation Studio,
                  a leading creative production and training center in Central
                  India.
                </span>
                <span className="block">
                  Delivered high-impact VFX, e-learning, social campaigns,
                  walkthroughs, documentaries, and corporate films.
                </span>
                <span className="block">
                  Conducted 700+ lectures nationwide, Board of Studies member
                  across universities, and recipient of the prestigious Ramoji
                  Film City Award.
                </span>
              </p>
            </div>

            {/* Kshitij Shirkhedkar */}
            <div className="bg-white rounded-3xl shadow-lg px-8 py-10 hover:-translate-y-1 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ar. Kshitij Shirkhedkar
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Director · Architect
              </p>
              <p className="text-gray-600 text-sm leading-relaxed space-y-2">
                <span className="block">
                  Second-generation architect with 20+ years of experience,
                  VNIT Nagpur alumnus.
                </span>
                <span className="block">
                  Worked with N.M.B.A., New Delhi and Ar. Hafeez Contractor,
                  Mumbai on large-scale commercial, residential, and township
                  projects.
                </span>
                <span className="block">
                  Active member of IIA, IIID, IOV, BNI and Real Estate Valuer for
                  multiple banks.
                </span>
              </p>
            </div>

            {/* Lakshya Sangtani */}
            <div className="bg-white rounded-3xl shadow-lg px-8 py-10 hover:-translate-y-1 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lakshya Sangtani
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Director · Finance & Strategy
              </p>
              <p className="text-gray-600 text-sm leading-relaxed space-y-2">
                <span className="block">
                  Finance professional turned material-tech entrepreneur with
                  academic roots at Christ University and NMIMS Mumbai.
                </span>
                <span className="block">
                  Former Product Development & Strategy professional at ICICI
                  Prudential AMC Ltd., working across analytics, business
                  models, and investor behavior.
                </span>
                <span className="block">
                  Combines financial rigor with a passion for transforming the
                  interior materials industry.
                </span>
              </p>
            </div>

          </div>
        </div>

        {/* ================= CLOSING ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl font-medium text-gray-900 mb-4">
            Built on expertise. Designed for confidence.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Material Palette Studio empowers clients, designers, and developers
            to move from concept to execution with clarity, accuracy, and trust.
          </p>
        </div>

      </div>
    </section>
  );
}
