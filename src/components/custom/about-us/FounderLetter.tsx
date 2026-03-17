"use client";
import { founderLetter } from "@/data/about-us/about-us.data";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Quote } from "lucide-react";

const FounderLetter = () => {
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
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
              A MESSAGE FOR YOU
            </span>
            <h2 className="text-[var(--foreground)]">
              A Letter From{" "}
              <span className="text-[var(--accent)]">Our Founder</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative bg-[var(--primary)] text-white rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative glows */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--accent)] rounded-full opacity-15 blur-2xl" />
            <div className="absolute right-8 top-8 w-20 h-20 bg-white rounded-full opacity-5 blur-2xl" />

            {/* Dot grid inside card */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 1.5px, transparent 1.5px)",
                backgroundSize: "28px 28px",
                opacity: 0.3,
              }}
            />

            <div className="relative z-10">
              <Quote className="w-10 h-10 text-[var(--accent)] mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-6 text-white">
                {founderLetter.salutation}
              </h3>
              <div className="space-y-5 text-white/70 leading-relaxed text-base md:text-lg">
                {founderLetter.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm font-medium">
                    {founderLetter.signature.closing}
                  </p>
                  <p className="text-[var(--accent)] text-2xl font-bold mt-1">
                    {founderLetter.signature.name}
                  </p>
                  <p className="text-white/50 text-sm">
                    {founderLetter.signature.title}
                  </p>
                </div>
                <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center shadow-lg shadow-[var(--accent)]/30">
                  <span className="text-white font-bold text-xl">
                    {founderLetter.signature.initials}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FounderLetter;
