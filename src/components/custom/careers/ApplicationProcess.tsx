"use client";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const steps = [
  {
    step: "01",
    title: "Submit Your Application",
    desc: "Fill out our online form with your resume, skills, and preferred role. Takes less than 5 minutes.",
    detail: "< 5 minutes",
  },
  {
    step: "02",
    title: "Skills Assessment",
    desc: "Complete a brief skills test tailored to your chosen role to match you with the best opportunities.",
    detail: "15–30 mins",
  },
  {
    step: "03",
    title: "Interview & Orientation",
    desc: "Our team will reach out for a quick interview and onboarding orientation to prepare you for success.",
    detail: "1–2 days",
  },
  {
    step: "04",
    title: "Get Matched & Start",
    desc: "Once approved, you'll be matched with a client and can start your VA career from home right away!",
    detail: "Start immediately",
  },
];

const ApplicationProcess = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10, 92, 135, 0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          opacity: 0.18,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
            HOW TO APPLY
          </span>
          <h2 className="text-[var(--foreground)] mb-4">
            Simple <span className="text-[var(--accent)]">4-Step Process</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
            Our hiring process is simple, fast, and transparent — here&apos;s
            what to expect from start to finish.
          </p>
        </AnimatedSection>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative flex items-start justify-between mb-0">
            <div className="absolute top-7 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-linear-to-r from-[var(--primary)]/20 via-[var(--accent)]/40 to-[var(--primary)]/20" />
            {steps.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.12} className="flex-1 px-4">
                <div className="group flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative w-14 h-14 rounded-full border-2 border-[var(--primary)]/20 bg-white flex items-center justify-center mb-6 z-10 group-hover:border-[var(--accent)] group-hover:shadow-lg group-hover:shadow-[var(--accent)]/20 transition-all duration-300">
                    <span className="text-[var(--primary)] font-bold text-lg group-hover:text-[var(--accent)] transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>
                  <span className="text-[var(--accent)] text-xs font-bold uppercase tracking-wider mb-2 opacity-70">
                    {item.detail}
                  </span>
                  <h3 className="text-[var(--foreground)] text-base mb-2">{item.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile stacked list */}
        <div className="lg:hidden max-w-2xl mx-auto space-y-4">
          {steps.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group flex gap-5 items-start bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[var(--primary)] flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] transition-colors duration-300 shadow-md">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div className="pt-1">
                  <span className="text-[var(--accent)] text-xs font-bold uppercase tracking-wider block mb-1">
                    {item.detail}
                  </span>
                  <h3 className="text-[var(--foreground)] mb-1">{item.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
