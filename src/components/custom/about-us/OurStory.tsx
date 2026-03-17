"use client";
import { storyHighlights, storyStats } from "@/data/about-us/about-us.data";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Trophy } from "lucide-react";

const OurStory = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10, 92, 135, 0.15) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
              OUR STORY
            </span>
            <h2 className="text-[var(--foreground)] mb-6">
              Find Your Next{" "}
              <span className="text-[var(--accent)]">Dream Job</span>
            </h2>
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-10">
              Empowering Filipino Virtual Assistants to reach their full
              potential. We provide a platform for qualified, keen, and eager
              Filipino professionals to work and develop their skills in the
              global workforce.
            </p>
            <div className="space-y-6">
              {storyHighlights.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)] transition-colors duration-300">
                    <item.icon
                      size={22}
                      className="text-[var(--primary)] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-[var(--foreground)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-linear-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 rounded-[40px] blur-3xl opacity-60" />
              <div className="relative grid grid-cols-2 gap-6">
                {storyStats.map((stat, i) => (
                  <div
                    key={i}
                    className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-3xl font-bold text-[var(--foreground)] mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </p>
                    <p className="text-[var(--muted)] text-xs font-semibold uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
                {/* Award card — spans full width if odd stat count */}
                <div className="col-span-2 group bg-[var(--accent)] rounded-2xl p-6 text-center text-white hover:brightness-110 transition-all duration-300">
                  <Trophy className="w-10 h-10 mx-auto mb-2 opacity-90" />
                  <p className="font-bold text-lg">The Best VA Hiring Agency</p>
                  <p className="text-white/80 text-sm">
                    Trusted by businesses worldwide
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
