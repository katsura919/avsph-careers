import { CheckCircle2, Send } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      {/* Dot grid — matches landing hero */}
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
              What You Need to Qualify
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-[var(--foreground)] leading-tight mb-5"
          >
            Requirements to Become a{" "}
            <span className="text-[var(--primary)]">Virtual Assistant</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--muted)] text-base md:text-lg leading-relaxed mb-8"
          >
            Make sure you meet these requirements before applying. We&apos;re
            looking for dedicated, skilled professionals ready to excel in a
            remote work environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/apply-here" className="btn-primary inline-flex items-center gap-2">
              Check Open Positions
              <Send size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
