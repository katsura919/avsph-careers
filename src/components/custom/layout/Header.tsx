"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { link: "/", name: "Home" },
    { link: "/careers", name: "Careers" },
    { link: "/requirements", name: "Requirements" },
    { link: "/faqs", name: "FAQs" },
    { link: "/about-us", name: "About" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <Navbar className="top-0">
        <NavBody >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 relative z-50 mr-8">
            <Image
              src="/assets/logo.jpeg"
              alt="Advanced Virtual Staff Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span
                className="text-lg font-bold leading-tight"
                style={{ color: "var(--primary)" }}
              >
                AVSPH
              </span>
              <span
                className="text-sm font-medium leading-tight"
                style={{ color: "var(--secondary)" }}
              >
                CAREERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavItems items={navLinks} className="text-[var(--foreground)]" />

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4 relative z-50 ml-auto">
            <Link
              href="/apply-now"
              className="px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 shadow-md hover:translate-y-[-2px] hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
              }}
            >
              Apply Now
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav visible={true} className="lg:hidden">
          <MobileNavHeader>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo.jpeg"
                alt="Advanced Virtual Staff Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <div className="flex flex-col">
                <span
                  className="text-base font-bold leading-tight"
                  style={{ color: "var(--primary)" }}
                >
                  ADVANCED
                </span>
                <span className="text-xs font-medium leading-tight color-[var(--secondary)]">
                  VIRTUAL STAFF
                </span>
              </div>
            </Link>
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-col gap-4 w-full">
              {navLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="text-lg font-medium py-2 border-b border-slate-100"
                  style={{ color: "var(--foreground)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/booking"
                className="w-full text-center px-6 py-3 rounded-xl font-bold text-white mt-2"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                }}
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
