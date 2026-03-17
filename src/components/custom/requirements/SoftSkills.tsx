import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { softSkills } from "@/data/requirements/requirements.data";

const SoftSkills = () => {
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent)]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--accent)]">
              SOFT SKILLS
            </span>
            <h2 className="text-white mb-4">
              Essential{" "}
              <span className="text-[var(--accent)]">Soft Skills</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              These soft skills are crucial for success as a virtual assistant
              and thriving in a remote work environment.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4">
          {softSkills.map((skill, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="group flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-[var(--accent)]/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <skill.icon
                    className="text-[var(--accent)] group-hover:text-white transition-colors duration-300"
                    size={20}
                  />
                </div>
                <p className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                  {skill.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
