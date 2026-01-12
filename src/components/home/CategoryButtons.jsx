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
  { name: "Home Furnishing Materials", icon: Umbrella },
];

const categoryImages = {
  "Curtains & Furnishings": [
    { title: "Solid color laminates", image: "/src/assets/Solid color laminates.jpg" },
    { title: "Wooden Laminates", image: "/src/assets/wooden laminates.jpg" },
    { title: "Backsplash tile", image: "/src/assets/Backsplash tile.jpg" },
    { title: "Floor Tile", image: "/src/assets/Floor Tile.jpg" },
    { title: "Quartz Countertop", image: "/src/assets/Quartz Countertop.jpg" },
    { title: "Cabinetry", image: "/src/assets/Cabinetry.jpg" },
  ],
  "Mattresses": [
    { title: "Wall Tiles", image: "/src/assets/bathroom1.jpg" },
    { title: "Vanity Units", image: "/src/assets/bathroom2.jpg" },
    { title: "Sanitaryware", image: "/src/assets/bathroom3.jpg" },
    { title: "Faucets & Fittings", image: "/src/assets/bathroom4.jpg" },
    { title: "Shower Enclosures", image: "/src/assets/bathroom5.jpg" },
    { title: "Bathroom Accessories", image: "/src/assets/bathroom6.jpg" },
  ],
  "Decorative Panels": [
    { title: "Wallpaper", image: "/src/assets/living1.jpg" },
    { title: "TV Units", image: "/src/assets/living2.jpg" },
    { title: "Sofas", image: "/src/assets/living3.jpg" },
    { title: "Coffee Tables", image: "/src/assets/living4.jpg" },
    { title: "Rugs & Carpets", image: "/src/assets/living5.jpg" },
    { title: "Curtains & Blinds", image: "/src/assets/living6.jpg" },
  ],
  "Wall Surfaces & Cladding": [
    { title: "Wardrobes", image: "/src/assets/bedroom1.jpg" },
    { title: "Beds", image: "/src/assets/bedroom2.jpg" },
    { title: "Mattresses", image: "/src/assets/bedroom3.jpg" },
    { title: "Bedside Tables", image: "/src/assets/bedroom4.jpg" },
    { title: "Dressers", image: "/src/assets/bedroom5.jpg" },
    { title: "Lighting", image: "/src/assets/bedroom6.jpg" },
  ],
  "Flooring Solutions": [
    { title: "Deck Flooring", image: "/src/assets/outdoor1.jpg" },
    { title: "Outdoor Panels", image: "/src/assets/outdoor2.jpg" },
    { title: "Garden Furniture", image: "/src/assets/outdoor3.jpg" },
    { title: "Outdoor Lighting", image: "/src/assets/outdoor4.jpg" },
    { title: "Planters", image: "/src/assets/outdoor5.jpg" },
    { title: "Outdoor Decor", image: "/src/assets/outdoor6.jpg" },
  ],
};

export default function CategoryButtons() {
  const [activeCategory, setActiveCategory] = useState("Curtains & Furnishings");

  return (
    <section className="max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold mb-8">
        Where a room begins,{" "}
        <span className="font-bold">a masterpiece emerges</span>
      </h2>

      {/* CATEGORY BUTTONS */}
     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-12 place-items-center">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.name;

          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className="flex flex-col items-center gap-2 focus:outline-none"
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center border transition-all duration-200
                  ${
                    isActive
                      ? "bg-yellow-400 border-yellow-400 shadow-md"
                      : "bg-white border-gray-300 hover:bg-gray-50"
                  }`}
              >
                <Icon
                  className={`w-8 h-8 ${
                    isActive ? "text-black" : "text-gray-600"
                  }`}
                />
              </div>

              <span className="text-sm font-medium text-gray-700">
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categoryImages[activeCategory].map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-cover rounded-md"
            />
            <p className="mt-3 text-sm font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
