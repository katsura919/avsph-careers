import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Send } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10, 92, 135, 0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
            READY TO APPLY?
          </span>
          <h2 className="text-[var(--foreground)] mb-4">
            Meet All The{" "}
            <span className="text-[var(--accent)]">Requirements?</span>
          </h2>
          <p className="text-[var(--muted)] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Great! Take the next step and submit your application. Our team
            will review your profile and reach out if you&apos;re a good fit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply-here" className="btn-primary inline-flex items-center gap-2">
              Apply Now
              <Send size={18} />
            </Link>
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-[var(--primary)]/30 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              View FAQs
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
