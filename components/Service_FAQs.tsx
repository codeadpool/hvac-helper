"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How much does HVAC repair typically cost?",
    answer: "The cost ranges from $100 to over $3,000, depending on the unit type and repair needed. A thermostat replacement may cost $90, while a heat exchanger replacement can go up to $1,500.",
  },
  {
    question: "Do you provide free estimates for repairs or installations?",
    answer: "Yes! We offer free price estimates over the phone. After understanding your project scope, we provide a transparent, upfront quote for our professional HVAC services.",
  },
  {
    question: "Do you handle commercial HVAC repairs and installations?",
    answer: "Absolutely! We offer HVAC solutions for retail stores, restaurants, healthcare facilities, and small businesses. Whether it's installation, maintenance, or repairs, we deliver reliable service.",
  },
  {
    question: "When should I replace my HVAC system instead of repairing it?",
    answer: "Multiply the repair cost by the system’s age. If the total exceeds $5,000, replacing the unit is often the most cost-effective option.",
  },
  {
    question: "How often should I service my HVAC system?",
    answer: "We recommend bi-annual maintenance—once in the spring and again in the fall. This ensures efficiency, prevents failures, and extends system lifespan.",
  },
];

const ServiceFAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 bg-[#f5f5f7] overflow-hidden font-mono">
      {/* Background Accent */}
      <div className="absolute inset-0  opacity-20 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="bold-52 lg:bold-88 text-black mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white text-black p-6 rounded-xl shadow-md cursor-pointer transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-blue-400 text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-3 text-black text-left"
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQs;
