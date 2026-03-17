"use client";
// components
import Hero from "@/components/custom/about-us/Hero";
import OurStory from "@/components/custom/about-us/OurStory";
import VisionMission from "@/components/custom/about-us/VisionMission";
import FounderLetter from "@/components/custom/about-us/FounderLetter";
import AVSCommunity from "@/components/custom/about-us/AVSCommunity";
import CoreValues from "@/components/custom/about-us/CoreValues";
import CTA from "@/components/custom/about-us/CTA";

export default function AboutUs() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <OurStory />
      <VisionMission />
      <FounderLetter />
      <AVSCommunity />
      <CoreValues />
      {/* <CTA /> */}
    </div>
  );
}
