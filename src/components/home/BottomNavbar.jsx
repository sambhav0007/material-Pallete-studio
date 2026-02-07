import { NavLink } from "react-router-dom";
import { LayoutGrid, Home, Phone } from "lucide-react";

export default function BottomNavbar() {
  return (
    <div
      className="
        fixed bottom-0 left-0 w-full z-50
        bg-white border-t shadow-md
        md:hidden
      "
    >
      <div className="grid grid-cols-3 text-center py-2">

        {/* HOME */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 text-xs font-medium transition
             ${isActive ? "text-black scale-105" : "text-gray-500"}`
          }
        >
          <Home className="w-6 h-6" />
          <span>Home</span>
        </NavLink>

        {/* CATEGORY */}
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 text-xs font-medium transition
             ${isActive ? "text-black scale-105" : "text-gray-500"}`
          }
        >
          <LayoutGrid className="w-6 h-6" />
          <span>Category</span>
        </NavLink>

        {/* CONTACT */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 text-xs font-medium transition
             ${isActive ? "text-black scale-105" : "text-gray-500"}`
          }
        >
          <Phone className="w-6 h-6" />
          <span>Contact</span>
        </NavLink>

      </div>
    </div>
  );
}
