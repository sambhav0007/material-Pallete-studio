import { lazy, Suspense } from "react";
import HeroSlider from "./HeroSlider.jsx";

// Lazy-loaded sections
const Calculatecost = lazy(() => import("./CalculateYourCost.jsx"));
const CategoryButtons = lazy(() => import("./CategoryButtons.jsx"));
const CategoryButtons2 = lazy(() => import("./CategoryButton2.jsx"));
const CostCalculatorSection = lazy(() => import("./CostCalculatorSection.jsx"));
const Footer = lazy(() => import("./Footer.jsx"));

export default function Home() {
  return (
    <main className="bg-gray-50 flex flex-col min-h-screen">
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
