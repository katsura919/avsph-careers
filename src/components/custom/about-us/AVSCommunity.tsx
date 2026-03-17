"use client";
import { Users, CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { communityFeatures } from "@/data/about-us/about-us.data";

const AVSCommunity = () => {
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm mx-auto">
            <Users size={16} className="text-[var(--accent)]" />
            <span className="text-white/90 text-sm font-semibold uppercase tracking-widest">
              AVS Hub Community
            </span>
          </div>
          <h2 className="text-white mb-4">
            Join Our{" "}
            <span className="text-[var(--accent)]">Thriving Community</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            A community of empowered Virtual Assistants & partners who help each
            other succeed. With over 7,000 members sharing expertise every day!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
            {communityFeatures.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-left">
                <CheckCircle2
                  size={18}
                  className="text-[var(--accent)] shrink-0"
                />
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xl font-bold text-white mb-8">
            ✨ 7,326 Members and Counting ✨
          </p>

          <a
            href="#"
            className="btn-primary inline-flex items-center gap-2"
          >
            Join Our Community
            <ArrowRight size={18} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AVSCommunity;
