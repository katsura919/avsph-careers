"use client";
import { motion } from "motion/react";
import { Globe } from "lucide-react";
import WaveDivider from "@/components/custom/shared/WaveDivider";

const Hero = () => {
  return (
    <section className="relative pt-32 bg-[var(--primary)] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />

      {/* Glow decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px]"
        />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Globe size={16} className="text-[var(--accent)]" />
            <span className="text-white/90 text-sm font-semibold uppercase tracking-widest">
              Our Story
            </span>
          </div>
          <h1 className="text-white mb-6">
            About{" "}
            <span className="text-[var(--accent)]">
              Advance Virtual Staff PH
            </span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Empowering Filipino Virtual Assistants to build meaningful careers
            and achieve their full potential in the global remote workforce.
          </p>
        </motion.div>
      </div>

      <WaveDivider color="white" />
    </section>
  );
};

export default Hero;
