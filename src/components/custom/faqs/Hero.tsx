"use client";
import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";
import WaveDivider from "@/components/custom/shared/WaveDivider";

const Hero = () => {
  return (
    <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <HelpCircle size={16} className="text-[#FF6B35]" />
            <span className="text-white/90 text-sm font-medium">
              Got Questions?
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-yellow-400">
              Questions
            </span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Everything you need to know about working with Advance Virtual Staff
            PH. Can&apos;t find your answer? Reach out to us!
          </p>
        </motion.div>
      </div>

      <WaveDivider color="white" />
    </section>
  );
};

export default Hero;
