import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data/landing/landing.data";

const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[var(--primary)]">
      {/* Background patterns */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.3,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--background)" }}
          >
            TESTIMONIALS
          </span>
          <h2 className="text-white mb-4">
            Hear From Our <span style={{ color: "var(--accent)" }}> Success Stories</span> 
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            Our virtual assistants are the heart of AVS. Read how joining our community has transformed their professional lives.
          </p>
        </div>

        <AnimatedSection delay={0.2}>
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
