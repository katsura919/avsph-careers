import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-24 bg-[var(--primary)] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.3,
        }}
      />
      {/* Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--accent)]">
            TAKE THE NEXT STEP
          </span>
          <h2 className="text-white mb-4">
            Ready to Start Your{" "}
            <span className="text-[var(--accent)]">VA Career?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait for the opportunity — create it. Join Advance
            Virtual Staff PH today and take the first step towards your dream
            career.
          </p>
          <Link
            href="/apply-here"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <Briefcase size={20} />
            Apply Now — It&apos;s Free
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
