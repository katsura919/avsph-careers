"use client";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { vaRoles } from "@/data/careers/careers.data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const VAroles = () => {
  return (
    <section className="relative py-24 bg-[var(--background-alt)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
            VA OPPORTUNITIES
          </span>
          <h2 className="text-[var(--foreground)] mb-4">
            Explore <span className="text-[var(--accent)]">VA Career Paths</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
            Whether you&apos;re a creative, a tech enthusiast, or a people
            person — there&apos;s a VA role that fits your skills perfectly.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vaRoles.map((role, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <div className="group relative h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-default overflow-hidden">
                {/* Accent top strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Subtle color wash on hover */}
                <div className="absolute inset-0 bg-linear-to-b from-[var(--primary)]/0 to-[var(--primary)]/0 group-hover:from-[var(--primary)]/0 group-hover:to-[var(--primary)]/3 transition-all duration-500" />
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--primary)] transition-colors duration-300">
                    <role.icon
                      size={24}
                      className="text-[var(--primary)] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-[var(--foreground)] mb-2 text-base">{role.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{role.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link
            href="/apply-here"
            className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:text-[var(--accent)] transition-colors duration-200"
          >
            See All Open Positions <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VAroles;
