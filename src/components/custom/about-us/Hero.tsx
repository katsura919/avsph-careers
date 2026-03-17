"use client";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      {/* Dot grid background — matches landing hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10, 92, 135, 0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm"
          >
            <Star
              size={14}
              className="text-[var(--primary-light)] fill-[var(--primary-light)]"
            />
            <span className="text-gray-600 text-sm font-medium">
              Our Story & Mission
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-[var(--foreground)] leading-tight mb-5"
          >
            About{" "}
            <span className="text-[var(--primary)]">
              Advance Virtual Staff PH
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--muted)] text-base md:text-lg leading-relaxed"
          >
            Empowering Filipino Virtual Assistants to build meaningful careers
            and achieve their full potential in the global remote workforce.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
