import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Walls That Speak\nYour Story.",
    description:
      "Discover our curated wallpaper collection, crafted to elevate every corner beautifully.",
    button: "Explore Our Collection",
    image: "/src/assets/slide1_.jpg",
    bg: "bg-[#7a554a]",
  },
  {
    title: "Design Meets\nElegance.",
    description:
      "Premium finishes and textures that transform your interiors.",
    button: "View Designs",
    image: "/src/assets/slide2_.jpg",
    bg: "bg-[#6b4c3b]",
  },
  {
    title: "Create Timeless\nSpaces.",
    description:
      "Crafted for modern living with classic appeal.",
    button: "Browse Collection",
    image: "/src/assets/slide3_.jpg",
    bg: "bg-[#8b5e4a]",
  },
  {
    title: "Transform Walls\nInto Art.",
    description:
      "Elevate your interiors with our exclusive wallpaper designs.",
    button: "Shop Now",
    image: "/src/assets/slide4_.jpg",
    bg: "bg-[#5c3a2e]",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full shrink-0">
            {/* MOBILE STACK | DESKTOP GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-130">

              {/* IMAGE (MOBILE FIRST) */}
              <div className="relative aspect-4/5 md:aspect-auto md:h-full">
                <img
                  src={slide.image}
                  alt="Slide"
                  className="w-full h-full object-cover"
                />

                {/* MOBILE TEXT OVERLAY */}
                <div className="absolute inset-0 md:hidden bg-black/30 flex flex-col justify-end p-6 text-white">
                  <h1 className="text-2xl font-bold whitespace-pre-line">
                    {slide.title}
                  </h1>

                  <p className="mt-2 text-sm opacity-90">
                    {slide.description}
                  </p>

                  <button
                    className="
                      mt-4 text-black px-5 py-2 rounded-lg w-fit
                      transition-all duration-200
                      hover:scale-105 active:scale-95
                    "
                  >
                    {slide.button}
                  </button>
                </div>
              </div>

              {/* LEFT CONTENT (DESKTOP ONLY) */}
              <div
                className={`hidden md:flex flex-col justify-center px-12 py-12 text-white ${slide.bg}`}
              >
                <h1 className="text-5xl font-bold leading-tight whitespace-pre-line">
                  {slide.title}
                </h1>

                <p className="mt-4 text-lg max-w-md opacity-90">
                  {slide.description}
                </p>

                <button
                  className="
                    mt-6 bg-black text-white px-6 py-3 rounded-lg w-fit
                    transition-all duration-200
                    hover:scale-105 hover:ring-4 hover:ring-black/30
                    active:scale-95
                  "
                >
                  {slide.button}
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 
                   bg-white w-9 h-9 md:w-10 md:h-10 rounded-full shadow 
                   flex items-center justify-center hover:scale-105 transition"
      >
        <ChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 
                   bg-white w-9 h-9 md:w-10 md:h-10 rounded-full shadow 
                   flex items-center justify-center hover:scale-105 transition"
      >
        <ChevronRight />
      </button>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition
              ${current === i ? "bg-black scale-110" : "bg-gray-300"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
