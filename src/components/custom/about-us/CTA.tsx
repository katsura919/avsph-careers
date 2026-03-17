"use client";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

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
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent)]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm mx-auto">
            <Briefcase size={16} className="text-[var(--accent)]" />
            <span className="text-white/90 text-sm font-semibold uppercase tracking-widest">
              Join Our Team
            </span>
          </div>
          <h2 className="text-white mb-4">
            We Love Working at{" "}
            <span className="text-[var(--accent)]">AVS</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            We believe that you will too. Start your remote career journey with
            us today — find opportunities, grow your skills, and join a
            community that truly cares.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply-here">
              <button className="btn-primary inline-flex items-center gap-2">
                See All Open Positions
                <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/requirements">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-[var(--primary)] transition-all duration-300">
                View Requirements
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
