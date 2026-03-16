import { benefits } from "@/data/landing/landing.data";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const ChooseUs = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[var(--primary)]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.55,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-full px-4 py-2 uppercase tracking-wider mb-4">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benefits of Being an AVS Virtual Assistant
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We don&apos;t just find you a job — we build your career.
            Here&apos;s what makes AVS the best place for aspiring Virtual
            Assistants.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="group h-full overflow-hidden rounded-2xl border border-white/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)]/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon size={22} className="text-[var(--primary)]" />
                  </div>

                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
