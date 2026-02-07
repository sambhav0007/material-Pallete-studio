import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "../home/Footer";

const faqs = [
  {
    question: "What services does Material Palette offer?",
    answer:
      "We specialize in providing interior designing solutions for residential and commercial spaces.",
  },
  {
    question: "How should I do my interior design projects?",
    answer:
      "we specialize in Proving you a better user experience and provide solutions which help in making your interior design successful.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes, absolutely. We work with startups, SMEs, and enterprises, offering scalable solutions tailored to your business stage and goals.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "After you place an order, our team will contact you over the phone to confirm the details within a specific timeframe. We will verify the order and discuss payment options.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our team specializes in modern technologies such as React, Node.js, NestJS, Next.js, Java, Python, cloud platforms, and scalable backend architectures.",
  },
  {
    question: "how can i order materials?",
    answer:
      "You can order materials directly through our shops and decide the working of interior design project with us.",

  },
  {
    question: "Can you help with material selection and sourcing?",
    answer:
      "yes we help in providing best solution related to your every branch and aspect in interor designing.",
  },
  {
    question: "what is your return policy?",
    answer:
      "Visit store for that further and further inspection of goods.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <section className="bg-gray-50 px-4 py-12 md:py-24 min-h-screen">
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-3 md:mb-4">
              Help & Support
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our services, process, and support.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    group bg-white rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300
                    ${isOpen ? "shadow-lg ring-1 ring-black/5" : "shadow-sm hover:shadow-md"}
                  `}
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-5 py-4 md:px-6 md:py-5 text-left focus:outline-none"
                  >
                    <span
                      className={`
                        text-base md:text-lg font-medium transition-colors duration-200 pr-4
                        ${isOpen ? "text-blue-600" : "text-gray-900 group-hover:text-blue-600"}
                      `}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`
                        flex items-center justify-center shrink-0 w-8 h-8 rounded-full transition-all duration-300
                        ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600"}
                      `}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  {/* Answer with Smooth Transition */}
                  <div
                    className={`
                      grid overflow-hidden transition-all duration-300 ease-in-out
                      ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5 md:pb-6" : "grid-rows-[0fr] opacity-0"}
                    `}
                  >
                    <div className="min-h-0">
                      <div className="px-5 md:px-6 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-3 md:pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
