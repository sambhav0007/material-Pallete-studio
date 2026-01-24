import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    answer:"After you place an order, our team will contact you over the phone to confirm the details within a specific timeframe. We will verify the order and discuss payment options.",
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
    <section className="bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-4 uppercase">
            Help & Support
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and
            support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
