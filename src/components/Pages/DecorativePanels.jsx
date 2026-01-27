import { useState } from "react";
import { Heart, SlidersHorizontal, X } from "lucide-react";
import { Link } from "react-router-dom";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

/* ================= MOCK DATA ================= */
const PRODUCTS = [
  {
    id: 1,
    title: "Tropical Wall Tile TL 05553 Vivid Fusion",
    image: slide1,
    priceSqft: 85,
    priceBox: 1320,
    discount: 40,
    tag: "TROPICAL FLORALS",
  },
  {
    id: 2,
    title: "Hexagonal Wall & Floor Tile TL 05273 B",
    image: slide2,
    priceSqft: 109,
    priceBox: 2730,
    discount: 40,
    tag: "HEXAGONAL TILES",
  },
  {
    id: 3,
    title: "Moroccan Floor & Wall Tile TL 05053",
    image: slide3,
    priceSqft: 322,
    priceBox: 2497,
    discount: 35,
    tag: "MOROCCANS",
  },
  {
    id: 4,
    title: "Rustic Wood Paneling DP 01234 Oak Finish",
    image: slide1,
    priceSqft: 199,
    pricebox: 2321,
    discount: 32,
    tag: "ghost",
  },
];

/* ================= MAIN PAGE ================= */
export default function DecorativePanels() {
  const [sortBy, setSortBy] = useState("popular");
  const [filterOpen, setFilterOpen] = useState(false); // desktop default open

  /* SORT LOGIC */
  const sortedProducts = [...PRODUCTS].sort((a, b) => {
    if (sortBy === "priceLow") return a.priceSqft - b.priceSqft;
    if (sortBy === "priceHigh") return b.priceSqft - a.priceSqft;
    return a.id - b.id;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

      {/* ================= BREADCRUMB ================= */}
      <p className="text-sm text-gray-500 mb-3">
        <Link to="/" className="hover:underline hover:text-black">
          Home
        </Link>{" "}
        / Decorative Panels
      </p>

      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold">
          Decorative Panels
        </h1>

        <div className="flex items-center gap-3">

          {/* MOBILE FILTER BUTTON */}
          <button
            onClick={() => setFilterOpen(true)}
            className="sm:hidden flex items-center gap-2 border px-4 py-2 rounded-full text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* DESKTOP FILTER TOGGLE */}
          <button
            onClick={() => setFilterOpen((prev) => !prev)}
            className="hidden lg:flex items-center gap-2 border px-4 py-2 rounded-full text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {filterOpen ? "Hide Filters" : "Show Filters"}
          </button>

          {/* SORT */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-full px-4 py-2 text-sm"
          >
            <option value="popular">Sort By: Popular</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* ================= LAYOUT ================= */}
      <div className="grid grid-cols-12 gap-8 transition-all duration-300">

        {/* ================= FILTER SIDEBAR (DESKTOP) ================= */}
        {filterOpen && (
          <aside className="hidden lg:block col-span-3">
            <div className="space-y-4 pt-2">
              <Filters />
            </div>
          </aside>
        )}

        {/* ================= PRODUCT GRID ================= */}
        <section
          className={`
            col-span-12
            ${filterOpen ? "lg:col-span-9" : "lg:col-span-12"}
            transition-all duration-300
          `}
        >
          <p className="text-sm text-gray-500 mb-4">
            Showing 1–{sortedProducts.length} of 10094 products
          </p>

          {/* DESKTOP = 4 COLUMNS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* ================= MOBILE FILTER DRAWER ================= */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 overflow-y-auto">

            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-lg">Filters</h2>
              <button onClick={() => setFilterOpen(false)}>
                <X />
              </button>
            </div>

            <Filters />

            <button
              onClick={() => setFilterOpen(false)}
              className="mt-6 w-full bg-black text-white py-3 rounded-md"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

/* ================= FILTER BLOCK ================= */
function Filters() {
  return (
    <>
      {[
        "Price Range",
        "Category",
        "Series",
        "Color",
        "Finish",
        "Approx Size (mm)",
        "Thickness (mm)",
        "Material",
        "Application",
      ].map((title) => (
        <FilterSection key={title} title={title} />
      ))}

      <div className="flex items-center gap-3 pt-4">
        <input type="checkbox" />
        <span className="text-sm">In Store</span>
      </div>

      <div className="flex items-center gap-3">
        <input type="checkbox" />
        <span className="text-sm">Show Samples</span>
      </div>
    </>
  );
}

/* ================= FILTER ITEM ================= */
function FilterSection({ title }) {
  return (
    <details className="border-b pb-2">
      <summary className="cursor-pointer font-medium text-sm">
        {title}
      </summary>
    </details>
  );
}

/* ================= PRODUCT CARD ================= */
function ProductCard({ product }) {
  return (
    <div className="relative group">
      
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded-md"
      />

      <div className="mt-4 space-y-1">
        <p className="text-xs text-gray-500 uppercase">
          {product.tag}
        </p>

        <h3 className="text-sm font-medium line-clamp-2">
          {product.title}
        </h3>

        <div className="flex justify-between items-center text-sm mt-2">
          <span className="font-semibold">
            ₹{product.priceSqft}/Sq. Ft.
          </span>
          <span className="text-gray-600">
            ₹{product.priceBox}/Box
          </span>
        </div>

        {product.discount && (
          <p className="text-green-600 text-xs font-semibold">
            {product.discount}% OFF
          </p>
        )}
      </div>
    </div>
  );
}
