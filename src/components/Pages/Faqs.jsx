import React from "react";

/* ================= MAIN PAGE ================= */
export default function Faqs() {
  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-gray-700 space-y-8">
        <h1 className="text-3xl font-semibold text-center">
          Frequently Asked Questions
        </h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Question</th>
              <th className="border p-2 text-left">Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">What materials do you offer?</td>
              <td className="border p-2">We offer a wide range of high-quality interior materials including fabrics, wallpapers, flooring options, and decorative panels.</td>
            </tr>
            <tr>
              <td className="border p-2">How can I get a quote?</td>
              <td className="border p-2">You can request a quote by contacting us through our contact page or by calling our customer service number.</td>
            </tr>
            <tr>
              <td className="border p-2">Do you provide installation services?</td>
              <td className="border p-2">Yes, we offer professional installation services for all our products. Please contact us for more details.</td>
            </tr>
          </tbody>
        </table>            
        </div>
    </section>
  );
}