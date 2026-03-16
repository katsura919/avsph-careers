import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const CTA = () => {
  return (
    <section className="py-20 bg-linear-to-br from-[#024466] to-[#0891b2] relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF6B35]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Meet All The Requirements?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Great! Take the next step and submit your application. Our team
            will review your profile and reach out if you're a good fit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply-here">
              <Button className="bg-[#FF6B35] hover:bg-[#e55a28] text-white px-8 h-12 text-base font-semibold rounded-xl">
                Apply Now
                <Send className="ml-2" size={18} />
              </Button>
            </Link>
            <Link href="/faqs">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#024466] backdrop-blur-sm px-8 h-12 text-base font-semibold rounded-xl"
              >
                View FAQs
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
