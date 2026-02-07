import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Phone, Menu, MapPin, X } from "lucide-react";
import logo from "../../assets/logo1.png";

const PRODUCT_CATEGORIES = [
  { label: "Curtains & Furnishings", path: "/curtains-furnishings" },
  { label: "Mattresses", path: "/mattresses" },
  { label: "Decorative Panels", path: "/decorative-panels" },
  { label: "Wall Surfaces & Cladding", path: "/wall-surfaces-cladding" },
  { label: "Flooring Solutions", path: "/flooring-solutions" },
  { label: "Home Furnishing Materials", path: "/home-furnishing-materials" },
];

const QUICK_LINKS = [
  { label: "FAQs", path: "/faqs" },
  { label: "About Us", path: "/aboutus" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* ================= TOP BAR ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">

          {/* LEFT */}
          <div className="flex items-center gap-3 md:gap-6 min-w-0 shrink">
            <NavLink to="/home" className="flex items-center gap-3 shrink-0">
              <img src={logo} alt="Material Palette Logo" className="h-9 md:h-10 w-auto" />
              <div className="flex flex-col md:flex-row md:gap-1 font-bold text-[#4B5966] tracking-wide items-start md:items-center">
                <span className="text-sm md:text-lg whitespace-nowrap">MATERIAL PALETTE</span>
                <span className="text-sm md:text-lg whitespace-nowrap">Studio</span>
              </div>
            </NavLink>

            {/* TOOLS (DESKTOP ONLY) */}
            <button className="hidden md:block text-sm font-medium hover:scale-105 transition-transform">
              TOOLS
            </button>
          </div>

          {/* SEARCH — DESKTOP ONLY */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search materials, designs, products..."
                className="w-full border rounded-full px-5 py-2 pr-12 text-sm focus:outline-none focus:border-[#4A5B6A]"
              />
              <Search className="absolute right-4 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            {/* SHOP ON CALL */}
            <a
              href="tel:+1234567890"
              className="hidden md:flex bg-[#4A5B6A] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold items-center gap-2 hover:scale-105 transition-all shadow-sm text-white"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Shop on call</span>
            </a>

            <a
              href="https://maps.app.goo.gl/FgEs5KHzY7JZSupD8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 hover:scale-110 transition-transform"
            >
              <MapPin className="w-5 h-5 text-gray-600" />
            </a>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-lg border border-gray-200"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* ================= CATEGORY BAR (DESKTOP) ================= */}
      <div className="bg-[#4A5B6A] border-b hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-8 text-sm font-medium py-3">
            {PRODUCT_CATEGORIES.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-1 transition-all duration-200
                   hover:scale-105
                   ${isActive ? "text-white font-bold" : "text-white/80 hover:text-white"}
                   after:absolute after:left-0 after:-bottom-1
                   after:h-0.5 after:bg-white after:transition-all
                   ${isActive ? "after:w-full" : "after:w-0"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      {/* ================= MOBILE QUICK LINKS DRAWER ================= */}
      <div
        className={`
          md:hidden fixed top-0 right-0 h-full w-9/10
          bg-[#4A5B6A]/95 z-50 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
          <img src={logo} alt="Material Palette Logo" className="h-9 md:h-10 w-auto" />
          <button onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 py-6 gap-4">
          {QUICK_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-white text-base font-medium hover:translate-x-1 transition-all"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
