import { Home, LayoutGrid, Package } from "lucide-react";

export default function CostCalculatorSection() {
  return (
    <section className="w-full bg-[#f6f1e8] py-20">
      {/* ===== HERO COLLAGE ===== */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative h-520px rounded-2xl overflow-hidden">
          
          {/* Background Image */}
          <img
            src="/src/assets/Floor tile.jpg"
            alt="Interior"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

          {/* Floating Left Card */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-8 rounded-xl max-w-md shadow-xl">
            <h2 className="font-semibold text-[clamp(26px,3.5vw,40px)] leading-tight">
              Calculate your <br /> interior cost
            </h2>

            <p className="mt-4 text-sm text-gray-600">
              Get an instant estimate for your dream interiors in just a few clicks.
            </p>

            <button className="mt-6 bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition">
              Calculate Now
            </button>
          </div>

          {/* Right Obscured Panel */}
          <div className="absolute right-8 bottom-10 bg-black/65 backdrop-blur-md text-white p-8 rounded-xl w-340px shadow-lg">
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <Home className="w-5 h-5 mt-1" />
                <span>Choose your BHK type</span>
              </li>

              <li className="flex items-start gap-4">
                <LayoutGrid className="w-5 h-5 mt-1" />
                <span>Pick the rooms to be designed</span>
              </li>

              <li className="flex items-start gap-4">
                <Package className="w-5 h-5 mt-1" />
                <span>Pick a package as per preference</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== COLLAGE FEATURE STRIP ===== */}
      <div className="relative max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Tile 1 */}
          <div className="relative md:-mt-12">
            <img
              src="/src/assets/wooden laminate.jpg"
              className="w-full h-56 object-cover rounded-xl"
              alt=""
            />
            <p className="mt-3 text-sm font-medium">
              Personalized Design Consultations by Experts
            </p>
          </div>

          {/* Tile 2 */}
          <div className="relative md:mt-6">
            <img
              src="/src/assets/feature-offers.jpg"
              className="w-full h-56 object-cover rounded-xl"
              alt=""
            />
            <p className="mt-3 text-sm font-medium">
              Exclusive In-store Offers And Discounts
            </p>
          </div>

          {/* Tile 3 */}
          <div className="relative md:-mt-6">
            <img
              src="/src/assets/feature-trusted.jpg"
              className="w-full h-56 object-cover rounded-xl"
              alt=""
            />
            <p className="mt-3 text-sm font-medium">
              Trusted by 10,000+ Homeowners & Designers
            </p>
          </div>

          {/* Tile 4 */}
          <div className="relative md:mt-12">
            <img
              src="/src/assets/feature-installation.jpg"
              className="w-full h-56 object-cover rounded-xl"
              alt=""
            />
            <p className="mt-3 text-sm font-medium">
              Door-step delivery & installation support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
