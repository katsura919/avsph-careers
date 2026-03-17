"use client";
import { Eye, Target } from "lucide-react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const VisionMission = () => {
  return (
    <section className="py-24 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
            WHAT DRIVES US
          </span>
          <h2 className="text-[var(--foreground)] mb-4">
            Our <span className="text-[var(--accent)]">Vision & Mission</span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto text-lg">
            The guiding principles behind everything we do for our VAs and community.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="group h-full bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              {/* Accent top strip */}
              <div className="h-1.5 bg-[var(--accent)]" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <Eye size={28} className="text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[var(--foreground)] mb-4">Our Vision</h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  To empower Filipinos in the BPO Industry with exceptional
                  opportunities to the world, equipping them with the
                  knowledge they need to succeed in their careers and be
                  worthy of world-class opportunities.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="group h-full bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              {/* Accent top strip */}
              <div className="h-1.5 bg-[var(--primary)]" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] transition-colors duration-300">
                  <Target size={28} className="text-[var(--primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[var(--foreground)] mb-4">Our Mission</h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  Advocate for Virtual Assistants and aim at utilizing team
                  culture within business by offering dedicated support for
                  Virtual Assistants based in the Philippines, fostering
                  growth and professional excellence.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
