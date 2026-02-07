import { useState, useMemo } from "react";
import { Heart, SlidersHorizontal, X, Eye, ShoppingBag, ChevronRight, ChevronDown, Check, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import floorTile from "../../assets/Floor Tile.jpg";
import curtainsImg from "../../assets/curtains.png";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";
import bed1 from "../../assets/bed1.jpg";
import bed2 from "../../assets/bed2.jpg";
import solidColor from "../../assets/Solid color laminates.jpg";
import bgImage from "../../assets/bgimage.jpg"; // Using a nice background for Hero

/* ================= MOCK DATA ================= */
const PRODUCTS = [
  {
    id: 1,
    title: "Royal Velvet Drapes - Midnight Blue",
    image: curtainsImg,
    priceSqft: 180,
    priceBox: 4500,
    discount: 25,
    tag: "CURTAINS",
    inStock: true,
  },
  {
    id: 2,
    title: "Sheer Elegance White Curtains",
    image: slide1,
    priceSqft: 95,
    priceBox: 2100,
    discount: 10,
    tag: "SHEER CURTAINS",
    inStock: true,
  },
  {
    id: 3,
    title: "Modern Geometric Printed Blinds",
    image: slide2,
    priceSqft: 150,
    priceBox: 3200,
    discount: 0,
    tag: "BLINDS",
    inStock: false,
  },
  {
    id: 4,
    title: "Luxurious Silk Cushions - Set of 5",
    image: slide3,
    priceSqft: 322,
    priceBox: 2497,
    discount: 35,
    tag: "CUSHIONS",
    inStock: true,
  },
  {
    id: 5,
    title: "Heavy Linen Blackout Curtains",
    image: slide4,
    priceSqft: 210,
    priceBox: 5200,
    discount: 15,
    tag: "BLACKOUT",
    inStock: true,
  },
  {
    id: 6,
    title: "Scandinavian Texture Fabric Series",
    image: slide5,
    priceSqft: 120,
    priceBox: 1800,
    discount: 0,
    tag: "FABRICS",
    inStock: true,
  },
  {
    id: 7,
    title: "Floral Embroidered Upholstery",
    image: bed1,
    priceSqft: 280,
    priceBox: 6500,
    discount: 50,
    tag: "UPHOLSTERY",
    inStock: false,
  },
  {
    id: 8,
    title: "Classic Wooden Venetian Blinds",
    image: bed2,
    priceSqft: 350,
    priceBox: 7200,
    discount: 20,
    tag: "BLINDS",
    inStock: true,
  },
  {
    id: 9,
    title: "Stylish Tropical Florals Furnishings",
    image: floorTile,
    priceSqft: 85,
    priceBox: 1320,
    discount: 40,
    tag: "TROPICAL FLORALS",
    inStock: true,
  },
  {
    id: 10,
    title: "Pastel Solid Colors Bedsheet Fabric",
    image: solidColor,
    priceSqft: 65,
    priceBox: 950,
    discount: 5,
    tag: "BEDDING",
    inStock: true,
  },
  {
    id: 11,
    title: "Contemporary Abstract Rug",
    image: slide3,
    priceSqft: 400,
    priceBox: 8900,
    discount: 30,
    tag: "RUGS",
    inStock: true,
  },
  {
    id: 12,
    title: "Minimalist Roller Shades - Grey",
    image: slide2,
    priceSqft: 145,
    priceBox: 2800,
    discount: 0,
    tag: "SHADES",
    inStock: true,
  },
];

/* ================= MAIN PAGE ================= */
export default function CurtainsFurnishings() {
  const [sortBy, setSortBy] = useState("popular");
  const [filterOpen, setFilterOpen] = useState(false);

  // FILTER STATES
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  /* FILTER LOGIC */
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category Filter
      if (selectedCategory !== "All") {
        // Simple partial match for demo purposes, e.g. "Blinds" matches "BLINDS" tag
        if (!product.tag.includes(selectedCategory.toUpperCase()) &&
          !selectedCategory.toUpperCase().includes(product.tag)) {
          return false;
        }
      }

      // Stock Filter
      if (inStockOnly && !product.inStock) {
        return false;
      }

      // Price Filter (Box Price)
      if (product.priceBox < priceRange[0] || product.priceBox > priceRange[1]) {
        return false;
      }

      return true;
    });
  }, [selectedCategory, inStockOnly, priceRange]);

  /* SORT LOGIC */
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === "priceLow") return a.priceSqft - b.priceSqft;
      if (sortBy === "priceHigh") return b.priceSqft - a.priceSqft;
      return a.id - b.id;
    });
  }, [filteredProducts, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setInStockOnly(false);
    setPriceRange([0, 10000]);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-[#4A5B6A] selection:text-white pb-20">

      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Curtains and Furnishings Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 flex flex-col justify-center">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-300 mb-6 font-medium tracking-wide animate-fade-in">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
            <span className="text-white">Curtains & Furnishings</span>
          </nav>

          <span className="inline-block py-1 px-3 w-fit rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
            Premium Collection
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '100ms' }}>
            Redefine Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Living Space</span>
          </h1>

          <p className="max-w-xl text-gray-200 text-sm sm:text-lg leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Discover our exclusive range of handcrafted drapes, modern blinds, and premium upholstery fabrics designed to elevate every corner of your home.
          </p>

          <button className="w-fit bg-white text-slate-900 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-sm sm:text-base font-bold tracking-wide hover:bg-amber-400 transition-colors shadow-lg animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            Explore Collection
          </button>
        </div>
      </div>


      {/* ================= CONTENT AREA ================= */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">All Products</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Showing {sortedProducts.length} of {PRODUCTS.length} items
            </p>
          </div>

          {/* Mobile Filter Toggle & Sort */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 shadow-sm transition-all"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 pl-4 pr-10 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-gray-700 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A5B6A]/20 cursor-pointer shadow-sm transition-all"
              >
                <option value="popular">Sort: Popular</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-gray-800 transition-colors" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">

          {/* SIDEBAR (DESKTOP) */}
          <aside className={`hidden lg:block lg:col-span-3 xl:col-span-2 sticky top-24 transition-all duration-300 ${filterOpen ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Filters
                </h3>
                <button onClick={clearFilters} className="text-xs font-semibold text-[#4A5B6A] hover:underline">
                  Clear All
                </button>
              </div>

              <Filters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <section className="col-span-12 lg:col-span-9 xl:col-span-10">

            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">No products found matching your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-[#4A5B6A] font-bold hover:underline">
                  Clear Filters
                </button>
              </div>
            )}

          </section>

        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setFilterOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col animate-slide-in-right">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <h2 className="font-bold text-lg text-gray-900">Filters</h2>
              <button onClick={() => setFilterOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-8">
              <Filters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>

            <div className="p-5 border-t border-gray-100 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
              <button
                onClick={() => setFilterOpen(false)}
                className="w-full bg-[#4A5B6A] text-white py-3.5 rounded-xl font-bold tracking-wide active:scale-95 transition-transform shadow-lg shadow-[#4A5B6A]/20"
              >
                View {sortedProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}

/* ================= FILTER COMPONENTS ================= */
function Filters({ selectedCategory, setSelectedCategory, inStockOnly, setInStockOnly, priceRange = [0, 10000], setPriceRange }) {
  const categories = ["All", "Curtains", "Blinds", "Fabrics", "Upholstery", "Rugs", "Bedding"];

  return (
    <div className="divide-y divide-gray-100 space-y-6">

      {/* Category Filter */}
      <FilterGroup title="Price Range" defaultOpen>
        <div className="space-y-4 pt-4 px-1">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full accent-[#4A5B6A] cursor-pointer"
          />
          <div className="flex items-center justify-between text-xs font-semibold text-gray-600">
            <span>₹0</span>
            <span>Max: ₹{priceRange[1]}</span>
          </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Category" defaultOpen>
        <div className="space-y-1 pt-2">
          {categories.map(opt => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group py-1">
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedCategory === opt ? 'border-[#4A5B6A] bg-[#4A5B6A]' : 'border-gray-300 bg-white group-hover:border-[#4A5B6A]'}`}>
                {selectedCategory === opt && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <input
                type="radio"
                name="category"
                className="hidden"
                checked={selectedCategory === opt}
                onChange={() => setSelectedCategory(opt)}
              />
              <span className={`text-sm transition-colors ${selectedCategory === opt ? 'text-gray-900 font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>
                {opt}
              </span>
            </label>
          ))}
        </div>
      </FilterGroup>

      {/* Mock Color Filter */}
      <FilterGroup title="Color">
        <div className="grid grid-cols-5 gap-2 pt-2">
          {["#FFFFFF", "#000000", "#4A5B6A", "#E5E7EB", "#FCD34D", "#EF4444", "#3B82F6", "#10B981"].map((color, i) => (
            <button key={i} className="w-8 h-8 rounded-full border border-gray-200 shadow-sm hover:scale-110 transition-transform active:scale-95" style={{ backgroundColor: color }} />
          ))}
        </div>
      </FilterGroup>

      <div className="pt-4">
        <label className="flex items-center justify-between cursor-pointer group select-none">
          <span className="text-sm font-medium text-gray-700">In Stock Only</span>
          <div
            onClick={(e) => { e.preventDefault(); setInStockOnly(!inStockOnly); }}
            className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${inStockOnly ? 'bg-[#4A5B6A]' : 'bg-gray-200 group-hover:bg-gray-300'}`}
          >
            <div className={`w-3 h-3 bg-white rounded-full absolute top-1 shadow-sm transition-transform duration-300 ${inStockOnly ? 'left-6' : 'left-1'}`}></div>
          </div>
        </label>
      </div>
    </div>
  );
}

function FilterGroup({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="pt-4 first:pt-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between text-sm font-bold text-gray-900 group">
        {title}
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:text-gray-600 ${isOpen ? '-rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
}

/* ================= PRODUCT CARD COMPONENTS ================= */
function ProductCard({ product }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* IMAGE BADGE */}
      {product.discount > 0 && (
        <div className="absolute top-3 left-3 z-20 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md tracking-wider">
          {product.discount}% OFF
        </div>
      )}

      {/* OUT OF STOCK BADGE */}
      {!product.inStock && (
        <div className="absolute top-3 right-3 z-20 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md tracking-wider">
          SOLD OUT
        </div>
      )}

      {/* WISHLIST BUTTON */}
      <button className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
        <Heart className="w-4 h-4 fill-current" />
      </button>

      {/* IMAGE CONTAINER */}
      <div className={`relative aspect-square overflow-hidden rounded-t-2xl bg-gray-100 ${!product.inStock ? 'grayscale' : ''}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* QUICK VIEW OVERLAY */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-5 py-2.5 rounded-full font-semibold text-xs tracking-wide shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#4A5B6A] hover:text-white flex items-center gap-2">
            <Eye className="w-3.5 h-3.5" />
            QUICK VIEW
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <div className="mb-2">
          <span className="text-[10px] font-bold text-[#4A5B6A] uppercase tracking-wider bg-[#4A5B6A]/5 px-2 py-0.5 rounded-sm">
            {product.tag}
          </span>
        </div>

        <h3 className="font-bold text-gray-900 leading-snug mb-1 line-clamp-2 group-hover:text-[#4A5B6A] transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">₹{product.priceSqft}<span className="text-xs font-normal text-gray-500">/sq.ft</span></span>
            <span className="text-xs text-gray-400">Box price: ₹{product.priceBox}</span>
          </div>

          <button
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${!product.inStock ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-200 text-gray-400 hover:border-[#4A5B6A] hover:bg-[#4A5B6A] hover:text-white'}`}
            disabled={!product.inStock}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
