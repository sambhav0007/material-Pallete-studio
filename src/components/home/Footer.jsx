export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300">
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND + VISION */}
        <div>
          <img
            src="/src/assets/logo.png"
            alt="Material Palette Studio"
            className="h-10 mb-4"
          />

          <h3 className="text-white font-semibold text-lg mb-3">
            Material Palette Studio Pvt. Ltd.
          </h3>

          <p className="text-sm leading-relaxed text-gray-400">
            Real Materials. Real Designs. Real Experiences.
          </p>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            A pioneering interior material experience studio bridging the gap
            between 3D concepts and real, available, budget-friendly materials
            using real-material 3D, VR walkthroughs, and transparent planning.
          </p>
        </div>

        {/* PRODUCT CATEGORIES */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Product Categories
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Curtains & Furnishings</li>
            <li>Mattresses</li>
            <li>Decorative Panels</li>
            <li>Wall Surfaces & Cladding</li>
            <li>Flooring Solutions</li>
            <li>Home Furnishing Materials</li>
          </ul>
        </div>

        {/* COMPANY INFO */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Studio & Company
          </h4>

          <p className="text-sm text-gray-400 leading-relaxed">
            Friends Cooperative Housing Society,<br />
            Plot No. 34, Behind Royal Enfield Showroom,<br />
            Tatya Tope Nagar, Pratap Nagar,<br />
            Nagpur – 440022
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Serving Interior Designers, Homeowners,<br />
            Architects, Builders & Commercial Spaces.
          </p>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <span>
            © {new Date().getFullYear()} Material Palette Studio Pvt. Ltd. All rights reserved.
          </span>

          <span>
            Designed as a Real-Material Interior Experience System
          </span>
        </div>
      </div>
    </footer>
  );
}
