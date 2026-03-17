import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { professionalRequirements } from "@/data/requirements/requirements.data";

const ProfessionalRequirements = () => {
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
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
              WHO WE LOOK FOR
            </span>
            <h2 className="text-[var(--foreground)] mb-4">
              Professional{" "}
              <span className="text-[var(--accent)]">Qualifications</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
              Beyond equipment, we look for professionals with the right
              background and commitment to remote work excellence.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {professionalRequirements.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-5 relative">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] transition-colors duration-300">
                    <item.icon
                      className="text-[var(--accent)] group-hover:text-white transition-colors duration-300"
                      size={22}
                    />
                  </div>
                  <div>
                    <h3 className="text-[var(--foreground)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalRequirements;
