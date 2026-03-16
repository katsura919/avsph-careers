import { CheckCircle2, Send } from "lucide-react";
import { motion } from "motion/react";
import WaveDivider from "@/components/custom/shared/WaveDivider";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-0 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-125 h-125 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <CheckCircle2 size={16} className="text-[#FF6B35]" />
            <span className="text-white/90 text-sm font-medium">
              Ready to Join?
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Requirements to Become a{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-yellow-400">
              Virtual Assistant
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Make sure you meet these requirements before applying. We&apos;re
            looking for dedicated, skilled professionals ready to excel in a
            remote work environment.
          </p>
          <Link href="/apply-here">
            <Button className="bg-[#FF6B35] hover:bg-[#e55a28] text-white px-8 h-12 text-base font-semibold rounded-xl">
              Check Open Positions
              <Send className="ml-2" size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>

      <WaveDivider color="white" />
    </section>
  );
};

export default Hero;
