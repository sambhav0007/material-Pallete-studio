import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, User, Search, Phone, Menu, X } from "lucide-react";

const PRODUCT_CATEGORIES = [
  { label: "Curtains & Furnishings", path: "/curtains-furnishings" },
  { label: "Mattresses", path: "/mattresses" },
  { label: "Decorative Panels", path: "/decorative-panels" },
  { label: "Wall Surfaces & Cladding", path: "/wall-surfaces-cladding" },
  { label: "Flooring Solutions", path: "/flooring-solutions" },
  { label: "Home Furnishing Materials", path: "/home-furnishing-materials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* ================= TOP BAR ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          
          {/* LEFT */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* LOGO */}
            <div className="fixed top-0 left-0 p-4 flex items-center gap-3 z-50">
           <img
             src="/src/assets/logo1.png"
            alt="Logo"
            className="h-9 md:h-10 w-auto object-contain"
            />
             <span className="font-bold text-sm md:text-lg text-[#4B5966] tracking-wide">
             MATERIAL PALETTE Studio
            </span>
            </div>

            {/* VISIT STORE — NOW VISIBLE ON MOBILE */}
            <button className="text-xs md:text-sm font-medium hover:underline">
              <a
                href="https://maps.app.goo.gl/FgEs5KHzY7JZSupD8"
                target="_blank"
                rel="noopener noreferrer"
              >
                VISIT STORE
              </a>
            </button>

            <button className="hidden md:block text-sm font-medium hover:underline">
              TOOLS
            </button>
          </div>

          {/* SEARCH — DESKTOP ONLY */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search materials, designs, products..."
                className="w-full border rounded-full px-5 py-2 pr-12 text-sm focus:outline-none"
              />
              <Search className="absolute right-4 top-2.5 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* SHOP ON CALL — ALWAYS VISIBLE */}
            <a
              href="tel:+1234567890"
              className="bg-brandYellow px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Shop on call</span>
            </a>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg border"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= CATEGORY BAR (DESKTOP) ================= */}
      <div className="bg-yellow-300 border-b hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-8 text-sm font-medium py-3">
            {PRODUCT_CATEGORIES.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-1 transition-all duration-200
                  hover:scale-105 hover:ring-4 hover:ring-yellow-300 hover:ring-offset-2
                  ${isActive ? "text-black font-semibold" : "text-black/80 hover:text-black"}
                  after:absolute after:left-0 after:bottom-0
                  after:h-2px after:bg-black after:transition-all
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-0"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* ================= CATEGORY BAR (MOBILE DROPDOWN) ================= */}
      {open && (
        <div className="md:hidden bg-yellow-300 border-b">
          <div className="px-6 py-4 flex flex-col gap-4">
            {PRODUCT_CATEGORIES.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-black font-medium py-2 border-b last:border-b-0"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
