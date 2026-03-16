import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/data/landing/landing.data";

/* Testimonials Section */

const Testimonials = () => {
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

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-full px-4 py-2 uppercase tracking-wider mb-4">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Virtual Assistants Say
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Hear from real VAs who&apos;ve transformed their careers with
            Advance Virtual Staff PH.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <Card className="group h-full rounded-2xl border border-white/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-7">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 italic">
                    &quot;{t.text}&quot;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-white font-bold text-sm">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-[var(--foreground)] font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-[var(--muted)] text-xs">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
