"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { faqs } from "@/data/faqs/faqs.data";

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  openIndex === i
                    ? "border-[#024466]/20 shadow-md"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-[#024466] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#024466] shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQList;
