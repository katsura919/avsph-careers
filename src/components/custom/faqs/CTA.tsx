"use client";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
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

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--accent)]">
            STILL HAVE QUESTIONS?
          </span>
          <h2 className="text-white mb-4">
            We&apos;re Here to{" "}
            <span className="text-[var(--accent)]">Help</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Our team is always ready to assist. Reach out or start your
            application today — we&apos;ll get back to you quickly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply-here" className="btn-primary inline-flex items-center gap-2">
              Apply Now
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:admin@advancedvirtualstaff.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-[var(--primary)] transition-all duration-300"
            >
              <Mail size={18} />
              Contact Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
