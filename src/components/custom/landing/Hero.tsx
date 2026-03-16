import { motion } from "motion/react";
import Image from "next/image";
import WaveDivider from "@/components/custom/shared/WaveDivider";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Star,
  Zap,
  Users,
  Building2,
  BarChart3,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-0 overflow-hidden bg-white">
      {/* Dot grid background */}
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
        {/* Centered headline content */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          {/* Rating badge */}
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
              Advanced Virtual Staff Careers
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-[var(--foreground)] leading-tight mb-5"
          >
            Hire Top Filipino
            <span className="text-[var(--primary)]">
              {" "}
              Virtual Assistants
            </span>{" "}
            With Advanced Virtual Staff
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--muted)] text-base md:text-lg leading-relaxed mb-8"
          >
            We connect businesses in the US, UK, Canada, Australia, and New
            Zealand with highly skilled Filipino remote professionals, fast,
            reliable, and ready to work.
          </motion.p>
        </div>

        {/* Image section with floating stat cards */}
        <div className="relative flex justify-center items-start md:items-end min-h-[320px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[700px]">
          {/* Main hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full px-2 sm:px-4 md:px-0 md:w-[94%] -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
          >
            <Image
              src="/assets/hero-image.png"
              alt="A diverse team of professionals representing virtual assistant talent"
              width={1339}
              height={768}
              priority
              className="relative left-1/2 -translate-x-1/2 w-[168%] sm:w-[136%] md:w-full max-w-none h-auto object-contain"
            />
          </motion.div>

          {/* Floating stat card — bottom-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-32 left-4 lg:left-8 z-20 hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)]/15 flex items-center justify-center shrink-0">
              <Zap size={18} className="text-[var(--primary)]" />
            </div>
            <div>
              <p className="text-[var(--foreground)] font-bold text-sm">
                2x Faster
              </p>
              <p className="text-[var(--muted)] text-xs mt-0.5">
                VA Placement Process
              </p>
            </div>
          </motion.div>

          {/* Floating stat card — mid-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute top-[30%] left-2 lg:left-6 z-20 hidden lg:flex items-center gap-3 bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
              <Users size={18} className="text-[var(--primary-dark)]" />
            </div>
            <div>
              <p className="text-[var(--foreground)] font-bold text-sm">500+</p>
              <p className="text-[var(--muted)] text-xs mt-0.5">
                Active VA Roles Listed
              </p>
            </div>
          </motion.div>

          {/* Floating stat card — top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute top-2 right-4 lg:right-10 z-20 hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--secondary-light)]/15 flex items-center justify-center shrink-0">
              <Building2 size={18} className="text-[var(--secondary)]" />
            </div>
            <div>
              <p className="text-[var(--foreground)] font-bold text-sm">
                1,000+
              </p>
              <p className="text-[var(--muted)] text-xs mt-0.5 max-w-[130px] leading-snug">
                Global Client Companies Use Our Platform
              </p>
            </div>
          </motion.div>

          {/* Floating stat card — bottom-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-20 right-2 lg:right-6 z-20 hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-md border border-gray-100 px-4 py-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center shrink-0">
              <BarChart3 size={18} className="text-[var(--secondary-light)]" />
            </div>
            <div>
              <p className="text-[var(--foreground)] font-bold text-sm">
                250,000+
              </p>
              <p className="text-[var(--muted)] text-xs mt-0.5">
                Monthly Site Visits
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
