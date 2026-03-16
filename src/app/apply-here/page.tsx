"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Briefcase,
  Heart,
  Users,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import WaveDivider from "@/components/custom/shared/WaveDivider";

import { jobListings } from "@/data/apply-here/listing.data";

const ApplyHere = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Rocket size={16} className="text-[#FF6B35]" />
              <span className="text-white/90 text-sm font-medium">
                Start Your Career Journey
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Apply{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-yellow-400">
                Now
              </span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Browse our open positions or join our waitlist. Your next career
              chapter starts here.
            </p>
          </motion.div>
        </div>

        <WaveDivider color="white" />
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Intro Text */}
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              This Is Your Starting Point
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are common roles our clients are hiring for. Once you
              qualify, we&apos;ll reach out using the contact info you provide.
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Can&apos;t find a role that fits? Join our waitlist and we&apos;ll
              contact you when we&apos;re hiring for your skills.
            </p>
          </AnimatedSection>

          {/* Job Listings + Waitlist Form */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {jobListings.map((job, i) => (
                <AnimatedSection key={job.id} delay={i * 0.08}>
                  <Card
                    className={`group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 ${
                      job.featured
                        ? "ring-2 ring-[#FF6B35]/30 shadow-[#FF6B35]/10"
                        : ""
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-[#024466]/10 text-[#024466] hover:bg-[#024466]/20 text-xs font-semibold">
                          {job.category}
                        </Badge>
                        {job.featured && (
                          <Badge className="bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20 text-xs">
                            Hot
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg text-[#024466] group-hover:text-[#0891b2] transition-colors">
                        {job.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 text-sm mb-5 line-clamp-3">
                        {job.description}
                      </p>
                      <Button className="w-full bg-[#024466] hover:bg-[#02334a] text-white rounded-xl h-10 font-semibold text-sm">
                        Apply Here
                        <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Waitlist Form */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.3}>
                <Card className="sticky top-24 border-0 shadow-xl overflow-hidden">
                  <CardHeader className="bg-linear-to-r from-[#024466] to-[#035a82] text-white p-6">
                    <CardTitle className="text-lg text-center">
                      Join Our Waitlist
                    </CardTitle>
                    <p className="text-blue-200 text-sm text-center mt-1">
                      We&apos;ll contact you when matching roles open up!
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {[
                        {
                          id: "name",
                          label: "Full Name",
                          type: "text",
                          required: true,
                        },
                        {
                          id: "email",
                          label: "Email",
                          type: "email",
                          required: true,
                        },
                        {
                          id: "phone",
                          label: "Phone",
                          type: "tel",
                          required: true,
                        },
                        {
                          id: "position",
                          label: "Desired Position",
                          type: "text",
                          required: true,
                        },
                      ].map((field) => (
                        <div key={field.id}>
                          <label
                            htmlFor={field.id}
                            className="block text-sm font-medium text-[#024466] mb-1.5"
                          >
                            {field.label}{" "}
                            {field.required && (
                              <span className="text-[#FF6B35]">*</span>
                            )}
                          </label>
                          <Input
                            id={field.id}
                            name={field.id}
                            type={field.type}
                            value={formData[field.id as keyof typeof formData]}
                            onChange={handleInputChange}
                            required={field.required}
                            className="rounded-lg border-gray-200 focus:border-[#024466] focus:ring-[#024466]/20"
                          />
                        </div>
                      ))}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-[#024466] mb-1.5"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#024466]/20 focus:border-[#024466] resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#FF6B35] hover:bg-[#e85a28] text-white h-11 rounded-xl font-semibold shadow-lg shadow-orange-500/20"
                      >
                        <Send size={16} className="mr-2" />
                        Send Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-[#f5f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              AVSPH Is Committed To
            </h2>
            <p className="text-gray-600">
              Providing work-from-home opportunities to Filipinos across the
              Philippines.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: "Family",
                desc: "We treat all our virtual staff as family.",
              },
              {
                icon: MessageSquare,
                title: "Openness",
                desc: "We highly encourage everyone to speak their minds.",
              },
              {
                icon: Heart,
                title: "Equality",
                desc: "We don't discriminate — everyone is welcome with open arms.",
              },
            ].map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full text-center hover:-translate-y-1">
                  <CardContent className="p-7">
                    <div className="w-14 h-14 rounded-2xl bg-[#024466] flex items-center justify-center mx-auto mb-4">
                      <value.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-[#024466] text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Apply CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-[#024466] mb-6">
              Why Join Advance Virtual Staff PH?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              {[
                "Work from home — anywhere in the Philippines",
                "Free training and professional development",
                "Competitive compensation packages",
                "Join a community of 7,000+ VAs",
                "Ongoing support and mentorship",
                "Growth-based career advancement",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-left">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-500 shrink-0"
                  />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ApplyHere;
