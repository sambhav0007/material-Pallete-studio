import { Star } from "lucide-react";
import reviewImg from "../../assets/Reviewimg.jpg";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7f1e7] py-16 sm:py-20">
      <div className="
        max-w-7xl mx-auto px-4 sm:px-6
        grid grid-cols-1 lg:grid-cols-3
        gap-14 lg:gap-12 items-center
      ">
        
        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <h2 className="
            text-3xl sm:text-4xl
            font-semibold leading-snug text-gray-900
            tracking-tight
          ">
            <span className="block animate-fade-in">
              What Makes
            </span>
            <span className="block animate-fade-in delay-100">
              Material Pallete Studio
            </span>
            <span className="block animate-fade-in delay-200">
              the Right Choice?
            </span>
          </h2>
        </div>

        {/* CENTER TESTIMONIAL CARD */}
        <div className="flex justify-center">
          <div className="
            bg-white rounded-xl shadow-lg
            w-full max-w-sm overflow-hidden
            transition-all duration-300
            hover:shadow-xl hover:-translate-y-1
          ">
            
            {/* Image */}
            <img
              src={reviewImg}
              alt="Customer Interior"
              className="
                w-full
                aspect-4/3 sm:aspect-3/2
                object-cover
              "
            />

            {/* Content */}
            <div className="p-5 sm:p-6">
              <p className="
                text-sm text-gray-700 leading-relaxed mb-4
                relative
              ">
                <span className="absolute -left-2 top-0 text-xl opacity-20">“</span>
                I wholeheartedly recommend Material Depot to all architects
                and designers. Found a brand, got quotes, ordered hassle-free,
                and smooth delivery. Impressive!
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">Ankita Jeswal</p>
                  <p className="text-xs text-gray-500">Home Owner</p>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 pb-4">
              <span className="w-6 h-1 bg-gray-900 rounded-full"></span>
              <span className="w-2 h-1 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-1 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="
          flex flex-row lg:flex-col
          justify-between lg:justify-end
          gap-8 sm:gap-12
          text-gray-900
          text-center lg:text-right
        ">
          <div className="transition-transform hover:scale-105">
            <h3 className="text-4xl sm:text-5xl font-bold">10K+</h3>
            <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
          </div>

          <div className="transition-transform hover:scale-105">
            <h3 className="text-4xl sm:text-5xl font-bold">100K+</h3>
            <p className="text-sm text-gray-600 mt-1 text-center lg:text-right">
              Designs
            </p>
          </div>

          <div className="transition-transform hover:scale-105">
            <h3 className="text-4xl sm:text-5xl font-bold">1K+</h3>
            <p className="text-sm text-gray-600 mt-1">Architects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
