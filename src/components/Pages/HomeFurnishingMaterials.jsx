import { useState } from "react";
import { Heart, SlidersHorizontal, X } from "lucide-react";
import { Link } from "react-router-dom";

/* ================= MOCK DATA (REPLACE WITH API LATER) ================= */
const PRODUCTS = [
  {
    id: 1,
    title: "Tropical Wall Tile TL 05553 Vivid Fusion",
    image: "../assets/Floor tile.jpg",
    priceSqft: 85,
    priceBox: 1320,
    discount: 40,
    tag: "TROPICAL FLORALS",
  },
  {
    id: 2,
    title: "Hexagonal Wall & Floor Tile TL 05273 B",
    image: "../assets/Floor tile.jpg",
    priceSqft: 109,
    priceBox: 2730,
    discount: 40,
    tag: "HEXAGONAL TILES",
  },
  {
    id: 3,
    title: "Moroccan Floor & Wall Tile TL 05053",
    image: "../assets/Floor tile.jpg",
    priceSqft: 322,
    priceBox: 2497,
    discount: 35,
    tag: "MOROCCANS",
  },
];

/* ================= MAIN PAGE ================= */
export default function HomeFurnishingMaterials() {
  const [sortBy, setSortBy] = useState("popular");
  const [filterOpen, setFilterOpen] = useState(false);

  /* SORT LOGIC */
  const sortedProducts = [...PRODUCTS].sort((a, b) => {
    if (sortBy === "priceLow") return a.priceSqft - b.priceSqft;
    if (sortBy === "priceHigh") return b.priceSqft - a.priceSqft;
    return a.id - b.id; // Popular default
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

      {/* ================= BREADCRUMB ================= */}
      <p className="text-sm text-gray-500 mb-3">
        <Link to="/" className="hover:underline hover:text-black transition">
          Home
        </Link>{" "}
        / Home Furnishing Materials
      </p>

      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold">
          Home Furnishing Materials
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
      <div className="grid grid-cols-12 gap-8">

        {/* ================= FILTER SIDEBAR (DESKTOP) ================= */}
        <aside className="hidden lg:block col-span-3 space-y-4">
          <Filters />
        </aside>

        {/* ================= PRODUCT GRID ================= */}
        <section className="col-span-12 lg:col-span-9">
          <p className="text-sm text-gray-500 mb-4">
            Showing 1–{sortedProducts.length} of 10094 products
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <FilterSection title="Price Range" />
      <FilterSection title="Category" />
      <FilterSection title="Series" />
      <FilterSection title="Color" />
      <FilterSection title="Finish" />
      <FilterSection title="Approx Size (mm)" />
      <FilterSection title="Thickness (mm)" />
      <FilterSection title="Material" />
      <FilterSection title="Application" />

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
      {/* Wishlist */}
      <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
        <Heart className="w-4 h-4" />
      </button>

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
