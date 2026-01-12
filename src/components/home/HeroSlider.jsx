import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Walls That Speak\nYour Story.",
    description:
      "Discover our curated wallpaper collection, crafted to elevate every corner beautifully.",
    button: "Explore Our Collection",
    image: "/src/assets/slide1.jpg",
    bg: "bg-[#7a554a]",
  },
  {
    title: "Design Meets\nElegance.",
    description:
      "Premium finishes and textures that transform your interiors.",
    button: "View Designs",
    image: "/src/assets/slide2.jpg",
    bg: "bg-[#6b4c3b]",
  },
  {
    title: "Create Timeless\nSpaces.",
    description:
      "Crafted for modern living with classic appeal.",
    button: "Browse Collection",
    image: "/src/assets/slide3.jpg",
    bg: "bg-[#8b5e4a]",
  },
  {
    title: "Transform Walls\nInto Art.",
    description:
      "Elevate your interiors with our exclusive wallpaper designs.",
      button: "Shop Now",
    image: "/src/assets/slide4.jpg",
    bg: "bg-[#5c3a2e]",
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

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
            <div className="grid grid-cols-1 md:grid-cols-2 h-130">
              {/* LEFT CONTENT */}
              <div
                className={`flex flex-col justify-center px-12 text-white ${slide.bg}`}
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg max-w-md opacity-90">
                  {slide.description}
                </p>
                <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg w-fit">
                  {slide.button}
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">
                <img
                  src={slide.image}
                  alt="Slide"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center"
      >
        <ChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center"
      >
        <ChevronRight />
      </button>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              current === i ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
