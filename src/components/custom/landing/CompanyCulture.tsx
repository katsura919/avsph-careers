import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

// Company Culture Section
const CompanyCulture = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10, 92, 135, 0.2) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.3,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="inline-flex items-center text-sm font-semibold text-[var(--primary)] bg-white border border-[var(--border)] rounded-full px-4 py-2 uppercase tracking-wider mb-4 shadow-sm">
              Our Culture
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
              More Than a Job -{" "}
              <span className="text-[var(--accent)]">A Family</span>
            </h2>

            <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed mb-8">
              At Advance Virtual Staff PH, we believe that great work happens
              when people feel valued and supported. Our VAs are not just
              employees - they&apos;re part of a thriving community that learns,
              grows, and celebrates together.
            </p>

            <div className="space-y-4">
              {[
                "Free training and professional development programs",
                "Active community of 7,000+ VAs in our AVS Hub",
                "Regular team activities, contests, and recognition",
                "Dedicated support team always ready to help",
                "Competitive pay with growth-based increases",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[var(--primary)] mt-0.5 shrink-0"
                  />
                  <p className="text-[var(--foreground-light)]">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-3xl blur-2xl" />
              <div className="relative bg-linear-to-br from-[var(--background-alt)] to-white rounded-3xl p-8 border border-[var(--border)] shadow-md">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[var(--primary)] text-white rounded-2xl p-6 text-center shadow-sm">
                    <p className="text-3xl font-bold mb-1">7K+</p>
                    <p className="text-white/80 text-sm">Community Members</p>
                  </div>

                  <div className="bg-[var(--accent)] text-white rounded-2xl p-6 text-center shadow-sm">
                    <p className="text-3xl font-bold mb-1">50+</p>
                    <p className="text-white/80 text-sm">Training Courses</p>
                  </div>

                  <div className="bg-[var(--secondary)] text-white rounded-2xl p-6 text-center shadow-sm">
                    <p className="text-3xl font-bold mb-1">4.9★</p>
                    <p className="text-white/80 text-sm">VA Satisfaction</p>
                  </div>

                  <div className="bg-[var(--primary-light)] text-white rounded-2xl p-6 text-center shadow-sm">
                    <p className="text-3xl font-bold mb-1">100%</p>
                    <p className="text-white/80 text-sm">Remote Work</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;
