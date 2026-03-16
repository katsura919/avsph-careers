"use client";
import { motion } from "motion/react";
import { BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import WaveDivider from "@/components/custom/shared/WaveDivider";

interface HeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const Hero = ({ searchQuery, onSearchChange }: HeroProps) => {
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
            <BookOpen size={16} className="text-[#FF6B35]" />
            <span className="text-white/90 text-sm font-medium">
              Insights & Resources
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AVS{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-yellow-400">
              Blog
            </span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Tips, guides, and success stories to help you build a thriving VA
            career. Stay updated with the latest in remote work.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
            />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-11 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
            />
          </div>
        </motion.div>
      </div>

      <WaveDivider color="white" />
    </section>
  );
};

export default Hero;
