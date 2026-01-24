import { lazy, Suspense, useEffect, useState } from "react";
import HeroSlider from "./HeroSlider.jsx";
import { ArrowUp } from "lucide-react";

// Lazy-loaded sections
const Calculatecost = lazy(() => import("./CalculateYourCost.jsx"));
const CategoryButtons = lazy(() => import("./CategoryButtons.jsx"));
const CategoryButtons2 = lazy(() => import("./CategoryButton2.jsx"));
const CostCalculatorSection = lazy(() => import("./CostCalculatorSection.jsx"));
const Footer = lazy(() => import("./Footer.jsx"));

export default function Home() {
  /* ================= SCROLL TO TOP STATE ================= */
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-gray-50 flex flex-col min-h-screen relative">
      {/* HERO (EAGER LOAD) */}
      <section>
        <HeroSlider />
      </section>

      {/* LAZY LOADED CONTENT */}
      <Suspense fallback={<SectionLoader />}>

        {/* CATEGORY SECTIONS */}
        <section className="py-16">
          <CategoryButtons />
        </section>

        <section className="py-16">
          <CategoryButtons2 />
        </section>

        {/* CALCULATE YOUR COST SECTION */}
        <Calculatecost />

        {/* COLLAGE COST CALCULATOR */}
        <section className="py-20">
          <CostCalculatorSection />
        </section>

        {/* FOOTER */}
        <Footer />
      </Suspense>

      {/* ================= SCROLL TO TOP BUTTON ================= */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed bottom-6 right-6 z-50
            w-12 h-12
            rounded-full
            bg-black text-white
            flex items-center justify-center
            shadow-lg
            hover:bg-gray-800
            hover:scale-105
            transition-all duration-300
          "
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </main>
  );
}

function SectionLoader() {
  return (
    <div className="py-20 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
    </div>
  );
}
