import { useState } from "react";
import {
  Home,
  Bath,
  Sofa,
  BedDouble,
  Umbrella,
} from "lucide-react";

const categories = [
  { name: "Curtains & Furnishings", icon: Home },
  { name: "Mattresses", icon: Bath },
  { name: "Decorative Panels", icon: Sofa },
  { name: "Wall Surfaces & Cladding", icon: BedDouble },
  { name: "Flooring Solutions", icon: Umbrella },
  { name: "Home Furnishing", icon: Umbrella },
];

const categoryImages = {
  "Curtains & Furnishings": [
    { title: "Solid color laminates", image: "../assets/Solid color laminates.jpg" },
    { title: "Wooden Laminates", image: "../assets/wooden laminates.jpg" },
    { title: "Backsplash tile", image: "../assets/Backsplash tile.jpg" },
    { title: "Floor Tile", image: "../assets/Floor Tile.jpg" },
    { title: "Quartz Countertop", image: "../assets/Quartz Countertop.jpg" },
    { title: "Cabinetry", image: "../assets/Cabinetry.jpg" },
  ],
  "Mattresses": [
    { title: "Wall Tiles", image: "../assets/bathroom1.jpg" },
    { title: "Vanity Units", image: "../assets/bathroom2.jpg" },
    { title: "Sanitaryware", image: "../assets/bathroom3.jpg" },
    { title: "Faucets & Fittings", image: "../assets/bathroom4.jpg" },
    { title: "Shower Enclosures", image: "../assets/bathroom5.jpg" },
    { title: "Bathroom Accessories", image: "../assets/bathroom6.jpg" },
  ],
  "Decorative Panels": [
    { title: "Wallpaper", image: "../assets/living1.jpg" },
    { title: "TV Units", image: "../assets/living2.jpg" },
    { title: "Sofas", image: "../assets/living3.jpg" },
    { title: "Coffee Tables", image: "../assets/living4.jpg" },
    { title: "Rugs & Carpets", image: "../assets/living5.jpg" },
    { title: "Curtains & Blinds", image: "../assets/living6.jpg" },
  ],
  "Wall Surfaces & Cladding": [
    { title: "Wardrobes", image: "../assets/bedroom1.jpg" },
    { title: "Beds", image: "../assets/bedroom2.jpg" },
    { title: "Mattresses", image: "../assets/bedroom3.jpg" },
    { title: "Bedside Tables", image: "../assets/bedroom4.jpg" },
    { title: "Dressers", image: "../assets/bedroom5.jpg" },
    { title: "Lighting", image: "../assets/bedroom6.jpg" },
  ],
  "Flooring Solutions": [
    { title: "Deck Flooring", image: "../assets/outdoor1.jpg" },
    { title: "Outdoor Panels", image: "../assets/outdoor2.jpg" },
    { title: "Garden Furniture", image: "../assets/outdoor3.jpg" },
    { title: "Outdoor Lighting", image: "../assets/outdoor4.jpg" },
    { title: "Planters", image: "../assets/outdoor5.jpg" },
    { title: "Outdoor Decor", image: "../assets/outdoor6.jpg" },
  ],
  "Home Furnishing": [
    { title: "Fabrics", image: "../assets/fabrics1.jpg" },
    { title: "Cushions", image: "../assets/fabrics2.jpg" },
    { title: "Throws", image: "../assets/fabrics3.jpg" },
    { title: "Table Linens", image: "../assets/fabrics4.jpg" },
    { title: "Upholstery Materials", image: "../assets/fabrics5.jpg" },
    { title: "Curtain Fabrics", image: "../assets/fabrics6.jpg" },
  ],
};

export default function CategoryButtons() {
  const [activeCategory, setActiveCategory] = useState("Curtains & Furnishings");

  const images = categoryImages[activeCategory];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Heading with effect */}
      <h2 className="
        text-center text-xl sm:text-2xl font-semibold mb-8
        tracking-tight
      ">
        <span className="text-gray-800">
          Where a room begins,
        </span>{" "}
        <span className="
          font-bold bg-linear-to-r from-yellow-500 to-yellow-300
          bg-clip-text text-transparent
          animate-pulse
        ">
          a masterpiece emerges
        </span>
      </h2>

      {/* CATEGORY BUTTONS */}
      {/* CATEGORY BUTTONS */} 
<div
  className="
    flex gap-6 mb-12 px-1
    overflow-x-auto snap-x snap-mandatory
    sm:grid sm:grid-cols-3 lg:grid-cols-6
    sm:gap-8 lg:gap-10
    sm:overflow-visible
    place-items-center
  "
>
  {categories.map((cat) => {
    const Icon = cat.icon;
    const isActive = activeCategory === cat.name;

    return (
      <button
        key={cat.name}
        onClick={() => setActiveCategory(cat.name)}
        className="
          flex flex-col items-center gap-2
          shrink-0 snap-start
          focus:outline-none
          transition-all duration-200
          hover:scale-105 active:scale-95
        "
      >
        <div
          className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full
          flex items-center justify-center border
          transition-all duration-200
          ${
            isActive
              ? "bg-yellow-400 border-yellow-400 shadow-md ring-4 ring-yellow-300/50"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }`}
        >
          <Icon
            className={`w-7 h-7 sm:w-8 sm:h-8 ${
              isActive ? "text-black" : "text-gray-600"
            }`}
          />
        </div>

        <span className="text-xs sm:text-sm font-medium text-gray-700 text-center max-w-22.5">
          {cat.name}
        </span>
      </button>
    );
  })}
</div>


      {/* IMAGE GRID */}
      <div
        className="
          grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6
          gap-4 sm:gap-6
        "
      >
        {(window.innerWidth < 640 ? images.slice(0, 4) : images).map(
          (item, index) => (
            <div
              key={index}
              className="text-center transition-all hover:scale-[1.03]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 sm:h-44 object-cover rounded-md"
              />
              <p className="mt-2 text-xs sm:text-sm font-medium">
                {item.title}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
