import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { systemRequirements } from "@/data/requirements/requirements.data";
import { CheckCircle2 } from "lucide-react";

const SystemRequirements = () => {
  return (
    <section className="relative py-24 bg-[var(--background-alt)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
              TECHNICAL SET-UP
            </span>
            <h2 className="text-[var(--foreground)] mb-4">
              System &{" "}
              <span className="text-[var(--accent)]">Technical Requirements</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
              To ensure smooth operations and excellent service delivery, all
              VAs must have reliable equipment and internet.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemRequirements.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                {/* Orange accent strip on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors duration-300">
                    <item.icon
                      className="text-[var(--primary)] group-hover:text-white transition-colors duration-300"
                      size={26}
                    />
                  </div>
                  <h3 className="text-[var(--foreground)] mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={15}
                          className="text-[var(--accent)] mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-[var(--muted)]">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemRequirements;
