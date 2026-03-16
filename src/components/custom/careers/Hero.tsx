import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import WaveDivider from "@/components/custom/shared/WaveDivider";
const Hero = () => {
  return (
    <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-amber-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/50 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Rocket size={16} className="text-[#FF6B35]" />
            <span className="text-white/90 text-sm font-medium">
              Start Your VA Career Today
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Become a{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-yellow-400">
              Virtual Assistant
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover a rewarding career working remotely for international
            clients. No commute, no limits — just your skills and our support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply-here">
              <Button
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#e85a28] text-white h-13 px-8 text-base font-semibold rounded-xl shadow-lg shadow-orange-500/25"
              >
                Apply Now
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <a href="#what-is-va">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-cyan-500 text-white hover:bg-white/50 h-13 px-8 text-base font-semibold rounded-xl"
              >
                Learn More
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <WaveDivider color="white" />
    </section>
  );
};

export default Hero;
