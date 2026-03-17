import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { whyAVS } from "@/data/careers/careers.data";

const WhyWorkWithAVS = () => {
  return (
    <section className="relative py-24 bg-[var(--primary)] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.3,
        }}
      />
      {/* Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--accent)]">
            WHY AVS?
          </span>
          <h2 className="text-white mb-4">
            Why Work With{" "}
            <span className="text-[var(--accent)]">Advance Virtual Staff PH?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            We&apos;re not just a staffing agency — we&apos;re your partner in
            building a successful remote career.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyAVS.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--accent)]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <item.icon
                    size={22}
                    className="text-[var(--accent)] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-white mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithAVS;
