"use client";
import { CheckCircle2, Monitor } from "lucide-react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const vaTasks = [
  "Email & Calendar Management",
  "Social Media Management",
  "Data Entry & Research",
  "Customer Support & Chat",
  "Bookkeeping & Invoicing",
  "Content Writing & Editing",
  "Web Development & Design",
  "Project Management",
];

const tags = ["Flexible Hours", "Work From Home", "No Commute", "Global Opportunities", "Skill Development"];

const VAsection = () => {
  return (
    <section id="what-is-va" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text + tags */}
          <AnimatedSection direction="left">
            <span className="text-sm font-semibold uppercase tracking-widest mb-4 block text-[var(--primary)]">
              WHAT IS A VIRTUAL ASSISTANT?
            </span>
            <h2 className="text-[var(--foreground)] mb-6">
              Your Skills. Your Schedule.{" "}
              <span className="text-[var(--accent)]">Your Career.</span>
            </h2>
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-5">
              A Virtual Assistant (VA) is a remote professional who provides
              administrative, technical, or creative support to businesses and
              entrepreneurs worldwide — from the comfort of home.
            </p>
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
              The demand for skilled VAs is growing rapidly, making it one of
              the most promising and flexible career paths available today.
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[var(--primary)]/5 text-[var(--primary)] text-sm font-semibold rounded-full border border-[var(--primary)]/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — task list card */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-br from-[var(--primary)]/8 to-[var(--accent)]/8 rounded-[40px] blur-3xl" />
              <div className="relative bg-[var(--primary)] rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                    <Monitor size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Common VA Tasks</p>
                    <p className="text-white/50 text-xs">What you&apos;ll be doing</p>
                  </div>
                </div>
                {/* List */}
                <div className="p-6 grid grid-cols-1 gap-3">
                  {/* Dot grid */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {vaTasks.map((task, i) => (
                    <div
                      key={i}
                      className="relative z-10 flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors duration-200"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-[var(--accent)] shrink-0"
                      />
                      <span className="text-white/80 text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VAsection;
