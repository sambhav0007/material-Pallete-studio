import { NavLink } from "react-router-dom";
import { LayoutGrid, BedDouble, Sofa, PanelsTopLeft, Layers, Home } from "lucide-react";

const PRODUCT_CATEGORIES = [
  { label: "Curtains & Furnishings", path: "/curtains-furnishings", icon: Sofa },
  { label: "Mattresses", path: "/mattresses", icon: BedDouble },
  { label: "Decorative Panels", path: "/decorative-panels", icon: PanelsTopLeft },
  { label: "Wall Surfaces & Cladding", path: "/wall-surfaces-cladding", icon: Layers },
  { label: "Flooring Solutions", path: "/flooring-solutions", icon: LayoutGrid },
  { label: "Home Furnishing Materials", path: "/home-furnishing-materials", icon: Home },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Heading Section */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-xs font-bold tracking-widest uppercase">
            Collections
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Explore Our <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4A5B6A] to-[#2E3B45]">Categories</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
            Dive into our curated selection of premium materials and furnishing solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="
          grid grid-cols-2 sm:grid-cols-3
          gap-4 sm:gap-6 md:gap-8
        ">

          {PRODUCT_CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <NavLink
                key={cat.path}
                to={cat.path}
                className="
                  group relative
                  bg-white rounded-2xl md:rounded-3xl
                  flex flex-col items-center justify-center
                  aspect-[4/3] md:aspect-square
                  p-6
                  shadow-sm hover:shadow-xl
                  border border-gray-100 hover:border-[#4A5B6A]/20
                  transition-all duration-300 ease-out
                  hover:-translate-y-1.5
                  overflow-hidden
                  animate-fade-in-up
                "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative background blob on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A5B6A]/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                {/* Icon Circle */}
                <div className="
                  relative z-10
                  w-14 h-14 md:w-16 md:h-16
                  rounded-2xl
                  bg-gray-50 group-hover:bg-[#4A5B6A]
                  flex items-center justify-center
                  mb-4 md:mb-6
                  transition-colors duration-300
                  shadow-inner
                ">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-slate-700 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Label */}
                <span className="
                  relative z-10
                  font-bold text-slate-700 text-sm md:text-lg
                  text-center leading-tight
                  group-hover:text-[#4A5B6A]
                  transition-colors duration-300
                ">
                  {cat.label}
                </span>

                {/* Hover subtle glow at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4A5B6A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </NavLink>
            );
          })}

        </div>
      </div>
    </main>
  );
}
