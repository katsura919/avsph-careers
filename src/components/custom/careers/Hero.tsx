"use client";
import { ArrowRight, Rocket, Users, Globe, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const stats = [
  { icon: Users, value: "500+", label: "VAs Placed" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: TrendingUp, value: "95%", label: "Placement Rate" },
];

const Hero = () => {
  return (
    <section className="relative pt-28 pb-0 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 2-column split layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh] pb-16">

          {/* Left — headline + CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[var(--primary)]/8 border border-[var(--primary)]/15 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-widest">
                Now Hiring
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[var(--foreground)] leading-[1.15] mb-5"
            >
              Launch Your{" "}
              <span className="relative inline-block">
                <span className="text-[var(--primary)]">VA Career</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[var(--accent)] rounded-full opacity-60" />
              </span>{" "}
              From Home
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[var(--muted)] text-lg leading-relaxed mb-8 max-w-lg"
            >
              Discover a rewarding remote career with international clients.
              No commute, no limits — just your skills, your schedule, and our
              full support behind you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/apply-here"
                className="btn-primary inline-flex items-center gap-2"
              >
                Apply Now — It&apos;s Free
                <ArrowRight size={18} />
              </Link>
              <a
                href="#what-is-va"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-[var(--primary)]/20 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
              >
                <Rocket size={16} />
                What Is a VA?
              </a>
            </motion.div>

            {/* Trust indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs text-[var(--muted)] font-medium"
            >
              ✓ No experience required &nbsp;·&nbsp; ✓ Free training provided &nbsp;·&nbsp; ✓ Work from anywhere
            </motion.p>
          </div>

          {/* Right — stats card block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative bg-[var(--primary)] rounded-3xl p-10 text-white overflow-hidden">
              {/* Dot grid inside */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/15 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">
                  Our Impact
                </p>
                <h2 className="text-white mb-8">
                  Empowering Filipino Talent Worldwide
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                        <stat.icon size={22} className="text-[var(--accent)]" />
                      </div>
                      <p className="text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-white/50 text-xs font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Flexible Hours", "Work From Home", "Global Clients", "Competitive Pay"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating accent pill */}
            <div className="absolute -bottom-4 -left-4 bg-[var(--accent)] text-white rounded-2xl px-5 py-3 shadow-lg shadow-[var(--accent)]/30">
              <p className="text-xs font-semibold opacity-80">Active Openings</p>
              <p className="text-lg font-bold">50+ Positions</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border gradient separator */}
      <div className="h-px bg-linear-to-r from-transparent via-[var(--border)] to-transparent" />
    </section>
  );
};

export default Hero;
