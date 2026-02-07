import { useState } from "react";
import {
  BedDouble,
  PanelsTopLeft,
  LayoutGrid,
  Sofa,
  Blinds,
  Square
} from "lucide-react";
import solidColorLaminates from "../../assets/Solid color laminates.jpg";
import woodenLaminates from "../../assets/Wooden Laminates.jpg";
import backsplashTile from "../../assets/Backsplash tile.jpg";
import floorTile from "../../assets/Floor Tile.jpg";
import quartzCountertop from "../../assets/Quartz  Countertop.jpg";
import cabinetry from "../../assets/Cabinetry.jpg";
import bed1 from "../../assets/bed1.jpg";
import bed2 from "../../assets/bed2.jpg";
import bed3 from "../../assets/bed3.jpg";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";


const categories = [
  { name: "Curtains & Furnishings", icon: Blinds },
  { name: "Mattresses", icon: BedDouble },
  { name: "Decorative Panels", icon: PanelsTopLeft },
  { name: "Wall Surfaces & Cladding", icon: Square },
  { name: "Flooring Solutions", icon: LayoutGrid },
  { name: "Home Furnishing", icon: Sofa },
];

const categoryImages = {
  "Curtains & Furnishings": [
    { title: "Solid color laminates", image: solidColorLaminates },
    { title: "Wooden Laminates", image: woodenLaminates },
    { title: "Backsplash tile", image: backsplashTile },
    { title: "Floor Tile", image: floorTile },
    { title: "Quartz Countertop", image: quartzCountertop },
    { title: "Cabinetry", image: cabinetry },
  ],
  "Mattresses": [
    { title: "Wall Tiles", image: bed1 },
    { title: "Vanity Units", image: bed2 },
    { title: "Sanitaryware", image: bed3 },
    { title: "Faucets & Fittings", image: bed1 },
    { title: "Shower Enclosures", image: bed2 },
    { title: "Bathroom Accessories", image: bed3 },
  ],
  "Decorative Panels": [
    { title: "Wallpaper", image: slide1 },
    { title: "TV Units", image: slide2 },
    { title: "Sofas", image: slide3 },
    { title: "Coffee Tables", image: slide4 },
    { title: "Rugs & Carpets", image: slide5 },
    { title: "Curtains & Blinds", image: slide1 },
  ],
  "Wall Surfaces & Cladding": [
    { title: "Wardrobes", image: floorTile },
    { title: "Beds", image: floorTile },
    { title: "Mattresses", image: floorTile },
    { title: "Bedside Tables", image: floorTile },
    { title: "Dressers", image: floorTile },
    { title: "Lighting", image: floorTile },
  ],
  "Flooring Solutions": [
    { title: "Deck Flooring", image: floorTile },
    { title: "Outdoor Panels", image: floorTile },
    { title: "Garden Furniture", image: floorTile },
    { title: "Outdoor Lighting", image: floorTile },
    { title: "Planters", image: floorTile },
    { title: "Outdoor Decor", image: floorTile },
  ],
  "Home Furnishing": [
    { title: "Fabrics", image: woodenLaminates },
    { title: "Cushions", image: woodenLaminates },
    { title: "Throws", image: woodenLaminates },
    { title: "Table Linens", image: woodenLaminates },
    { title: "Upholstery Materials", image: woodenLaminates },
    { title: "Curtain Fabrics", image: woodenLaminates },
  ],
};

export default function CategoryButtons() {
  const [activeCategory, setActiveCategory] = useState("Curtains & Furnishings");
  const images = categoryImages[activeCategory];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Heading with effect */}
      <h2
        className="
          text-center text-xl sm:text-2xl font-semibold mb-8
          tracking-tight
        "
      >
        <span className="text-gray-800">
          Where a room begins,
        </span>{" "}
        <span
          className="
            font-bold
            bg-linear-to-r from-[#4A5B6A] to-[#6B7C8A]
            bg-clip-text text-transparent
            animate-pulse
          "
        >
          a masterpiece emerges
        </span>
      </h2>

      {/* CATEGORY BUTTONS */}
      <div
        className="
    flex gap-6 mb-12 px-1 py-4 sm:py-0
    overflow-x-auto snap-x snap-mandatory
    sm:grid sm:grid-cols-3 lg:grid-cols-6
    sm:gap-8 lg:gap-10
    sm:overflow-visible
    place-items-center

    scrollbar-none
    [&::-webkit-scrollbar]:hidden
  "
        style={{ scrollbarWidth: "none" }}
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
                ${isActive
                    ? "bg-[#4A5B6A] border-[#4A5B6A] shadow-md ring-4 ring-[#4A5B6A]/40"
                    : "bg-white border-gray-300 hover:bg-gray-50"
                  }`}
              >
                <Icon
                  className={`w-7 h-7 sm:w-8 sm:h-8 ${isActive ? "text-white" : "text-gray-600"
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
