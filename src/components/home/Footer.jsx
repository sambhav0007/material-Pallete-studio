import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300">
      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          max-w-7xl mx-auto px-6 py-16
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-12
        "
      >
        {/* BRAND + VISION */}
        <div className="text-center sm:text-left">
          <img
            src="/src/assets/logo1.png"
            alt="Material Palette Studio"
            className="h-10 mb-4 mx-auto sm:mx-0"
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
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-4">
            Product Categories
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/curtains-furnishings" className="hover:underline">
                Curtains & Furnishings
              </Link>
            </li>
            <li>
              <Link to="/mattresses" className="hover:underline">
                Mattresses
              </Link>
            </li>
            <li>
              <Link to="/decorative-panels" className="hover:underline">
                Decorative Panels
              </Link>
            </li>
            <li>
              <Link to="/wall-surfaces-cladding" className="hover:underline">
                Wall Surfaces & Cladding
              </Link>
            </li>
            <li>
              <Link to="/flooring-solutions" className="hover:underline">
                Flooring Solutions
              </Link>
            </li>
            <li>
              <Link to="/home-furnishing-materials" className="hover:underline">
                Home Furnishing Materials
              </Link>
            </li>
          </ul>
        </div>

              <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
             <li>
              <Link to="/Faqs" className="hover:underline">
                Faqs
              </Link>
            </li>
            <li>
              <Link to="/Aboutus" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY INFO */}
        <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
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
        <div
          className="
            max-w-7xl mx-auto px-6 py-6
            flex flex-col sm:flex-row
            justify-between items-center
            text-sm text-gray-400
            gap-3 text-center sm:text-left
          "
        >
          <span>
            © {new Date().getFullYear()} Material Palette Studio Pvt. Ltd.
            All rights reserved.
          </span>

          <span>
            Designed as per Elan-tech pvt limited Initiative
          </span>
        </div>
      </div>
    </footer>
  );
}
