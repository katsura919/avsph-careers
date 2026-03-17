import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { CheckCircle2, Users, GraduationCap, Star, Laptop } from "lucide-react";

// Company Culture Section
const CompanyCulture = () => {
  const stats = [
    {
      label: "Community Members",
      value: "7K+",
      icon: <Users className="w-5 h-5 text-[var(--primary)]" />,
      accent: "bg-[var(--primary)]",
    },
    {
      label: "Training Courses",
      value: "50+",
      icon: <GraduationCap className="w-5 h-5 text-[var(--accent)]" />,
      accent: "bg-[var(--accent)]",
    },
    {
      label: "VA Satisfaction",
      value: "4.9★",
      icon: <Star className="w-5 h-5 text-[var(--secondary)]" />,
      accent: "bg-[var(--secondary)]",
    },
    {
      label: "Remote Work",
      value: "100%",
      icon: <Laptop className="w-5 h-5 text-[var(--primary-light)]" />,
      accent: "bg-[var(--primary-light)]",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10, 92, 135, 0.15) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="mb-6">
              <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
                OUR CULTURE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
                More Than a Job -{" "}
                <span className="text-[var(--accent)]">A Family</span>
              </h2>
            </div>

            <p className="text-[var(--muted)] text-lg leading-relaxed mb-10">
              At Advance Virtual Staff PH, we believe that great work happens
              when people feel valued and supported. Our VAs are not just
              employees - they&apos;re part of a thriving community that learns,
              grows, and celebrates together.
            </p>

            <div className="space-y-5">
              {[
                "Free training and professional development programs",
                "Active community of 7,000+ VAs in our AVS Hub",
                "Regular team activities, contests, and recognition",
                "Dedicated support team always ready to help",
                "Competitive pay with growth-based increases",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={16} className="shrink-0" />
                  </div>
                  <p className="text-[var(--foreground-light)] text-base font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-linear-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 rounded-[40px] blur-3xl opacity-50" />
              
              <div className="relative grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Top Accent Strip */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity ${stat.accent}`} />
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-xl bg-gray-50 group-hover:bg-white transition-colors duration-300 shadow-xs group-hover:shadow-md">
                        {stat.icon}
                      </div>
                      <p className="text-3xl font-bold text-[var(--foreground)] mb-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </p>
                      <p className="text-[var(--muted)] text-xs font-semibold uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;
