import slide5 from "../../assets/slide5.jpg";

export default function CalculateYourCost() {
  return (
    <section className="w-full bg-[#EEF1F4]">
      {/* ================= HERO ================= */}
      <div className="
        relative
        h-[65vh] sm:h-[75vh] lg:h-[85vh]
        min-h-130
        w-full overflow-hidden
      ">

        {/* Background Image */}
        <img
          src={slide5}
          alt="Calculate Interior Cost"
          loading="lazy"
          className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-700
            lg:hover:scale-105
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center">
          <div className="
            max-w-xl text-white
            animate-fade-in
          ">
            <h1
              className="
                text-[clamp(28px,6vw,56px)]
                font-semibold leading-tight
                tracking-tight
              "
            >
              Calculate Your <br /> Interior Cost
            </h1>

            <p
              className="
                mt-5 sm:mt-6
                text-[clamp(14px,4vw,18px)]
                text-gray-200
                leading-relaxed
              "
            >
              Get a realistic, material-based estimate for your interiors.
              Every number is backed by real materials, transparent pricing,
              and execution-ready planning.
            </p>

            <button
              className="
                mt-7 sm:mt-8
                bg-black text-white
                px-7 sm:px-9 py-3 sm:py-4
                rounded-lg text-sm sm:text-md font-semibold
                transition-all duration-200
                hover:scale-105 hover:ring-4 hover:ring-black/30
                active:scale-95
              "
            >
              Start Cost Calculation
            </button>
          </div>
        </div>
      </div>

      {/* ================= SUPPORTING STRIP ================= */}

      {/* ===== MOBILE KEYWORDS OVERLAY ===== */}
      <div
        className="
    sm:hidden
    sticky bottom-4 z-20
    mx-auto w-[94%]
    bg-white/85 backdrop-blur-md
    rounded-full shadow-xl
    px-4 py-3
    flex justify-between items-center
    animate-fade-in
  "
      >
        {[
          "Real Materials",
          "Room-wise Clarity",
          "Execution Ready",
        ].map((item) => (
          <span
            key={item}
            className="
        text-sm font-semibold
        whitespace-nowrap
        transition-all duration-200
        hover:scale-105
        active:scale-95
      "
          >
            {item}
          </span>
        ))}
      </div>

      {/* ===== DESKTOP SUPPORTING STRIP (UNCHANGED) ===== */}
      <div
        className="
    hidden sm:grid
    max-w-7xl mx-auto px-4 sm:px-6
    py-12 sm:py-16
    grid-cols-3 gap-10
    text-center
  "
      >
        <div className="transition-transform hover:-translate-y-1">
          <p className="text-lg font-semibold">Real Materials</p>
          <p className="mt-2 text-sm text-gray-600">
            All costs are derived from physically available materials.
          </p>
        </div>

        <div className="transition-transform hover:-translate-y-1">
          <p className="text-lg font-semibold">Room-wise Clarity</p>
          <p className="mt-2 text-sm text-gray-600">
            Know exactly where your budget is being spent.
          </p>
        </div>

        <div className="transition-transform hover:-translate-y-1">
          <p className="text-lg font-semibold">Execution Ready</p>
          <p className="mt-2 text-sm text-gray-600">
            What you approve is exactly what gets delivered.
          </p>
        </div>
      </div>

    </section>
  );
}