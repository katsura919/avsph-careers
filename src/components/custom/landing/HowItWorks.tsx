import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const HowItWorks = () => {
  {
    /* How It Works Section */
  }
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10, 92, 135, 0.2) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center text-sm font-semibold text-[var(--primary)] bg-white border border-[var(--border)] rounded-full px-4 py-2 uppercase tracking-wider mb-4 shadow-sm">
            How It Works
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Your Path to Becoming a VA
          </h2>

          <p className="text-[var(--muted)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Getting started is easy. Follow these simple steps and begin your
            new career journey today.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Apply Online",
              desc: "Submit your application through our simple online form with your resume.",
            },
            {
              step: "02",
              title: "Get Assessed",
              desc: "Complete a quick skills assessment so we can match you with the right clients.",
            },
            {
              step: "03",
              title: "Get Trained",
              desc: "Access our free training modules to sharpen your skills and prepare for success.",
            },
            {
              step: "04",
              title: "Start Working",
              desc: "Get matched with a client and begin earning while working from home.",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative text-center group h-full rounded-2xl bg-white border border-[var(--border)] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-[var(--primary-light)]/15 border border-[var(--primary)]/15 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[var(--primary)] font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-[4.5rem] left-[68%] w-[68%] border-t-2 border-dashed border-[var(--primary)]/20" />
                )}

                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>

                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
