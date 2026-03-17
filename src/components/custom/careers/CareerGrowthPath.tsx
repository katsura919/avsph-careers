import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { growthPaths } from "@/data/careers/careers.data";

const CareerGrowthPath = () => {
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
            CAREER GROWTH
          </span>
          <h2 className="text-[var(--foreground)] mb-4">
            Your Career Growth{" "}
            <span className="text-[var(--accent)]">at AVS</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
            We invest in your growth with clear career progression paths. Start
            anywhere — grow everywhere.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {growthPaths.map((path, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-linear-to-r ${path.color} text-white mb-4`}
                  >
                    {path.level}
                  </span>
                  <h3 className="text-[var(--foreground)] mb-2">{path.title}</h3>
                  <p className="text-[var(--muted)] text-sm">{path.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerGrowthPath;
