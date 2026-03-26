import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    candidates: [
      { label: "How to Apply", href: "/how-it-works" },
      { label: "Virtual Assistant Careers", href: "/careers" },
      { label: "Our Story", href: "/about" },
      { label: "Blog & Tips", href: "/blog" },
    ],
    roles: [
      { label: "Executive VA", href: "/roles/executive-va" },
      { label: "Customer Support", href: "/roles/customer-support" },
      { label: "Social Media Management", href: "/roles/social-media" },
      { label: "Technical Support", href: "/roles/tech-support" },
      { label: "Booking & Coordination", href: "/roles/booking" },
      { label: "Real Estate Assistant", href: "/roles/real-estate" },
    ],
    resources: [
      { label: "VA FAQs", href: "/faqs" },
      { label: "Training Portal", href: "#training" },
      { label: "Skills Assessment", href: "#assessment" },
      { label: "Submit Application", href: "/apply" },
      { label: "Contact Us", href: "#contact" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5 " />, href: "https://www.facebook.com/avsphvirtualassistanceservices" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/advanced-virtual-staff-ph/" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "https://x.com/advancedvstaff" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/advancedvirtualstaff"},
  ];

  return (
    <footer className="bg-primary text-white/70 border-t border-white/10">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <Image
                src="/assets/logo.jpeg"
                alt="Advanced Virtual Staff Logo"
                width={40}
                height={40}
                className="rounded-lg ring-2 ring-white/10 group-hover:ring-white/30 transition-all"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-white">
                  ADVANCED
                </span>
                <span className="text-sm font-medium leading-tight text-white/80">
                  VIRTUAL STAFF
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--accent)] mt-0.5">
                  CAREERS PORTAL
                </span>
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-white/60 leading-relaxed">
              Join the top 1% of Filipino virtual assistants and launch your
              global career. We connect exceptional talent with premium
              international clients.
            </p>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all bg-white/5 hover:bg-[var(--accent)] hover:text-white hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+13183929582"
                className="flex items-center gap-3 hover:text-white transition-colors text-white/50"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[var(--accent)]" />
                </div>
                +1 731-300-9692
              </a>
              <a
                href="mailto:admin@advancedvirtualstaff.com"
                className="flex items-center gap-3 hover:text-white transition-colors text-white/50"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[var(--accent)]" />
                </div>
                hiring@advancedvirtualstaff.com
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">
              For Candidates
            </h4>
            <ul className="space-y-3">
              {footerLinks.candidates.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--accent)] transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">
              Career Paths
            </h4>
            <ul className="space-y-3">
              {footerLinks.roles.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--accent)] transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">
              VA Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--accent)] transition-colors inline-flex items-center group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-6 border-t border-white/5">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white">
          <p className="text-white">
            © {currentYear} Advanced Virtual Staff. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
