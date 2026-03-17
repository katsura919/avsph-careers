"use client";
// components
import Hero from "@/components/custom/landing/Hero";
import Stats from "@/components/custom/landing/Stats";
import ChooseUs from "@/components/custom/landing/ChooseUs";
import HowItWorks from "@/components/custom/landing/HowItWorks";
import Testimonials from "@/components/custom/landing/Testimonials";
import CompanyCulture from "@/components/custom/landing/CompanyCulture";
import CTA from "@/components/custom/landing/CTA";
import { Award, Briefcase, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();



  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <ChooseUs />
      <HowItWorks />
      <Testimonials />
      <CompanyCulture />
    </div>
  );
}
