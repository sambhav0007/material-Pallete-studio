export default function CalculateYourCost() {
  return (
    <section className="w-full bg-[#f6f1e8]">
      <div className="relative h-[85vh] min-h-162.5 w-full overflow-hidden">
        
        {/* Background Image */}
        <img
          src="/src/assets/slide5.jpg"
          alt="Calculate Interior Cost"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-[clamp(36px,4.5vw,56px)] font-semibold leading-tight">
              Calculate Your <br /> Interior Cost
            </h1>

            <p className="mt-6 text-[clamp(15px,1.3vw,18px)] text-gray-200 leading-relaxed">
              Get a realistic, material-based estimate for your interiors.
              Every number is backed by real materials, transparent pricing,
              and execution-ready planning.
            </p>

            <button className="mt-8 bg-black text-white px-9 py-4 rounded-lg text-md font-semibold hover:bg-gray-900 transition">
              Start Cost Calculation
            </button>
          </div>
        </div>
      </div>

      {/* SUPPORTING STRIP */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        <div>
          <p className="text-lg font-semibold">Real Materials</p>
          <p className="mt-2 text-sm text-gray-600">
            All costs are derived from physically available materials.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold">Room-wise Clarity</p>
          <p className="mt-2 text-sm text-gray-600">
            Know exactly where your budget is being spent.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold">Execution Ready</p>
          <p className="mt-2 text-sm text-gray-600">
            What you approve is exactly what gets delivered.
          </p>
        </div>
      </div>
    </section>
  );
}
