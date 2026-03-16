"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveDivider from "@/components/custom/shared/WaveDivider";
import { heroStats } from "@/data/for-clients/for-clients.data";

const Hero = () => {
  return (
    <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Building2 size={16} className="text-[#FF6B35]" />
              <span className="text-white/90 text-sm font-medium">
                For Businesses & Entrepreneurs
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Hire World-Class{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-yellow-400">
                Virtual Assistants
              </span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              Scale your business with pre-vetted, trained, and dedicated
              Filipino Virtual Assistants. Save time, reduce costs, and focus on
              what matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/apply-here">
                <Button
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#e85a28] text-white h-13 px-8 text-base font-semibold rounded-xl shadow-lg shadow-orange-500/25"
                >
                  Hire a VA
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-cyan-500 text-white hover:bg-white/50 h-13 px-8 text-base font-semibold rounded-xl"
                >
                  View Services
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-2xl p-5 text-center"
                  >
                    <p className="text-3xl font-bold text-white">
                      {stat.number}
                    </p>
                    <p className="text-blue-200 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WaveDivider color="white" />
    </section>
  );
};

export default Hero;
