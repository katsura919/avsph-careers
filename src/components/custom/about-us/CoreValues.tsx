"use client";
import { coreValues } from "@/data/about-us/about-us.data";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const CoreValues = () => {
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
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
            OUR CULTURE
          </span>
          <h2 className="text-[var(--foreground)] mb-4">
            The <span className="text-[var(--accent)]">AVS</span> Way
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
            Our core values define who we are and how we work together to
            achieve excellence.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="group relative h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                {/* Accent top strip on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[var(--primary)] transition-colors duration-300">
                    <value.icon
                      size={24}
                      className="text-[var(--primary)] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-[var(--foreground)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
