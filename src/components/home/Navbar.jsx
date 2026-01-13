import { NavLink } from "react-router-dom";
import { ShoppingCart, User, Search, Phone } from "lucide-react";

const PRODUCT_CATEGORIES = [
  { label: "Curtains & Furnishings", path: "/curtains-furnishings" },
  { label: "Mattresses", path: "/mattresses" },
  { label: "Decorative Panels", path: "/decorative-panels" },
  { label: "Wall Surfaces & Cladding", path: "/wall-surfaces-cladding" },
  { label: "Flooring Solutions", path: "/flooring-solutions" },
  { label: "Home Furnishing Materials", path: "/home-furnishing-materials" },
];

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50">
      {/* ================= TOP BAR ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/logo.png"
                alt="Material Palette"
                className="h-10 w-auto object-contain"
              />
              <span className="font-bold text-lg tracking-wide">
                MATERIAL PALETTE Studio
              </span>
            </div>

            <div className="text-sm text-gray-600">
              Deliver to <span className="font-semibold">560001</span>
            </div>

            <button className="text-sm font-medium hover:underline">
              VISIT STORE
            </button>

            <button className="text-sm font-medium hover:underline">
              TOOLS
            </button>
          </div>

          {/* SEARCH */}
          <div className="flex-1 mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search materials, designs, products..."
                className="w-full border rounded-full px-5 py-2 pr-12 text-sm focus:outline-none"
              />
              <Search className="absolute right-4 top-2.5 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <button className="bg-brandYellow px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Shop on call
            </button>

            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            <User className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* ================= CATEGORY BAR ================= */}
      <div className="bg-brandYellow">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-8 text-sm font-medium py-3">
            {PRODUCT_CATEGORIES.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-1 transition
                   ${isActive ? "text-black font-semibold" : "text-black/80 hover:text-black"}
                   after:absolute after:left-0 after:-bottom-1
                   after:h-2px after:bg-black after:transition-all
                   ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
