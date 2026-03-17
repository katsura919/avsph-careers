"use client";
import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { faqs } from "@/data/faqs/faqs.data";

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-[var(--background-alt)] overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10, 92, 135, 0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-4 shadow-sm">
            <MessageCircleQuestion size={14} className="text-[var(--primary)]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
              FAQs
            </span>
          </div>
          <h2 className="text-[var(--foreground)]">
            Common{" "}
            <span className="text-[var(--accent)]">Questions</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.04}>
              <div
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "border-[var(--primary)]/30 shadow-lg"
                    : "border-gray-100 hover:border-[var(--primary)]/20 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <span
                    className={`font-semibold pr-4 transition-colors duration-200 ${
                      openIndex === i
                        ? "text-[var(--primary)]"
                        : "text-[var(--foreground)] group-hover:text-[var(--primary)]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === i
                        ? "bg-[var(--primary)] text-white"
                        : "bg-gray-100 text-[var(--muted)] group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)]"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 border-t border-gray-50">
                        <p className="text-[var(--muted)] leading-relaxed pt-4">
                          {faq.a}
                        </p>
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
