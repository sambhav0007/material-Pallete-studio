import { Home, LayoutGrid, Package } from "lucide-react";

export default function CostCalculatorSection() {
  return (
    <section className="w-full bg-[#f6f1e8] py-16 sm:py-20">

      {/* ===== SECTION TITLE ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
          <span className="text-gray-800">
            Experience design with
          </span>{" "}
          <span
            className="
              font-bold bg-linear-to-r
              from-yellow-500 to-yellow-300
              bg-clip-text text-transparent
            "
          >
            Real Materials
          </span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Discover how Material Palette Studio simplifies interior decisions through expertise, technology, and transparency. <br />
        </p>
      </div>

      {/* ===== COLLAGE FEATURE STRIP ===== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* TILE */}
          {[
            {
              img: "/src/assets/Wooden Laminates.jpg",
              title: "Personalized Design Consultations by Experts",
              cta: "Book Consultation",
            },
            {
              img: "/src/assets/bed2.jpg",
              title: "Exclusive In-store Offers And Discounts",
              cta: "View Offers",
            },
            {
              img: "/src/assets/slide2.jpg",
              title: "Trusted by 10,000+ Homeowners & Designers",
              cta: "See Projects",
            },
            {
              img: "/src/assets/feature-installation.jpg",
              title: "Door-step delivery & installation support",
              cta: "Know More",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                relative group rounded-xl overflow-hidden
                transition-all duration-300
                hover:scale-[1.03]
                md:nth-1:-mt-12
                md:nth-2:mt-6
                md:nth-3:-mt-6
                md:nth-4:mt-12
              "
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt=""
                className="
                  w-full h-52 sm:h-56 object-cover
                  border border-black/10
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-t from-black/70 via-black/30 to-transparent
                  opacity-100 sm:opacity-0
                  sm:group-hover:opacity-100
                  transition-opacity duration-300
                  flex flex-col justify-end p-4
                "
              >
                <button
                  className="
                    bg-white text-black text-sm font-medium
                    px-4 py-2 rounded-md w-fit
                    hover:bg-yellow-300 transition
                  "
                >
                  {item.cta}
                </button>
              </div>

              {/* TITLE */}
              <p className="mt-3 text-sm sm:text-md font-medium text-gray-800">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
